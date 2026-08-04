// ─── Project Meta (short data for gallery cards) ─────────────────────────────
//
// Each entry maps to a project in projectDetailsData.js (same slug).
//
// HOW TO CHANGE COVER IMAGE:
//   1. Drop your image file into: public/images/projects/<project-folder>/cover.webp
//   2. Update the `img` path below to match (already points to that path).
//   Example: img: "/images/projects/iot-smart-camera/cover.webp"

export const PROJECT_META = [
  {
    id: 1,
    slug: "iot-smart-camera",
    title: "IoT Smart Camera Cabinet",
    category: "Internet of Things (IoT) & Embedded Systems",
    year: "2026",
    color: "bg-lime-400",
    img: "/images/projects/iot-smart-camera/cover.webp",
  },
  {
    id: 2,
    slug: "water-management",
    title: "Water Resource Monitoring & Billing System",
    category: "Web Application / Smart Water Management System",
    year: "2025",
    color: "bg-cyan-400",
    img: "/images/projects/water-management/cover.webp",
  },
  {
    id: 3,
    slug: "radar-detection",
    title: "Radar Target Detection via Matched Filtering",
    category: "Digital Signal Processing (DSP) / Radar Systems",
    year: "2025",
    color: "bg-orange-400",
    img: "/images/projects/radar-detection/cover.webp",
  },
  {
    id: 4,
    slug: "ofdm-wireless-simulator",
    title: "OFDM Wireless Communication Simulator",
    category: "Wireless Communications / Digital Signal Processing",
    year: "2026",
    color: "bg-purple-400",
    img: "/images/projects/ofdm-wireless-simulator/cover.webp",
  },
  {
    id: 5,
    slug: "ecg-arrhythmia-detection",
    title: "ECG Heart Rate Detection & Arrhythmia Analysis System",
    category: "Biomedical Signal Processing / Digital Signal Processing (DSP)",
    year: "2026",
    color: "bg-rose-400",
    img: "/images/projects/ecg-arrhythmia-detection/cover.webp",
  },
  {
    id: 6,
    slug: "single-microstrip-antenna",
    title: "Single Microstrip Antenna Design 902–928 MHz",
    category: "RF Engineering / Antenna Design",
    year: "2025",
    color: "bg-blue-400",
    img: "/images/projects/single-microstrip-antenna/cover.webp",
  },
  {
    id: 7,
    slug: "array-antenna-2x2",
    title: "2×2 Microstrip Array Antenna Design 902–928 MHz",
    category: "RF Engineering / Antenna Array Design",
    year: "2025",
    color: "bg-pink-400",
    img: "/images/projects/array-antenna-2x2/cover.webp",
  },
  {
    id: 8,
    slug: "array-antenna-4x1",
    title: "4×1 Microstrip Array Antenna Design 902–928 MHz",
    category: "RF Engineering / Antenna Array Design",
    year: "2025",
    color: "bg-amber-400",
    img: "/images/projects/array-antenna-4x1/cover.webp",
  },
];

export const PROJECT_META_BY_SLUG = PROJECT_META.reduce((accumulator, item) => {
  accumulator[item.slug] = item;
  return accumulator;
}, {});
