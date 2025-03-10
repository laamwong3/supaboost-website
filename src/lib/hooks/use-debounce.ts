// src/lib/hooks/use-debounce.ts
"use client";

import { useEffect, useState } from "react";

// src/lib/hooks/use-debounce.ts

// src/lib/hooks/use-debounce.ts

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
