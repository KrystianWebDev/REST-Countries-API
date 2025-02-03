import { useState, useEffect } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

interface Options<T> {
  initialValue: T;
}

export function useFetch<T>(url: string, options?: Options<T>) {
  const [state, setState] = useState<FetchState<T>>({
    data: options?.initialValue ?? null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setState((prev) => ({ ...prev, loading: true }));

    const abortController = new AbortController(); //

    async function fetchData() {
      try {
        const response = await fetch(url, {
          signal: abortController.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setState({
          data,
          loading: false,
          error: null,
        });
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
          //type guard <- wrócimy (:
          return;
        }

        setState({
          data: null,
          loading: false,
          error:
            error instanceof Error
              ? error
              : new Error('An error occurred'),
        });
      }
    }

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return state;
}
