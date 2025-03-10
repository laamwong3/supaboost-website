"use client";

import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import React, { useState } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
  aspectRatio?: "square" | "video" | "wide" | "auto";
  objectFit?: "cover" | "contain" | "fill";
}

export function OptimizedImage({
  src,
  alt,
  fallbackSrc = "/images/placeholder.jpg",
  className = "",
  width,
  height,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
  aspectRatio = "auto",
  objectFit = "cover",
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

  // Define aspect ratio classes
  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
    auto: "",
  };

  // Define object fit classes
  const objectFitClasses = {
    cover: "object-cover",
    contain: "object-contain",
    fill: "object-fill",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md bg-gray-100",
        aspectRatioClasses[aspectRatio],
        className,
      )}
    >
      {isLoading && (
        <div
          className="absolute inset-0 animate-pulse bg-gray-200"
          aria-hidden="true"
        />
      )}

      <Image
        src={error ? fallbackSrc : src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className={cn(
          "transition-opacity duration-300",
          objectFitClasses[objectFit],
          isLoading ? "opacity-0" : "opacity-100",
        )}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
}

// Predefined image sizes for common UI elements
export const imageSizes = {
  thumbnail: { width: 120, height: 80 },
  avatar: { width: 40, height: 40 },
  card: { width: 400, height: 225 },
  hero: { width: 1200, height: 600 },
  gallery: { width: 600, height: 400 },
};

// Get a blurred placeholder data URL for use with Next.js Image
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
