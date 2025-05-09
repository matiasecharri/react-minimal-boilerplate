import { useEffect, useRef, useState } from "react";

export const useFetch = <T = unknown>() => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchData = async (endpoint: string) => {
    if (!endpoint) return;

    abortControllerRef.current?.abort();
    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      setError(null);
      setIsLoading(true);
      const response = await fetch(endpoint, { signal: controller.signal });

      if (!response.ok) {
        throw new Error(
          `Response failed, Status: ${response.status}. Message: ${
            response.statusText || "No message provided."
          }`
        );
      }

      const result = await response.json();
      setData(result);
    } catch (e) {
      if ((e as Error).name === "AbortError") {
        console.log("Fetch aborted due to component unmount or refetch.");
        return;
      }

      if (e instanceof Error) {
        setError(e);
      }
    } finally {
        setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  return { data, isLoading, error, fetchData };
};
