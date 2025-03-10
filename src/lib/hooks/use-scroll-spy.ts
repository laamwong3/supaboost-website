// src/lib/hooks/use-scroll-spy.ts
"use client";

import { useEffect, useState } from "react";

// src/lib/hooks/use-scroll-spy.ts

// src/lib/hooks/use-scroll-spy.ts

export function useScrollSpy(
  sectionIds: string[],
  options?: IntersectionObserverInit,
) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5, ...options },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds, options]);

  return activeId;
}
