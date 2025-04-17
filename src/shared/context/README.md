# 🌐 Context

This folder contains **shared React Contexts** used globally across the application.

Contexts in this folder should provide global state or behavior that multiple parts of the app rely on. If a context is only used in a specific module or component, it should be declared locally instead.

## Conventions:

- Each context should live in its own folder, e.g., `ThemeContext/`, `AuthContext/`.
- Provide a consistent structure:
  - `Context.tsx`: React context and provider logic
  - `types.ts`: context value types (if needed)
  - `hooks.ts`: custom hooks for easier usage (`useTheme`, `useAuth`, etc.)
- Avoid placing business logic directly in the context — delegate to helpers/services when needed.

## Example use cases:

- Theme management
- Authentication and user session
- App-wide settings or preferences
