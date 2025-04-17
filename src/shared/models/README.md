# 🧩 Models

This folder defines **global TypeScript types and interfaces** that are used throughout the application.

Use this folder for models that are **shared across multiple modules or components**.

If a model is **specific to a single component or feature**, define it locally within that component’s or module’s directory instead.

## Conventions:

- Use `interface` or `type` consistently.
- Organize models by domain when needed (e.g., `User.ts`, `Product.ts`).
- Do not include any business logic or functions.

## Example use cases:

- Global entities like `User`, `Order`, `Product`, etc.
- Enums, shared response formats, or reusable data types
