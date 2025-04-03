"use client"

import type React from "react"

import Image from "next/image"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  style?: React.CSSProperties
}

export function OptimizedImage({ src, alt, width, height, className, priority, style }: OptimizedImageProps) {
  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      style={style}
    />
  )
}

