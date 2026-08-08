import { memo, useState, lazy, Suspense } from 'react';
import { Gsap } from '../utils/gsapAnimate';
import { Trophy, MapPin } from 'lucide-react';

const AchievementDetailModal = lazy(() => import('./AchievementDetailModal'));

/* ─────────────────────────────────────────
   Static data
   ───────────────────────────────────────── */
const achievements = [
  {
    icon: Trophy,
    rank: 'National',
    category: 'Essay',
    title: 'Silver Medal & Bronze Medal',
    event: 'Pekan Essay Nasional (PENA) 2',
    year: 'May 2026',
    organizer: 'Universitas Dhyana Pura',
    description: 'Awarded Silver Medal 1 and Bronze Medal 1 in a national essay competition organized by Universitas Dhyana Pura.',
    longDescription: '',
    photos: [
      { src: '/achievements/pena-2/foto1.jpg', alt: 'PENA 2 - Award Certificate' },
      { src: '/achievements/pena-2/foto2.jpg', alt: 'PENA 2 - Award Certificate' },
      { src: '/achievements/pena-2/foto3.jpeg', alt: 'PENA 2 - Documentation' },
      { src: '/achievements/pena-2/foto4.jpeg', alt: 'PENA 2 - Documentation' },
    ],
  },
  {
    icon: Trophy,
    rank: 'National',
    category: 'Essay',
    title: '1st Place',
    event: 'Sultan Agung Literacy Fest Essay Competition 2025',
    year: 'October 2025',
    organizer: 'Badan Eksekutif Mahasiswa Universitas Sultan Agung',
    description: 'Achieved 1st Place in a national literacy essay competition organized by the Student Executive Board of Universitas Sultan Agung.',
    longDescription: '',
    photos: [
      { src: '/achievements/saliterafest-2025/foto5.jpg', alt: 'SALITERAFEST 2025 - Award Certificate' },
      { src: '/achievements/saliterafest-2025/foto6.jpeg', alt: 'SALITERAFEST 2025 - Team Documentation' },
    ],
  },
  {
    icon: Trophy,
    rank: 'National',
    category: 'Essay',
    title: 'Best Paper',
    event: 'National Essay Competition 2025',
    year: 'October 2025',
    organizer: 'Universitas Negeri Semarang Scholarship Community',
    description: 'Received the Best Paper award in a national essay competition organized by the Universitas Negeri Semarang Scholarship Community.',
    longDescription: '',
    photos: [
      { src: '/achievements/necusc-2025/foto7.jpg', alt: 'NEC USC 2025 - Award Certificate' },
      { src: '/achievements/necusc-2025/foto8.jpeg', alt: 'NEC USC 2025 - Team Documentation' },
    ],
  },
  {
    icon: Trophy,
    rank: 'National',
    category: 'Essay',
    title: '2nd Runner-Up',
    event: 'FKMPI Fair Essay Competition 2025',
    year: 'March 2025',
    organizer: 'Forum Komunikasi Mahasiswa Politeknik Indonesia — Politeknik Negeri Semarang',
    description: 'Awarded 2nd Runner-Up in a national essay competition organized by the Forum Komunikasi Mahasiswa Politeknik Indonesia at Politeknik Negeri Semarang.',
    longDescription: '',
    photos: [
      { src: '/achievements/fkmpifairessaycomp-2025/foto9.jpg', alt: 'FKMPI FAIR 2025 - Award Certificate' },
      { src: '/achievements/fkmpifairessaycomp-2025/foto10.jpeg', alt: 'FKMPI FAIR 2025 - Team Documentation' },
    ],
  },
  {
    icon: Trophy,
    rank: 'Regional',
    category: 'Technology',
    title: '2nd Place',
    event: 'LKS Kab. Tegal — Information Network Cabling 2022',
    year: 'February 2022',
    organizer: 'MKKS SMK Kabupaten Tegal',
    description: 'Achieved 2nd Place in the Student Competency Competition (LKS) of Tegal Regency in the Information Network Cabling category, organized by the SMK Principals Working Group of Tegal Regency.',
    longDescription: '',
    photos: [
      { src: '/achievements/lkstegal-2022/foto11.jpg', alt: 'LKS KAB. TEGAL 2022 - Award Certificate' },
    ],
  },
];

