# Build Browser Bundle
ng build --configuration=production

# Build Server Bundle for SSR
ng run howdaj-website:server:production

# Project Structure  
This project follows **Domain-Driven Design (DDD)** combined with **Barrel Files** to ensure:

- **Clean separation of concerns** between domain logic, data access, and presentation layers  
- **Scalable and maintainable structure** suitable for large and growing applications  
- **Simplified and readable imports** by avoiding deep relative paths  
- **Easy onboarding for new developers** through a clear, predictable project structure  

This approach helps keep the codebase clean, testable, and easy to evolve over time.

src/
└── app/
    ├── core/
    │   └── domains/
    │       └── seo/
    │           ├── application/
    │           │   ├── index.ts
    │           │   └── meta.service.ts
    │           │
    │           ├── domain/
    │           │   ├── index.ts
    │           │   ├── meta-tag.model.ts
    │           │   └── route-meta.model.ts
    │           │
    │           ├── infrastructure/
    │           │   ├── index.ts
    │           │   ├── meta.factory.ts
    │           │   └── route-meta.config.ts
    │           │
    │           ├── index.ts
    │           └── seo.module.ts
    │
    ├── features/
    │   └── home/
    │
    ├── shared/
    │   ├── components/
    │   ├── directives/
    │   └── pipes/
    │
    ├── app.config.ts
    ├── app.config.server.ts
    └── app.html