import { useEffect, useRef, useState } from "react";

export const useFetch = <T = unknown>() => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchData = async (endpoint: string) => {
    if (!endpoint) return;

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      setIsError(false);
      setIsLoading(true);
      const response = await fetch(endpoint, { signal: controller.signal });

      if (!response.ok) {
        throw new Error(
          `Response failed, Status:${response.status}, Message: ${response.statusText}`
        );
      }

      const data = await response.json();
      setData(data);
    } catch (e) {
      if ((e as Error).name === "AbortError") {
        console.log("Fetch aborted due to component unmount or refetch");
        return;
      }
      console.error(e);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  return { data, isLoading, isError, fetchData };
};