const STATS = [
  { value: 'TELCO', label: 'Telco\nEngineering' },
  { value: 'IoT', label: 'Smart\nSystems' },
  { value: 'R&D', label: 'Research &\nDevelopment' },
];

const CAPABILITIES = [
  'Telecommunication Systems',
  'Embedded Systems',
  'Internet of Things (IoT)',
  'System Integration',
  'Technical Troubleshooting',
  'Web Application Development',
];

/* ─────────────────────────────────────────
   Achievement Card — no "Open Highlight" button
   ───────────────────────────────────────── */
const AchievementCard = ({ achievement, index, onClick }) => {
  const Icon = achievement.icon;
  return (
    <Gsap.div
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.08 + index * 0.06, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -2 }}
      className="group relative cursor-pointer rounded-[8px] overflow-hidden border border-black/[0.08] bg-[#FFFEFC] shadow-[0_4px_14px_rgba(0,0,0,0.03)] hover:border-black/14 hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition-all duration-300"
    >
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-lime-300/[0.16] blur-3xl opacity-35 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-lime-200/[0.08] via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute inset-0 border border-black/[0.03] rounded-[8px] pointer-events-none" />

      <div className="relative z-10 p-5 md:p-6">
        {/* Top meta row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {/* Category tag */}
            <span className="font-mono text-[8.5px] uppercase tracking-[0.18em] text-black/45 border border-black/[0.1] px-2.5 py-1 rounded-[2px] bg-white/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
              {achievement.category}
            </span>
            {/* Rank badge */}
            {achievement.rank && (
              <span className={`font-mono text-[8.5px] font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-[2px] ${
                achievement.rank === 'National'
                  ? 'bg-black text-white'
                  : 'bg-black/70 text-white'
              }`}>
                {achievement.rank}
              </span>
            )}
          </div>
          {/* Year */}
          <span className="font-mono text-[11px] font-bold text-black/30 tabular-nums">{achievement.year}</span>
        </div>

        {/* Main content */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {/* Index + title */}
            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-mono text-[10px] text-black/22 font-bold tabular-nums select-none border border-black/[0.08] px-1.5 py-0.5 rounded-[2px] leading-none shrink-0">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display font-bold text-[24px] md:text-[30px] tracking-[-0.02em] text-black leading-[1.0]">
                {achievement.title}
              </h3>
            </div>

            {/* Event name */}
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-black/38 ml-8 mb-3">
              {achievement.event}
            </p>

            {/* Organizer */}
            <div className="flex items-center gap-1.5 ml-8">
              <MapPin size={9} className="text-black/28 shrink-0" />
              <p className="font-mono text-[8.5px] tracking-[0.1em] text-black/30 leading-relaxed">
                {achievement.organizer}
              </p>
            </div>
          </div>

          {/* Icon circle */}
          <div className="shrink-0 w-10 h-10 rounded-full border border-black/[0.1] bg-white/95 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center group-hover:border-black/20 transition-all duration-300">
            <Icon size={15} className="text-black/35 group-hover:text-black/55 transition-colors duration-300" />
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-5 pt-4 border-t border-black/[0.07] flex items-center">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/28 group-hover:text-black/45 transition-colors duration-300">
            Click to view details
          </span>
        </div>
      </div>
    </Gsap.div>
  );
};

/* ─────────────────────────────────────────
   Main Component
   ───────────────────────────────────────── */
