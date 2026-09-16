import type { DetailedHTMLProps, HTMLAttributes } from "react"

// @google/model-viewer registers a custom element; React/TS doesn't know its
// attributes out of the box. Declared narrowly to what this site actually uses.
// React 19 moved JSX off the global namespace, so this augments "react" (the
// `declare global { namespace JSX }` form no longer reaches IntrinsicElements).
type ModelViewerAttributes = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  src?: string
  poster?: string
  alt?: string
  "camera-controls"?: boolean
  "touch-action"?: string
  "auto-rotate"?: boolean
  "rotation-per-second"?: string
  "interaction-prompt"?: string
  exposure?: string
  "shadow-intensity"?: string
  "environment-image"?: string
  "disable-zoom"?: boolean
  loading?: "auto" | "lazy" | "eager"
  reveal?: "auto" | "interaction" | "manual"
}

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerAttributes
    }
  }
}

export {}
