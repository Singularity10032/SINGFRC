type SpaceBackdropProps = {
  /**
   * Where the nebula glow sits in the section. "center" suits heroes,
   * "corner" suits mid-page sections, "none" is starfield only.
   */
  glow?: "center" | "corner" | "none"
}

/**
 * Shared background treatment for every page: the team page's starfield
 * plus a soft purple/cyan nebula glow. Purely decorative, zero JS.
 */
export function SpaceBackdrop({ glow = "corner" }: SpaceBackdropProps) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="subtle-stars" />
      {glow === "center" && <div className="absolute inset-0 nebula-center" />}
      {glow === "corner" && <div className="absolute inset-0 nebula-corner" />}
    </div>
  )
}
