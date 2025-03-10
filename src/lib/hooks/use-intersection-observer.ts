// src/lib/hooks/use-intersection-observer.ts
"use client";

import { RefObject, useEffect, useState } from "react";

// src/lib/hooks/use-intersection-observer.ts

// src/lib/hooks/use-intersection-observer.ts

interface UseIntersectionObserverProps {
  ref: RefObject<Element>;
  options?: IntersectionObserverInit;
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver({
  ref,
  options = { threshold: 0.1 },
  freezeOnceVisible = true,
}: UseIntersectionObserverProps): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref?.current;

    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);

      if (entry.isIntersecting && freezeOnceVisible) {
        observer.disconnect();
      }
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, options, freezeOnceVisible]);

  return isIntersecting;
}