const AboutSection = memo(function AboutSection() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  return (
    <section id="about-section" className="py-20 md:py-28 w-full relative bg-[#FAF9F6] overflow-hidden">

      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute right-0 top-1/4 w-[520px] h-[520px] bg-lime-300/[0.07] rounded-full blur-[110px]" />
        <div className="absolute -left-24 bottom-0 w-[380px] h-[380px] bg-black/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1380px] mx-auto px-6 md:px-12 relative z-10">

        {/* ── Section Label ── */}
        <Gsap.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16 md:mb-20"
        >
          <span className="w-[6px] h-[6px] rounded-full bg-lime-500 shrink-0" />
          <span className="font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-[0.24em] text-black/32">
            01 — About
          </span>
          <div className="flex-1 h-px bg-black/[0.07]" />
        </Gsap.div>

        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] xl:grid-cols-[440px_1fr] gap-14 lg:gap-20 xl:gap-28 items-start">

          {/* ══════════════════════════════
              LEFT COLUMN — Image & Meta
              ══════════════════════════════ */}
          <Gsap.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className=""
          >
            {/* Profile image with decorative offset border */}
            <div className="relative">
              <div className="absolute -top-2.5 -left-2.5 w-full h-full border border-lime-400/25 rounded-[4px] pointer-events-none" />

              <div className="relative aspect-[4/5] w-full rounded-[4px] overflow-hidden border border-black/[0.07] bg-black/[0.04] group">
                {/* Hover desaturation overlay */}
                <div className="absolute inset-0 bg-black/[0.12] group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-multiply pointer-events-none" />

                <picture>
                  <source srcSet="/profilee.webp" type="image/webp" />
                  <img
                    src="/profilee.webp"
                    alt="Ghibran Esa Anugrah"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top grayscale-[25%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </picture>

                {/* Name plate at bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-5 pt-10 pb-4 bg-gradient-to-t from-black/65 via-black/30 to-transparent z-20">
                  <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/50 mb-0.5">Name</p>
                  <p className="text-white font-bold text-[15px] tracking-wide leading-snug">Ghibran Esa Anugrah</p>
                </div>

                {/* Corner brackets */}
                <span className="absolute top-3.5 left-3.5 w-5 h-px bg-white/65 z-20" />
                <span className="absolute top-3.5 left-3.5 w-px h-5 bg-white/65 z-20" />
                <span className="absolute bottom-3.5 right-3.5 w-5 h-px bg-white/65 z-20" />
                <span className="absolute bottom-3.5 right-3.5 w-px h-5 bg-white/65 z-20" />
              </div>
            </div>

            {/* Status + Location */}
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <div className="bg-white border border-black/[0.08] rounded-[3px] py-3.5 px-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-black/32 mb-1.5">Status</p>
                <div className="flex items-center gap-2">
                  <span className="w-[6px] h-[6px] rounded-full bg-lime-500 shrink-0" />
                  <span className="text-[13px] font-bold text-black">Open to Opportunities</span>
                </div>
              </div>
              <div className="bg-white border border-black/[0.08] rounded-[3px] py-3.5 px-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-black/32 mb-1.5">Location</p>
                <div className="flex items-center gap-1.5">
                  <MapPin size={11} className="text-black/38 shrink-0" />
                  <span className="text-[13px] font-bold text-black">Semarang, Indonesia</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-2.5 grid grid-cols-3 gap-2.5">
              {STATS.map((stat, i) => (
                <div key={i} className="bg-white border border-black/[0.08] rounded-[3px] py-4 px-3 text-center">
                  <p className="font-black text-[22px] text-black leading-none tabular-nums">{stat.value}</p>
                  <p className="font-mono text-[8px] uppercase tracking-[0.08em] text-black/32 mt-1.5 leading-tight whitespace-pre-line">{stat.label}</p>
                </div>
              ))}
            </div>
          </Gsap.div>

          {/* ══════════════════════════════
              RIGHT COLUMN — Content
              ══════════════════════════════ */}
          <div className="flex flex-col">

            {/* Headline */}
            <Gsap.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 md:mb-10"
            >
              {/* Eyebrow */}
              <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-black/30 mb-5">
                Based in Indonesia — Open to Opportunities
              </p>

              {/* Main title */}
              <h2 className="font-display font-bold tracking-[-0.025em] leading-[1.08] text-black break-words">
                <span className="block text-[clamp(1.9rem,8.5vw,2.75rem)] sm:text-[56px] lg:text-[64px] xl:text-[72px]">
                  Telecommunications Engineer
                </span>

                <span className="block text-[clamp(1.05rem,4.3vw,1.375rem)] sm:text-[26px] lg:text-[30px] xl:text-[34px] font-medium tracking-[-0.01em] text-black/55 mt-2">
                  Passionate About Telecommunications, Embedded Systems, and Smart Technologies
                </span>
              </h2>
            </Gsap.div>

            {/* Role subtitle */}
            <Gsap.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.65 }}
              className="flex items-center gap-3 mb-8 md:mb-9"
            >
              <span className="font-mono text-[10px] md:text-[10.5px] uppercase tracking-[0.2em] text-black/35">
                RF & Cellular Networks · Fiber Optic Communications · Computer Networking · Embedded & IoT Systems
              </span>
            </Gsap.div>

            {/* Bio */}
            <Gsap.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.14, duration: 0.75, ease: 'easeOut' }}
              className="space-y-4 text-[15px] md:text-[15.5px] font-light text-black/60 leading-[1.88] max-w-[580px]"
            >
              <p>
                I'm <strong className="text-black font-semibold">Ghibran</strong>, a Telecommunications Engineering graduate passionate about communication systems, embedded technology, and practical engineering solutions. I enjoy creating systems that integrate hardware, software, and communication technologies to address real-world engineering challenges.
              </p>

              <p>
                My experience spans telecommunications projects, RF and cellular networks, fiber optic infrastructure, computer networking, embedded systems, and IoT applications through industry internships, academic projects, professional training, and organizational leadership. I am committed to continuous learning and developing reliable engineering solutions that create meaningful real-world impact.
              </p>
            </Gsap.div>

            {/* Divider */}
            <div className="mt-10 md:mt-12 mb-10 md:mb-12 h-px bg-black/[0.07] max-w-[580px]" />

            {/* Core Capabilities */}
            <Gsap.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18, duration: 0.75 }}
            >
              <p className="font-mono text-[9.5px] md:text-[10px] uppercase tracking-[0.22em] text-black/32 mb-4">
                Core Focus & Supporting Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {CAPABILITIES.map((cap, i) => (
                  <span
                    key={i}
                    className="font-mono text-[10px] md:text-[10.5px] uppercase tracking-[0.12em] font-bold text-black/75 border border-black/[0.11] px-3.5 py-[9px] rounded-[3px] hover:border-black hover:text-black hover:bg-black hover:text-white transition-all duration-200 cursor-default"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </Gsap.div>

            {/* Achievements */}
            {achievements.length > 0 && (
              <Gsap.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.22, duration: 0.75 }}
                className="mt-14 md:mt-16"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-[5px] h-[5px] rounded-full bg-lime-500 shrink-0" />
                  <p className="font-mono text-[9.5px] md:text-[10px] uppercase tracking-[0.22em] text-black/40">
                    Notable Achievements
                  </p>
                  <div className="flex-1 h-px bg-gradient-to-r from-black/[0.1] to-transparent" />
                  <span className="font-mono text-[9px] font-bold border border-black/[0.1] bg-white px-2.5 py-1 rounded-[2px] text-black/35 tabular-nums">
                    {achievements.length} Award{achievements.length !== 1 ? 's' : ''}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  {achievements.map((achievement, index) => (
                    <AchievementCard
                      key={index}
                      achievement={achievement}
                      index={index}
                      onClick={() => setSelectedAchievement(achievement)}
                    />
                  ))}
                </div>
              </Gsap.div>
            )}

          </div>
        </div>
      </div>

      {/* Modal */}
      <Suspense fallback={null}>
        <AchievementDetailModal
          isOpen={!!selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
          achievement={selectedAchievement}
        />
      </Suspense>

    </section>
  );
});

export default AboutSection;
