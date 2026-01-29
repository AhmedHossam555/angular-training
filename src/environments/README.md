# Environments Setup Guide

This project uses a **multi-environment architecture** to support Local, Development, Staging, Test, and Production configurations for both Angular (browser) and Angular SSR (Node/Express).

This setup ensures:

* Type-safe environment configs
* Correct environment at **build time** (Angular)
* Correct environment in **SSR Node server**
* Optional **runtime overrides** via `process.env`

---

## 📁 Folder Structure

```text
src/
 └── environments/
     ├── base/
     │   ├── environment.base.ts
     │   ├── environment.interface.ts
     │   └── environment.types.ts
     │
     ├── environment.ts              # Active alias (replaced by Angular)
     ├── environment.local.ts        # Local developer machine
     ├── environment.development.ts  # Shared development
     ├── environment.staging.ts      # Staging (UAT)
     ├── environment.test.ts         # Testing / QA
     └── environment.production.ts   # Production
```

---

## 🧩 Base Environment Pattern

### base/environment.types.ts

Shared enums and types:

```ts
export type EnvironmentName =
  | 'local'
  | 'development'
  | 'staging'
  | 'test'
  | 'production';

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';
```

---

### base/environment.interface.ts

Defines the contract for all environments:

```ts
import { EnvironmentName, LogLevel } from './environment.types';

export interface Environment {
  name: EnvironmentName;
  production: boolean;
  port: number; // Used by SSR

  api: {
    baseUrl: string;
    timeoutMs: number;
  };

  logging: {
    level: LogLevel;
    enableConsole: boolean;
  };

  features: {
    enableSSR: boolean;
    enableAnalytics: boolean;
    useInMemoryApi: boolean;
  };

  cache: {
    enabled: boolean;
    ttlSeconds: number;
  };
}
```

### base/environment.base.ts

Shared defaults for ALL environments:

```ts
import { Environment } from './environment.interface';

export const baseEnvironment: Omit<Environment, 'name' | 'production'> = {
  port: 4000,

  api: {
    baseUrl: 'http://localhost:3000/api',
    timeoutMs: 15000,
  },

  logging: {
    level: 'info',
    enableConsole: true,
  },

  features: {
    enableSSR: true,
    enableAnalytics: false,
    useInMemoryApi: false,
  },

  cache: {
    enabled: false,
    ttlSeconds: 0,
  },
};
```

---

## 🌍 Per-Environment Files

Each environment extends `baseEnvironment` and overrides what is needed.

### Example: environment.development.ts

```ts
import { baseEnvironment } from './base/environment.base';
import { Environment } from './base/environment.interface';

export const environment: Environment = {
  ...baseEnvironment,
  name: 'development',
  production: false,

  port: 5000,

  api: {
    ...baseEnvironment.api,
    baseUrl: 'https://dev.api.example.com',
  },

  logging: {
    ...baseEnvironment.logging,
    level: 'debug',
  },

  features: {
    ...baseEnvironment.features,
    enableAnalytics: false,
  },
};
```

Same pattern for:

* `environment.local.ts`
* `environment.staging.ts`
* `environment.test.ts`
* `environment.production.ts`

---

## 🔁 environment.ts (Active Alias)

This file is the **single import point** used across the app and SSR.

Angular CLI replaces it at build time.

```ts
// src/environments/environment.ts
export * from './environment.development';
```

⚠️ You should NEVER manually change this file per environment.
Always rely on Angular `fileReplacements`.

---

## ⚙️ angular.json Configuration

Angular uses `fileReplacements` to switch environments at build time.

### Example (production):

```json
"production": {
  "fileReplacements": [
    {
      "replace": "src/environments/environment.ts",
      "with": "src/environments/environment.production.ts"
    }
  ]
}
```

### All environments mapping:

| Configuration | Environment File           |
| ------------- | -------------------------- |
| local         | environment.local.ts       |
| development   | environment.development.ts |
| staging       | environment.staging.ts     |
| test          | environment.test.ts        |
| production    | environment.production.ts  |

---

## 🚀 Usage in server.ts (SSR)

The SSR Node server imports the same Angular environment.

### server.ts

```ts
import { environment } from './environments/environment';

if (isMainModule(import.meta.url)) {
  const port = Number(process.env['PORT'] ?? environment.port);

  app.listen(port, () => {
    console.log(
      `🚀 SSR ${environment.name.toUpperCase()} running on http://localhost:${port}`
    );
  });
}
```

### Why this works

* Angular replaces `environment.ts` at build time
* SSR bundle receives the correct environment values
* You can override port at runtime using `PORT`

---

## 📦 package.json Scripts (Recommended)

These scripts ensure the correct environment is bundled for SSR.

```json
"scripts": {
  "ng": "ng",
  "start": "ng serve",

  "build": "ng build",
  "watch": "ng build --watch --configuration=development",
  "test": "ng test",

  "build:ssr:dev": "ng build --configuration=development",
  "build:ssr:staging": "ng build --configuration=staging",
  "build:ssr:test": "ng build --configuration=test",
  "build:ssr:prod": "ng build --configuration=production",

  "serve:ssr": "node dist/angular-training/server/server.mjs",

  "ssr:local": "ng build --configuration=local && npm run serve:ssr",
  "ssr:dev": "npm run build:ssr:dev && npm run serve:ssr",
  "ssr:staging": "npm run build:ssr:staging && npm run serve:ssr",
  "ssr:test": "npm run build:ssr:test && npm run serve:ssr",
  "ssr:prod": "npm run build:ssr:prod && npm run serve:ssr"
}
```

✅ Notes:

* SSR environment is selected at **build time**, not runtime
* `serve:ssr` only runs the already-built server bundle
* Use `PORT` only to override listening port

---

## 🧠 Summary Flow

```text
ng build --configuration=staging
        ↓
Angular replaces environment.ts
        ↓
SSR bundle imports correct environment
        ↓
server.ts reads environment.port + environment.name
        ↓
Node server starts on correct port
```
- This setup is fully compatible with Angular SSR, CI/CD pipelines, Docker, and PM2 deployments.