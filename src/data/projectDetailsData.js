// ─── Project Detail Data ──────────────────────────────────────────────────────
//
// Pure data objects imported by aiContext.js and ChatWidget.jsx.
// React components (ProjectCaseLayout) read this for modal/detail rendering.
//
// HOW TO ADD DOCUMENTATION IMAGES:
//   1. Drop images into: public/images/projects/<project-folder>/doc-1.webp, doc-2.webp, etc.
//   2. Add their paths to the `galleryImages` array below.
//   Example: galleryImages: ["/images/projects/iot-smart-camera/doc-1.webp", ...]
//
// HOW TO CHANGE COVER IMAGE:
//   1. Drop your image into: public/images/projects/<project-folder>/cover.webp
//   2. Update `img` in projectMeta.js (not here) — cover is managed there.

export const PROJECT_DETAILS_DATA = {
  "iot-smart-camera": {
    title: "IoT-Based Smart Camera Cabinet with Automated Hysteresis Climate Control",
    category: "Internet of Things (IoT) & Embedded Systems",
    year: "2026",
    overview:
      "An intelligent camera and optical equipment storage cabinet designed to automatically maintain relative humidity (40–50% RH) using hysteresis control and Peltier-based dehumidification. The system prevents mold growth and lens degradation while providing real-time monitoring through a web dashboard, scheduled UVC sterilization, and uninterrupted operation using a UPS.",
    galleryImages: [
      "/images/projects/iot-smart-camera/doc-1.webp",
      "/images/projects/iot-smart-camera/doc-2.webp",
      "/images/projects/iot-smart-camera/doc-3.webp",
      "/images/projects/iot-smart-camera/doc-4.webp",
    ],
    features: [
      "Automated hysteresis humidity control (40–50% RH)",
      "Real-time web dashboard with live telemetry",
      "Historical data visualization using Chart.js",
      "Start-up cooling strategy before humidity regulation",
      "Automatic defrost cycle every 3 hours",
      "Scheduled UVC sterilization (02:00 AM)",
      "Local LCD monitoring",
      "Wi-Fi auto reconnect",
      "UPS backup for continuous operation",
      "REST API communication between ESP32 and web server",
    ],
    impact: [
      "99.21% humidity control success rate (non-AC room)",
      "97.22% humidity control success rate (AC room)",
      "95.9% successful IoT data transmission",
      "Average RTT of 1,446.75 ms",
      "Stable operation for more than 144 hours (6 days)",
    ],
    stack: [
      // Embedded
      "ESP32 DevKit V1",
      "SHT31 Temperature & Humidity Sensor",
      "Arduino (C/C++)",
      // Hardware
      "TEC1-12705 Peltier",
      "Relay Module",
      "UVC Lamp",
      "LM2596",
      "LCD I2C",
      "DC Fan",
      "UPS 12V 10A",
      // Backend
      "PHP REST API",
      // Database
      "MySQL",
      // Frontend
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "Chart.js",
    ],
  },

  "water-management": {
    title: "Water Resource Monitoring & Billing Management System",
    category: "Web Application / Smart Water Management System",
    year: "2025",
    overview:
      "A web-based water management information system that digitalizes water meter recording, automates billing calculations, and monitors water distribution in real time. The platform improves operational efficiency while reducing billing errors and water losses.",
    galleryImages: [
      "/images/projects/water-management/doc-1.webp",
      "/images/projects/water-management/doc-2.webp",
      "/images/projects/water-management/doc-3.webp",
      "/images/projects/water-management/doc-4.webp",
    ],
    features: [
      "Digital water meter logging",
      "Automated billing calculation",
      "Real-time monitoring dashboard",
      "Water usage analytics",
      "Customer management system",
      "Regional management",
      "Leak detection and anomaly alerts",
      "Historical consumption records",
    ],
    impact: [
      "Reduced Non-Revenue Water (NRW) by 25–35%",
      "Billing process shortened from days to seconds",
      "99% data accuracy",
      "Faster payment collection process",
    ],
    stack: [
      // Frontend
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "Bootstrap 5",
      "Chart.js",
      "DataTables",
      // Backend
      "PHP 8.x",
      // Database
      "MySQL",
    ],
  },

  "radar-detection": {
    title: "Radar Target Detection Simulator via Matched Filtering",
    category: "Digital Signal Processing (DSP) / Radar Systems",
    year: "2025",
    overview:
      "A modular radar signal processing simulator implementing LFM chirp generation, multi-target echo simulation, AWGN noise modeling, matched filtering, peak detection, and range estimation for radar target detection in GNU Octave.",
    galleryImages: [
      "/images/projects/radar-detection/doc-1.webp",
      "/images/projects/radar-detection/doc-2.webp",
      "/images/projects/radar-detection/doc-3.webp",
      "/images/projects/radar-detection/doc-4.webp",
    ],
    features: [
      "LFM chirp pulse generation",
      "Multi-target echo simulation",
      "AWGN noise modeling",
      "Matched Filtering",
      "Automatic peak detection",
      "Target range estimation",
    ],
    impact: [
      "Accurately detected three simulated targets",
      "Estimated target ranges with zero error",
      "Demonstrated pulse compression using Matched Filtering",
      "Visualized the complete radar processing pipeline",
    ],
    stack: [
      "GNU Octave",
      "Digital Signal Processing",
      "Radar Signal Processing",
      "Matched Filtering",
      "LFM Chirp",
      "Signal Correlation",
    ],
  },

 "ofdm-wireless-simulator": {
    title: "OFDM Wireless Communication Simulator",
    category: "Wireless Communications / Digital Signal Processing",
    year: "2025",
    overview:
      "An end-to-end OFDM communication system simulation built in GNU Octave, implementing QAM modulation, AWGN and Rayleigh channel models, FFT/IFFT processing, BER performance evaluation, and constellation analysis across different transmission scenarios.",
    galleryImages: [
      "/images/projects/ofdm-wireless-simulator/doc-1.webp",
      "/images/projects/ofdm-wireless-simulator/doc-2.webp",
      "/images/projects/ofdm-wireless-simulator/doc-3.webp",
      "/images/projects/ofdm-wireless-simulator/doc-4.webp",
    ],
    features: [
      "Adaptive QPSK/16-QAM/64-QAM modulation",
      "OFDM modulation and demodulation",
      "AWGN and Rayleigh channel modeling",
      "Zero Forcing channel equalization",
      "BER performance evaluation",
      "Time and frequency domain visualization",
    ],
    impact: [
      "Successfully simulated end-to-end OFDM PHY transmission",
      "Evaluated BER performance under various SNR conditions",
      "Demonstrated channel equalization for reliable reception",
      "Validated OFDM performance over AWGN and Rayleigh channels",
    ],
    stack: [
      "GNU Octave",
      "MATLAB",
      "Orthogonal Frequency Division Multiplexing (OFDM)",
      "Digital Signal Processing",
      "Wireless Communications",
      "QPSK / QAM Modulation",
    ],
  },

  "ecg-arrhythmia-detection": {
    title: "ECG Heart Rate Detection & Arrhythmia Analysis System",
    category: "Biomedical Signal Processing / Digital Signal Processing (DSP)",
    year: "2026",
    overview:
      "A modular ECG signal processing system developed in GNU Octave to analyze raw Electrocardiogram (ECG) recordings from the MIT-BIH Arrhythmia Database. The system performs noise reduction, adaptive R-peak detection, heart rate estimation, RR interval analysis, and basic cardiac rhythm classification using a complete DSP pipeline without relying on proprietary MATLAB toolboxes.",
    galleryImages: [
      "/images/projects/ecg-arrhythmia-detection/doc-1.webp",
      "/images/projects/ecg-arrhythmia-detection/doc-2.webp",
      "/images/projects/ecg-arrhythmia-detection/doc-3.webp",
      "/images/projects/ecg-arrhythmia-detection/doc-4.webp",
    ],
    features: [
      "Raw ECG CSV data ingestion from MIT-BIH Arrhythmia Database",
      "Bandpass filtering (0.5–40 Hz) for noise reduction",
      "Automatic inverted QRS detection and correction",
      "Adaptive amplitude-based R-peak detection",
      "RR interval and heart rate calculation",
      "Bradycardia and Tachycardia classification",
      "FFT spectrum visualization",
      "Automatic ECG analysis dashboard generation",
      "Statistical ECG signal analysis",
      "Fully modular GNU Octave implementation",
    ],
    impact: [
      "Successfully processed MIT-BIH Arrhythmia Database ECG recordings",
      "Robust R-peak detection on noisy clinical ECG signals",
      "Automatic handling of inverted QRS morphology",
      "Effective suppression of false-positive detections",
      "Generated comprehensive ECG analysis dashboards",
      "Produced heart rate, RR interval, FFT spectrum, and rhythm classification automatically",
    ],
    stack: [
      // Development
      "GNU Octave",
      "MATLAB-Compatible Scripts",
      // DSP
      "Bandpass Filtering",
      "Fast Fourier Transform (FFT)",
      "Peak Detection",
      "Signal Normalization",
      "Spectral Analysis",
      // Biomedical
      "ECG Signal Processing",
      "R-Peak Detection",
      "RR Interval Analysis",
      "Heart Rate Estimation",
      "Arrhythmia Classification",
      // Dataset
      "MIT-BIH Arrhythmia Database",
      "PhysioNet ECG Records",
    ],
  },

  "single-microstrip-antenna": {
    title: "Single Microstrip Antenna Design for 902–928 MHz ISM Band",
    category: "RF Engineering / Antenna Design",
    year: "2025",
    overview:
      "Designed a single microstrip antenna operating in the 902–928 MHz ISM band using CST Studio Suite. The project focused on optimizing antenna dimensions and evaluating impedance matching, VSWR, gain, and radiation characteristics through electromagnetic simulation for sub-GHz wireless communication applications.",
    galleryImages: [
      "/images/projects/single-microstrip-antenna/doc-1.webp",
      "/images/projects/single-microstrip-antenna/doc-2.webp",
      "/images/projects/single-microstrip-antenna/doc-3.webp",
    ],
    features: [
      "Single microstrip antenna design for the 902–928 MHz ISM band",
      "S-Parameter (S11) analysis for impedance matching",
      "VSWR performance evaluation",
      "1D and 3D radiation pattern analysis",
      "Gain and directivity characterization",
      "Electromagnetic simulation using CST Studio Suite",
    ],
    impact: [
      "Achieved S11 of approximately -28 dB at 915 MHz",
      "Obtained VSWR of approximately 1.3",
      "Achieved 3.71 dBi gain and 3.96 dBi directivity",
      "Produced a directional radiation pattern with approximately 80.2° beamwidth",
      "Demonstrated efficient performance for sub-GHz wireless communication applications",
    ],
    stack: [
      "CST Studio Suite",
      "RF Engineering",
      "Microstrip Antenna Design",
      "Electromagnetic Simulation",
      "S-Parameter Analysis",
      "VSWR Analysis",
      "Radiation Pattern Analysis",
    ],
  },

  "array-antenna-2x2": {
    title: "2×2 Microstrip Array Antenna Design for 902–928 MHz ISM Band",
    category: "RF Engineering / Antenna Array Design",
    year: "2025",
    overview:
      "Designed and simulated a 2×2 microstrip array antenna operating in the 902–928 MHz ISM band using CST Studio Suite. The project optimized antenna array performance to improve gain, impedance matching, and directional radiation for wireless communication applications.",
    galleryImages: [
      "/images/projects/array-antenna-2x2/doc-1.webp",
      "/images/projects/array-antenna-2x2/doc-2.webp",
      "/images/projects/array-antenna-2x2/doc-3.webp",
    ],
    features: [
      "2×2 microstrip array antenna design",
      "S-Parameter (S11) optimization",
      "VSWR performance evaluation",
      "1D and 3D radiation pattern analysis",
      "Gain and directivity analysis",
      "Full-wave electromagnetic simulation using CST Studio Suite",
    ],
    impact: [
      "Achieved S11 of up to -28 dB near 920 MHz",
      "Obtained VSWR of approximately 1.1",
      "Achieved 4.411 dBi gain and 4.610 dBi directivity",
      "Produced a highly directional radiation pattern",
      "Demonstrated excellent impedance matching and efficient antenna performance within the 902–928 MHz ISM band",
    ],
    stack: [
      "CST Studio Suite",
      "RF Engineering",
      "Antenna Array Design",
      "Electromagnetic Simulation",
      "S-Parameter Analysis",
      "VSWR Analysis",
      "Radiation Pattern Analysis",
    ],
  },

  "array-antenna-4x1": {
    title: "4×1 Microstrip Array Antenna Design for 902–928 MHz ISM Band",
    category: "RF Engineering / Antenna Array Design",
    year: "2025",
    overview:
      "Designed and simulated a 4×1 microstrip array antenna operating in the 902–928 MHz ISM band using CST Studio Suite. The project focused on improving antenna gain and radiation directivity while maintaining excellent impedance matching for sub-GHz wireless communication systems.",
    galleryImages: [
      "/images/projects/array-antenna-4x1/doc-1.webp",
      "/images/projects/array-antenna-4x1/doc-2.webp",
      "/images/projects/array-antenna-4x1/doc-3.webp",
    ],
    features: [
      "4×1 microstrip array antenna design",
      "S-Parameter (S11) optimization",
      "VSWR performance evaluation",
      "1D and 3D radiation pattern analysis",
      "Gain and directivity characterization",
      "Electromagnetic simulation using CST Studio Suite",
    ],
    impact: [
      "Achieved S11 of up to -28 dB near 920 MHz",
      "Obtained VSWR of approximately 1.1",
      "Achieved 4.455 dBi gain and 4.952 dBi directivity",
      "Produced a highly directional radiation pattern",
      "Demonstrated effective performance for sub-GHz wireless communication applications",
    ],
    stack: [
      "CST Studio Suite",
      "RF Engineering",
      "Antenna Array Design",
      "Electromagnetic Simulation",
      "S-Parameter Analysis",
      "VSWR Analysis",
      "Radiation Pattern Analysis",
    ],
  },
};
