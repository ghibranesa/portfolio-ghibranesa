import { useMemo, useState } from 'react';
import { Gsap, GsapPresence } from '../utils/gsapAnimate';
// Note: scroll-triggered entrance animations removed from this section intentionally
import { Plus, Calendar, Building2, Sparkles, ArrowUpRight, ExternalLink } from 'lucide-react';

// HOW TO ADD/CHANGE ORGANIZATION LOGOS:
// 1. Put your logo image into: public/images/organizations/<filename>.webp
// 2. Update the `logo` field below with the path.
// Example: logo: "/images/organizations/telkom-akses.webp"

const experiences = [
  {
    company: 'PT Telkom Akses Service Area Tegal',
    logo: '/images/organizations/telkom-akses-tegal.png',
    role: 'Intern Staff',
    period: 'Sep 2025 - Jan 2026',
    impact: 'Maintained and troubleshot FTTx infrastructure to ensure reliable telecommunication network performance.',
    stack: [
      'FTTx',
      'Fiber Optic',
      'Network Maintenance',
      'Troubleshooting',
    ],
    description: [
      'Maintained and repaired OLT, ODC, ODP, and fiber optic infrastructure to ensure network stability and service quality.',
      'Performed FTTx installation, configuration, and troubleshooting according to Telkom Akses technical standards.',
      'Prepared technical documentation and field reports for operational evaluation and supervisor coordination.',
    ],
    documentUrl: 'https://drive.google.com/file/d/1goMK1iPJ6q9SuzkG6tlm3wm1jheW3Sp5/view?usp=drive_link',
    documentLabel: 'View Certificate',
  },
  {
    company: 'PT Telkom Akses Slawi',
    logo: '/images/organizations/telkom-akses-slawi.png',
    role: 'Intern Staff',
    period: 'Jun 2022 - Sep 2022',
    impact: 'Supported field technicians in FTTx installation and customer network maintenance.',
    stack: [
      'FTTx',
      'Customer Service',
      'Fiber Optic',
      'Field Support',
    ],
    description: [
      'Assisted technicians in FTTx (IndiHome and IndiBiz) installation for residential and business customers.',
      'Supported maintenance activities including equipment replacement and signal quality inspection.',
      'Participated in onsite troubleshooting to maintain internet, telephone, and IPTV service quality.',
    ],
    documentUrl: 'https://drive.google.com/file/d/1jku3q9mMc-lWrccUvVwt7NEgZ02jxG4a/view?usp=drive_link',
    documentLabel: 'View Certificate',
  },
  {
    company: 'Keluarga Mahasiswa Bidikmisi Politeknik Negeri Semarang',
    logo: '/images/organizations/kmb-polines.png',
    role: 'President',
    period: 'Sep 2024 - Sep 2025',
    impact: 'Led organizational programs while strengthening leadership, strategic planning, and team management.',
    stack: [
      'Leadership',
      'Strategic Planning',
      'Team Management',
      'Public Relations',
    ],
    description: [
      'Directed organizational strategy and supervised program execution from planning to evaluation.',
      'Managed academic and non-academic development programs to improve members’ leadership and entrepreneurial skills.',
      'Represented the organization in building strategic partnerships with internal and external stakeholders.',
    ],
    documentUrl: 'https://drive.google.com/file/d/1DUbNnJUapmppm_fdLRmctlHoU_81BvpH/view?usp=drive_link',
    documentLabel: 'View Certificate',
  },
  {
    company: 'Himpunan Mahasiswa Islam (HMI) Komisariat Polines',
    logo: '/images/organizations/hmi-polines.png',
    role: 'General Secretary',
    period: 'Jun 2025 - Present',
    impact: 'Managed organizational administration and coordinated communication to support efficient operations.',
    stack: [
      'Administration',
      'Documentation',
      'Communication',
      'Organization',
    ],
    description: [
      'Managed official correspondence, meeting minutes, and organizational documentation.',
      'Coordinated administrative communication between executives, members, and external institutions.',
      'Prepared meeting agendas and accountability reports to ensure transparent organizational governance.',
    ],
    documentUrl: '',
    documentLabel: 'View Certificate',
  },
];

function getStartYear(period) {
  const match = period.match(/\b20\d{2}\b/);
  return match ? Number(match[0]) : null;
}

