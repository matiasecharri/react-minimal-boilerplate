import { useCallback } from "react";

export const useReverseState = (
  setState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return useCallback(() => {
    setState((prev) => !prev);
  }, [setState]);
};
