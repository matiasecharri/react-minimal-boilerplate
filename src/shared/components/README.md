# 🧱 Shared Components

This folder contains **global, reusable React components** that are shared across multiple parts of the application.

These components are **not tied to a specific feature or page** and should be designed to be as generic and customizable as possible.

## Conventions:

- Organize components in their own folders: one folder per component (`Button/`, `Modal/`, `Card/`, etc.).
- Each component folder may include:
  - `index.tsx` or `ComponentName.tsx`
  - `styles.module.css` 
  - `types.ts` for props definition
  - `test.tsx` for unit tests (optional)
- Keep components **dumb/presentational** when possible. Logic should be injected via props or hooks.

## Example use cases:

- UI elements like `Button`, `Input`, `Checkbox`
- Layout blocks like `Card`, `Modal`, `DummyWrapper`
- Common feedback components like `Spinner`, `ErrorMessage`