const ExperienceItem = ({ experience, isExpanded, onToggle, index }) => {
  const isCurrent = /present/i.test(experience.period);

  return (
    <article className="relative min-w-0">
      <div className="absolute left-[15px] top-0 h-full w-px bg-black/[0.08]" />

      <div className="relative pl-8 min-w-0">
        <span className={`absolute left-[10px] top-8 h-[11px] w-[11px] rounded-full border ${isExpanded ? 'border-lime-500 bg-lime-500' : 'border-black/25 bg-[#FAF9F6]'}`} />

        <button
          onClick={onToggle}
          type="button"
          className="w-full max-w-full rounded-[6px] border border-black/[0.08] bg-white text-left px-5 md:px-7 py-6 md:py-7 hover:border-black/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-300"
        >
          <div className="flex items-start justify-between gap-4">
            {/* Organization Logo */}
            {experience.logo && (
              <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-[6px] border border-black/[0.08] bg-white overflow-hidden flex items-center justify-center p-1.5">
                <img
                  src={experience.logo}
                  alt={experience.company + ' logo'}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.16em] text-black/45 border border-black/[0.1] px-2.5 py-1 rounded-[2px] inline-flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  {experience.period}
                </span>
                {isCurrent && (
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] bg-lime-400 text-black px-2.5 py-1 rounded-[2px]">
                    Active Now
                  </span>
                )}
              </div>

              <h3 className="text-[24px] md:text-[30px] lg:text-[34px] font-black uppercase tracking-[-0.02em] leading-[0.95] text-black">
                {experience.role}
              </h3>

              <p className="mt-2 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.16em] text-black/45 inline-flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                {experience.company}
              </p>

              <p className="mt-5 text-sm md:text-[15px] font-light leading-relaxed text-black/60 max-w-3xl">
                {experience.impact}
              </p>
            </div>

            <Gsap.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={`mt-1 w-10 h-10 shrink-0 rounded-full border flex items-center justify-center ${isExpanded ? 'border-black bg-black text-white' : 'border-black/20 text-black/60'}`}
            >
              <Plus className="w-4.5 h-4.5" strokeWidth={1.8} />
            </Gsap.div>
          </div>
        </button>

        <GsapPresence>
          {isExpanded && (
            <Gsap.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.22, ease: 'easeOut' },
              }}
              className="overflow-hidden"
            >
              <div className="mt-2 ml-0 rounded-[6px] border border-black/[0.08] bg-[#F7F7F3] px-5 md:px-7 py-5 md:py-6">
                <ul className="space-y-3 max-w-3xl">
                  {experience.description.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-black/60 font-light text-sm md:text-[15px] leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/30 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-4 border-t border-black/[0.08] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {experience.stack.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-[9.5px] md:text-[10px] uppercase tracking-[0.14em] text-black/68 border border-black/[0.1] bg-white px-2.5 py-1 rounded-[2px]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {experience.documentUrl && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(experience.documentUrl, '_blank');
                      }}
                      className="inline-flex items-center gap-2 font-mono text-[9.5px] md:text-[10px] uppercase tracking-[0.14em] text-black border border-black/20 bg-white hover:bg-black hover:text-white hover:border-black px-3.5 py-2 rounded-[2px] transition-all duration-200 shrink-0"
                    >
                      <ExternalLink className="w-3 h-3" />
                      {experience.documentLabel || 'View Certificate'}
                    </button>
                  )}
                </div>
              </div>
            </Gsap.div>
          )}
        </GsapPresence>
      </div>
    </article>
  );
};

const ProfessionalExperience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const statCards = useMemo(() => {
    const roles = experiences.length;
    const activeNow = experiences.filter((item) => /present/i.test(item.period)).length;
    const organizations = new Set(experiences.map((item) => item.company)).size;
    const startYears = experiences.map((item) => getStartYear(item.period)).filter(Boolean);
    const firstYear = startYears.length ? Math.min(...startYears) : new Date().getFullYear();

    return [
      { label: 'Experiences', value: String(roles).padStart(2, '0') },
      { label: 'Active Roles', value: String(activeNow).padStart(2, '0') },
      { label: 'Since', value: String(firstYear) },
      { label: 'Organizations', value: String(organizations).padStart(2, '0') },
    ];
  }, []);

  return (
    <section id="experience-section" className="pt-20 md:pt-24 pb-24 md:pb-32 w-full relative bg-[#FAF9F6] overflow-hidden overflow-x-clip">
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute right-0 top-20 w-[460px] h-[460px] bg-black/[0.025] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-3 mb-14 md:mb-16">
          <span className="w-[6px] h-[6px] rounded-full bg-lime-500 shrink-0" />
          <span className="font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-[0.24em] text-black/32">
            03 - Experience_&_Leadership
          </span>
          <div className="flex-1 h-px bg-black/[0.07]" />
        </div>

        <div className="grid lg:grid-cols-[360px_1fr] gap-10 lg:gap-14 items-start min-w-0">
          <aside className="lg:sticky lg:top-24 min-w-0">
            <h2 className="text-[34px] sm:text-[46px] lg:text-[56px] font-black uppercase tracking-[-0.03em] leading-[0.95] text-black">
              Experience &
              <br />
              Leadership.
            </h2>

            <p className="mt-5 text-[14px] md:text-[15px] font-light leading-[1.8] text-black/60 max-w-[320px]">
              Professional experiences in telecommunications engineering, organizational leadership, and technical collaboration that have strengthened my engineering, communication, and problem-solving skills.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-2.5">
              {statCards.map((stat) => (
                <div key={stat.label} className="border border-black/[0.09] bg-white rounded-[4px] px-3.5 py-3.5">
                  <p className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-black/38">{stat.label}</p>
                  <p className="mt-1.5 text-[22px] leading-none font-black tracking-tight text-black">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-black/42">
              <Sparkles className="w-3.5 h-3.5" />
              <p className="font-mono text-[9px] uppercase tracking-[0.16em]">Career timeline - expand each role</p>
            </div>
          </aside>

          <div className="relative space-y-3 min-w-0 overflow-x-clip">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={experience.company + experience.role}
                experience={experience}
                index={index}
                isExpanded={expandedIndex === index}
                onToggle={() => setExpandedIndex((current) => (current === index ? null : index))}
              />
            ))}

            <div className="pl-9 pt-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-black/28 inline-flex items-center gap-1.5">
                End of timeline
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
