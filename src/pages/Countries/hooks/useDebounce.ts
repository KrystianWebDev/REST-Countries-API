import React from 'react';

export function useDebounce(value: unknown, delay = 500) {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    // Create a timeout to update the debounced value
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up the timeout if value changes or component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]); // Only re-run effect if value or delay changes

  return debouncedValue;
}
