// Real dimensions (read from each webp file) for the photos used on the
// arcade variant. Never invent a photo not listed in PHOTO-MANIFEST.md.

export const photos = {
  heroA: { src: "/images/photos/IMG_3284.webp", width: 1650, height: 2200 },
  heroB: { src: "/images/photos/IMG_3280.webp", width: 1650, height: 2200 },
  sticker1: { src: "/images/photos/IMG_4527.webp", width: 2200, height: 1467 },
  sticker2: { src: "/images/photos/IMG_2033.webp", width: 2200, height: 1650 },
  sticker3: { src: "/images/photos/IMG_3178.webp", width: 1497, height: 998 },
  sticker4: { src: "/images/photos/100_0531.webp", width: 2200, height: 1467 },
  cabinetFuelFrenzy: { src: "/images/photos/IMG_3270.webp", width: 1650, height: 2200 },
  cabinetAlgaeAbyss: { src: "/images/photos/20250417_091753.webp", width: 2200, height: 1016 },
  cabinetIgnite: { src: "/images/photos/IMG_1796.webp", width: 2200, height: 1467 },
  cabinetFll: { src: "/images/photos/PHOTO-2025-12-13-16-02-01.webp", width: 1600, height: 1200 },
  cabinetInterviews: { src: "/images/photos/IMG_6710.webp", width: 1650, height: 2200 },
  cabinetIgnite2: { src: "/images/photos/IMG_1908.webp", width: 2200, height: 1467 },
  robotOrion: { src: "/images/photos/image_3.webp", width: 1280, height: 960 },
  robot2025: { src: "/images/photos/20250417_142332.webp", width: 1016, height: 2200 },
  teamHeader: { src: "/images/photos/IMG_4607.webp", width: 2200, height: 1467 },
} as const

export type PhotoKey = keyof typeof photos
