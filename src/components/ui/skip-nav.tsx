import React from "react";

interface SkipNavProps {
  /**
   * The ID of the main content area to skip to
   */
  contentId?: string;
  /**
   * The text to display in the skip link
   */
  label?: string;
}

/**
 * A component that allows keyboard users to skip navigation and jump directly to the main content
 */
export function SkipNav({
  contentId = "main-content",
  label = "Skip to content",
}: SkipNavProps) {
  return (
    <a
      href={`#${contentId}`}
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
    >
      {label}
    </a>
  );
}
