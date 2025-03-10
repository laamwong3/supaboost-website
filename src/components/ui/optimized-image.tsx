"use client";

import Image, { ImageProps } from "next/image";
import React, { useState } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
}

export function OptimizedImage({
  src,
  alt,
  fallbackSrc = "/images/placeholder.jpg",
  className = "",
  ...props
}: OptimizedImageProps) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setError(true);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div
          className="absolute inset-0 animate-pulse bg-gray-200"
          aria-hidden="true"
        />
      )}

      <Image
        src={error ? fallbackSrc : src}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
}

// Blurred placeholder for images that need one
export function getBlurDataURL(
  width = 16,
  height = 9,
  color = "e2e8f0",
): string {
  return `data:image/svg+xml;base64,${Buffer.from(
    `<svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect width="${width}" height="${height}" fill="#${color}"/>
        </svg>`,
  ).toString("base64")}`;
}

// Default image sizes for common UI elements
export const imageSizes = {
  thumbnail: { width: 120, height: 80 },
  avatar: { width: 40, height: 40 },
  card: { width: 400, height: 225 },
  hero: { width: 1200, height: 600 },
  gallery: { width: 600, height: 400 },
};
