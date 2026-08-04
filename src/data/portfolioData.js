// ─── Portfolio Data (single source of truth for site content) ────
//
// This is the LIVE data the site renders and the AI assistant reads. It is
// imported by `src/services/aiContext.js` and `src/components/ChatWidget.jsx`.
//
// CUSTOMIZING: edit the values below with your own details. For a clean,
// fully-commented starter template (with guidance on every field), see
// `src/data/examplePortfolioData.js`. See also `docs/customization.md`.
//
// FIELDS TO EDIT:
//   profile.name / role / bio / location / email / socials  → your identity
//   experience[]   → your work / organization / education history
//   techStack[]    → your skills, grouped by `category`
//   projects[]     → short project summaries (keep `slug` in sync with
//                    projectMeta.js + projectDetailsData.js)
//   achievements[] → awards / hackathons (optional)
//   capabilities[] → high-level specializations
export const PORTFOLIO_DATA = {
    profile: {
        name: "Ghibran",
        role: "Telecommunications Engineer",
        bio: "Passionate about communication systems, embedded technology, and intelligent engineering solutions. Designing practical systems by integrating hardware, software, and communication technologies to solve real-world engineering challenges.",
        location: "Semarang, Indonesia",
        email: "ghibranesa71576@gmail.com",
        socials: {
            github: "ghibranesa",
            linkedin: "ghibranesa"
        }
    },
    experience: [],
    techStack: [
        // Networking & Telecommunications
        { name: "Cisco", category: "Networking & Telecommunications" },
        { name: "MikroTik / The Dude", category: "Networking & Telecommunications" },
        { name: "Fortinet", category: "Networking & Telecommunications" },
        { name: "Huawei", category: "Networking & Telecommunications" },
        { name: "Wireshark", category: "Networking & Telecommunications" },
        { name: "Cacti", category: "Networking & Telecommunications" },
        { name: "Fiber Optic", category: "Networking & Telecommunications" },
        { name: "FTTH", category: "Networking & Telecommunications" },
        // Embedded Systems & IoT
        { name: "ESP32", category: "Embedded Systems & IoT" },
        { name: "Arduino", category: "Embedded Systems & IoT" },
        { name: "Raspberry Pi", category: "Embedded Systems & IoT" },
        { name: "C", category: "Embedded Systems & IoT" },
        { name: "C++", category: "Embedded Systems & IoT" },
        { name: "MQTT", category: "Embedded Systems & IoT" },
        { name: "Sensor Integration", category: "Embedded Systems & IoT" },
        { name: "Actuator Control", category: "Embedded Systems & IoT" },
        { name: "LoRa / RF", category: "Embedded Systems & IoT" },
        { name: "Postman", category: "Embedded Systems & IoT" },
        // Web Development
        { name: "React", category: "Web Development" },
        { name: "Next.js", category: "Web Development" },
        { name: "JavaScript", category: "Web Development" },
        { name: "PHP", category: "Web Development" },
        { name: "HTML5", category: "Web Development" },
        { name: "CSS3", category: "Web Development" },
        { name: "Tailwind CSS", category: "Web Development" },
        { name: "MySQL", category: "Web Development" },
        { name: "HTTP / REST", category: "Web Development" },
        { name: "XAMPP", category: "Web Development" },
        { name: "Laragon", category: "Web Development" },
        { name: "Vite", category: "Web Development" },
        { name: "Framer Motion", category: "Web Development" },
        { name: "GitHub", category: "Web Development" },
        { name: "Vercel", category: "Web Development" },
        { name: "Netlify", category: "Web Development" },
        // Engineering Software
        { name: "Python", category: "Engineering Software" },
        { name: "Linux", category: "Engineering Software" },
        { name: "Git", category: "Engineering Software" },
        { name: "AutoCAD", category: "Engineering Software" },
        { name: "SketchUp", category: "Engineering Software" },
        { name: "EasyEDA", category: "Engineering Software" },
        { name: "Proteus", category: "Engineering Software" },
        { name: "Keysight ADS", category: "Engineering Software" },
        { name: "CST Studio", category: "Engineering Software" },
        { name: "OptiSystem", category: "Engineering Software" },
        { name: "GNU Octave", category: "Engineering Software" },
    ],
    projects: [
        {
            slug: "iot-smart-camera",
            title: "IoT-Based Smart Camera Cabinet",
            category: "Internet of Things (IoT) & Embedded Systems",
            description: "Intelligent camera cabinet with automated hysteresis climate control, real-time web dashboard, and UVC sterilization."
        },
        {
            slug: "water-management",
            title: "Water Resource Monitoring & Billing Management System",
            category: "Web Application / Smart Water Management System",
            description: "Web-based water management system digitalizing meter recording, billing, and real-time distribution monitoring."
        },
        {
            slug: "radar-detection",
            title: "Radar Target Detection via Matched Filtering",
            category: "Digital Signal Processing (DSP) / Radar Systems",
            description: "Complete radar signal processing simulation using LFM chirp, matched filtering, peak detection, and range estimation for multi-target detection in AWGN environments."
        },
        {
            slug: "ofdm-wireless-simulator",
            title: "OFDM Wireless Communication Simulator",
            category: "Wireless Communications / Digital Signal Processing",
            description: "OFDM communication system simulation implementing QAM modulation, AWGN and Rayleigh channels, BER analysis, and constellation visualization using GNU Octave."
        },
        {
            slug: "ecg-arrhythmia-detection",
            title: "ECG Heart Rate Detection & Arrhythmia Analysis System",
            category: "Biomedical Signal Processing / Digital Signal Processing (DSP)",
            description: "Modular ECG signal processing system in GNU Octave analyzing MIT-BIH Arrhythmia Database recordings with R-peak detection, heart rate estimation, and arrhythmia classification."
        },
        {
            slug: "single-microstrip-antenna",
            title: "Single Microstrip Antenna Design 902–928 MHz ISM Band",
            category: "RF Engineering / Antenna Design",
            description: "Microstrip antenna designed and simulated with CST Studio Suite for sub-GHz wireless communication."
        },
        {
            slug: "array-antenna-2x2",
            title: "2×2 Microstrip Array Antenna Design 902–928 MHz ISM Band",
            category: "RF Engineering / Antenna Array Design",
            description: "2×2 microstrip array antenna designed and simulated for improved gain and directional radiation."
        },
        {
            slug: "array-antenna-4x1",
            title: "4×1 Microstrip Array Antenna Design 902–928 MHz ISM Band",
            category: "RF Engineering / Antenna Array Design",
            description: "4×1 microstrip array antenna focused on improving gain and radiation directivity for sub-GHz systems."
        }
    ],
    achievements: [
        {
            title: "Silver Medal & Bronze Medal — Pekan Essay Nasional (PENA) 2",
            rank: "National",
            category: "Essay",
            organizer: "Universitas Dhyana Pura",
            year: "2026",
            description: "Awarded Silver Medal 1 and Bronze Medal 1 in a national essay competition organized by Universitas Dhyana Pura."
        },
        {
            title: "1st Place — Sultan Agung Literacy Fest Essay Competition 2025",
            rank: "National",
            category: "Essay",
            organizer: "Badan Eksekutif Mahasiswa Universitas Sultan Agung",
            year: "2025",
            description: "Achieved 1st Place in a national literacy essay competition organized by the Student Executive Board of Universitas Sultan Agung."
        },
        {
            title: "Best Paper — National Essay Competition 2025",
            rank: "National",
            category: "Essay",
            organizer: "Universitas Negeri Semarang Scholarship Community",
            year: "2025",
            description: "Received the Best Paper award in a national essay competition organized by the Universitas Negeri Semarang Scholarship Community."
        },
        {
            title: "2nd Runner-Up — February Fair Essay Competition 2025",
            rank: "National",
            category: "Essay",
            organizer: "Forum Komunikasi Mahasiswa Politeknik Indonesia — Polines",
            year: "2025",
            description: "Awarded 2nd Runner-Up in a national essay competition organized by the Forum Komunikasi Mahasiswa Politeknik Indonesia."
        },
        {
            title: "2nd Place — LKS Kab. Tegal, Information Network Cabling 2022",
            rank: "Regional",
            category: "Technology",
            organizer: "MKKS SMK Kabupaten Tegal",
            year: "2022",
            description: "Achieved 2nd Place in the Student Competency Competition of Tegal Regency in the Information Network Cabling category."
        }
    ],
    capabilities: [
        "Telecommunication Systems",
        "Embedded Systems",
        "Internet of Things (IoT)",
        "System Integration",
        "Technical Troubleshooting",
        "Web Application Development"
    ]
};
