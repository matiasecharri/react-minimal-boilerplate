# 🧰 Utilities

This folder contains **general** and **reusable** utility functions that are independent of React and business logic.

## Conventions:

- Functions should be **pure** (no side effects).
- Should not import React components, hooks, or any business-specific logic.
- Ideally, complex logic should be covered by unit tests.
- Group similar functions into separate files (e.g., `stringUtils.ts`, `dateUtils.ts`).

## Example use cases:

- Date formatting
- Input validation
- Array/object manipulation
