# 🪝 Custom React Hooks

This directory contains reusable, production-ready custom hooks designed to simplify common UI and async state management logic.

---

## 📡 `useFetch<T>()`

A typed data fetching hook with built-in loading, error, and cancellation handling.

### ✅ Features:
- Generic type support for response shape
- Auto-aborts previous fetches when refetching
- Handles component unmount cleanup
- Returns `data`, `isLoading`, `isError`, and `fetchData(endpoint)`

### 🔧 Usage:

```tsx
import { useFetch } from "@/shared/hooks/useFetch";

const { data, isLoading, isError, fetchData } = useFetch<MyResponseType>();

useEffect(() => {
  fetchData("https://my-api.com/resource");
}, []);
```

---

## 🔄 `useReverseState()`

A small helper hook to toggle a `boolean` state.

### ✅ Features:
- Wraps `useCallback` for performance
- Keeps state update clean and declarative

### 🔧 Usage:

```tsx
import { useState } from "react";
import { useReverseState } from "@/shared/hooks/useReverseState";

const [open, setOpen] = useState(false);
const toggleOpen = useReverseState(setOpen);

return <button onClick={toggleOpen}>Toggle</button>;
```

---

## ✨ Tip

These hooks are designed to be composable and minimal. Feel free to extend them or combine them as needed in your components.
> 📁 Want to contribute your own hook? Add it to `src/shared/hooks/`, export it in `index.ts`, and optionally document it in `README.md`.

---

## 👨‍💻 Author

Crafted with care by [Matías Echarri](https://github.com/matiasecharri)


