# ✅ Helpers

This folder contains helper functions that are specific to the application’s business logic or structure.

## Difference from `utilities`:

- Helpers may depend on context, props, or business rules.
- Often used to transform or adapt data for rendering.

## Conventions:

- Group helpers by module or feature when possible.
- If logic becomes too complex, consider moving it to a dedicated service layer.

## Example use cases:

- Adapting API responses into UI-friendly formats
- Business-related calculations (e.g., shopping cart totals)
