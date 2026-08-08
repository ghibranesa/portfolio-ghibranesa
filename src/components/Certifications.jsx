import { useMemo, useState } from 'react';
import { Gsap, GsapPresence } from '../utils/gsapAnimate';
import { Plus, Calendar, Building2, Award, ExternalLink, BadgeCheck } from 'lucide-react';

// HOW TO ADD/CHANGE CREDENTIAL LOGOS:
// 1. Put your logo image into: public/images/skills/<filename>.webp
// 2. Add a `logo` field to the certification entry below.
// Example: logo: "/images/skills/cisco-logo.webp"

const certifications = [
  {
    name: 'Radio Frequency Engineer',
    logo: '/images/skills/blsdm-komdigi.png',
    issuer: 'Balai Pelatihan Sumber Daya Manusia Komunikasi dan Digital (BLSDM Komdigi) Yogyakarta',
    program: 'Vocational School Graduate Academy – Digital Talent Scholarship 2025',
    period: '2025',
    credentialId: '19310750111044 VSGA/BLSDM.Komdigi/2025',
    impact: 'Competency-based training focused on cellular radio frequency engineering, drive test operation, network performance analysis, and RF optimization for 2G, 3G, and 4G networks.',
    tags: ['Radio Frequency', 'Drive Test', '4G LTE', 'Cellular Network', 'Digital Talent'],
    description: [
      'Studied fundamental concepts of Radio Frequency (RF) and cellular networks, including 2G, 3G, and 4G technologies.',
      'Performed drive test activities to collect and evaluate cellular network performance data and measurement results.',
      'Analyzed drive test data and network performance parameters to identify RF coverage and quality issues.',
      'Applied RF troubleshooting and optimization concepts to investigate network degradation and formulate recommendations for improving cellular network performance.',
    ],
    documentUrl: 'https://drive.google.com/file/d/1VpgfYGj6iH_eDMqrDAqgioo3a2eFmmge/view?usp=drive_link',
    documentLabel: 'View Certificate',
  },
  {
    name: 'CCNA: Switching, Routing and Wireless Essentials',
    logo: '/images/skills/cisco.png',
    issuer: 'Cisco Networking Academy',
    program: null,
    period: 2025,
    credentialId: null,
    impact: 'Industry-standard Cisco certification covering advanced switching, routing protocols, and wireless LAN configuration and management.',
    tags: ['Cisco', 'Routing', 'Switching', 'Wireless LAN', 'CCNA'],
    description: [
      'Gained hands-on knowledge of VLANs, inter-VLAN routing, STP, EtherChannel, and DHCPv4/v6 configuration.',
      'Studied wireless networking concepts including WLAN security protocols, wireless controllers, and access point deployment.',
      'Covered redundancy protocols such as HSRP and static/dynamic routing with OSPF for scalable network design.',
    ],
    documentUrl: 'https://drive.google.com/file/d/1ty4P8IKxnSiEn64oiz6do1VmufT0bHHB/view?usp=drive_link',
    documentLabel: 'View Certificate',
  },
  {
    name: 'CCNA: Introduction to Networks',
    logo: '/images/skills/cisco.png',
    issuer: 'Cisco Networking Academy',
    program: null,
    period: 2024,
    credentialId: null,
    impact: 'Foundational Cisco certification validating knowledge of networking concepts, IPv4/IPv6 addressing, and Ethernet communication principles.',
    tags: ['Cisco', 'Networking', 'IPv4', 'IPv6', 'CCNA'],
    description: [
      'Studied networking fundamentals including OSI model layers, TCP/IP stack, and network device roles.',
      'Learned IP addressing, subnetting, and basic router and switch configuration using Cisco IOS.',
      'Practiced network troubleshooting and connectivity verification using tools like ping, traceroute, and Packet Tracer simulations.',
    ],
    documentUrl: 'https://drive.google.com/file/d/1dviu3GFXfNASj6YTnuSm6wkDJ8E3H1TN/view?usp=drive_link',
    documentLabel: 'View Certificate',
  },
  {
    name: 'Offshore Oil and Gas Processing',
    logo: '/images/skills/engineering-academy.png',
    issuer: 'Engineering Academy',
    program: 'Class – Free Class',
    period: '2024',
    credentialId: 'FreeClass/1905/2024/311',
    impact: 'Specialized training in offshore oil and gas processing systems, covering production processes, equipment, and safety standards.',
    tags: ['Oil & Gas', 'Offshore', 'Process Engineering', 'Safety'],
    description: [
      'Studied the fundamentals of offshore oil and gas processing including separation, compression, and treatment systems.',
      'Learned about production equipment operation, safety procedures, and industry standards relevant to offshore platforms.',
      'Gained exposure to engineering workflows for offshore processing facilities as part of a structured online engineering class.',
    ],
    documentUrl: 'https://drive.google.com/file/d/1r3HNiyWXF-FTM4MZRz7xtj7QnnkgPKXA/view?usp=drive_link',
    documentLabel: 'View Certificate',
  },
  {
    name: 'KKNI Level II – Computer and Network Engineering Competency',
    logo: '/images/skills/bnsp.png',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    program: null,
    period: '2023',
    credentialId: '61100 3513 2 0000258 2023',
    impact: 'National professional competency certification at KKNI Level II in computer and network engineering, issued by Indonesia\'s official certification authority.',
    tags: ['BNSP', 'KKNI Level II', 'Network Engineering', 'Professional Certification'],
    description: [
      'Assessed and certified for national competency standards in computer and network engineering at KKNI (Indonesian Qualification Framework) Level II.',
      'Demonstrated proficiency in network installation, configuration, maintenance, and troubleshooting aligned with BNSP occupational standards.',
      'Certification is nationally recognized and issued by Badan Nasional Sertifikasi Profesi, Indonesia\'s official professional certification body.',
    ],
    documentUrl: 'https://drive.google.com/file/d/18zjr66yie4BNPpYbHcBqvHeBWwUF5MfC/view?usp=drive_link',
    documentLabel: 'View Certificate',
  },
];

const CertificationItem = ({ cert, isExpanded, onToggle }) => {
  return (
    <article className="relative min-w-0">
      <div className="absolute left-[15px] top-0 h-full w-px bg-black/[0.08]" />

      <div className="relative pl-8 min-w-0">
        <span
          className={`absolute left-[10px] top-8 h-[11px] w-[11px] rounded-full border ${
            isExpanded ? 'border-lime-500 bg-lime-500' : 'border-black/25 bg-[#FAF9F6]'
          }`}
        />

        <button
          onClick={onToggle}
          type="button"
          className="w-full max-w-full rounded-[6px] border border-black/[0.08] bg-white text-left px-5 md:px-7 py-6 md:py-7 hover:border-black/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-300"
        >
          <div className="flex items-start justify-between gap-4">
            {/* Issuer Logo */}
            {cert.logo && (
              <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-[6px] border border-black/[0.08] bg-white overflow-hidden flex items-center justify-center p-1.5">
                <img
                  src={cert.logo}
                  alt={cert.issuer + ' logo'}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                {cert.period && (
                  <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.16em] text-black/45 border border-black/[0.1] px-2.5 py-1 rounded-[2px] inline-flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {cert.period}
                  </span>
                )}
                {cert.credentialId && (
                  <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.16em] text-black/38 border border-black/[0.07] px-2.5 py-1 rounded-[2px] inline-flex items-center gap-1.5">
                    <BadgeCheck className="w-3 h-3" />
                    ID: {cert.credentialId}
                  </span>
                )}
              </div>

              <h3 className="text-[20px] md:text-[26px] lg:text-[30px] font-black uppercase tracking-[-0.02em] leading-[1.0] text-black">
                {cert.name}
              </h3>

              <p className="mt-2 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.16em] text-black/45 inline-flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 shrink-0" />
                {cert.issuer}
                {cert.program && (
                  <span className="text-black/30 normal-case tracking-normal font-sans text-[10px] ml-1">
                    — {cert.program}
                  </span>
                )}
              </p>

              <p className="mt-5 text-sm md:text-[15px] font-light leading-relaxed text-black/60 max-w-3xl">
                {cert.impact}
              </p>
            </div>

            <Gsap.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={`mt-1 w-10 h-10 shrink-0 rounded-full border flex items-center justify-center ${
                isExpanded ? 'border-black bg-black text-white' : 'border-black/20 text-black/60'
              }`}
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
                  {cert.description.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-black/60 font-light text-sm md:text-[15px] leading-relaxed"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/30 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-4 border-t border-black/[0.08] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9.5px] md:text-[10px] uppercase tracking-[0.14em] text-black/68 border border-black/[0.1] bg-white px-2.5 py-1 rounded-[2px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (cert.documentUrl) window.open(cert.documentUrl, '_blank');
                    }}
                    className="inline-flex items-center gap-2 font-mono text-[9.5px] md:text-[10px] uppercase tracking-[0.14em] text-black border border-black/20 bg-white hover:bg-black hover:text-white hover:border-black px-3.5 py-2 rounded-[2px] transition-all duration-200 shrink-0"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {cert.documentLabel}
                  </button>
                </div>
              </div>
            </Gsap.div>
          )}
        </GsapPresence>
      </div>
    </article>
  );
};

const Certifications = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const statCards = useMemo(() => {
    const total = certifications.length;
    const withId = certifications.filter((c) => c.credentialId).length;
    const issuers = new Set(certifications.map((c) => c.issuer)).size;
    const latestYear = certifications
      .map((c) => c.period ? Number(c.period) : null)
      .filter(Boolean)
      .reduce((max, y) => Math.max(max, y), 0);

    return [
      { label: 'Certifications', value: String(total).padStart(2, '0') },
      { label: 'With Credential ID', value: String(withId).padStart(2, '0') },
      { label: 'Issuers', value: String(issuers).padStart(2, '0') },
      { label: 'Latest', value: latestYear ? String(latestYear) : 'N/A' },
    ];
  }, []);

  return (
    <section
      id="certifications-section"
      className="pt-20 md:pt-24 pb-24 md:pb-32 w-full relative bg-[#FAF9F6] overflow-hidden overflow-x-clip"
    >
      {/* Background blob */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute left-0 top-20 w-[460px] h-[460px] bg-black/[0.025] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* ── SECTION LABEL — centered like TechnicalCapabilities ── */}
        <Gsap.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-4 mb-14 md:mb-16"
        >
          <div className="w-8 h-[2px] bg-black" />
          <span className="font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-[0.18em] md:tracking-[0.24em] text-black">
            04 - Skills_&_Credentials
          </span>
          <div className="w-8 h-[2px] bg-black" />
        </Gsap.div>

        {/* ── TWO-COLUMN LAYOUT — same as ProfessionalExperience ── */}
        <div className="grid lg:grid-cols-[360px_1fr] gap-10 lg:gap-14 items-start min-w-0">

          {/* LEFT: Sticky sidebar */}
          <aside className="lg:sticky lg:top-24 min-w-0">
            <h2 className="text-[34px] sm:text-[46px] lg:text-[56px] font-black uppercase tracking-[-0.03em] leading-[0.95] text-black">
              Skills &
              <br />
              Credentials.
            </h2>

            <p className="mt-5 text-[14px] md:text-[15px] font-light leading-[1.8] text-black/60 max-w-[320px]">
              Professional certifications in networking, telecommunications, and engineering that validate technical competency and commitment to continuous learning.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-2.5">
              {statCards.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-black/[0.09] bg-white rounded-[4px] px-3.5 py-3.5"
                >
                  <p className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-black/38">
                    {stat.label}
                  </p>
                  <p className="mt-1.5 text-[22px] leading-none font-black tracking-tight text-black">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-black/42">
              <Award className="w-3.5 h-3.5" />
              <p className="font-mono text-[9px] uppercase tracking-[0.16em]">
                Expand each entry to view details
              </p>
            </div>
          </aside>

          {/* RIGHT: Certification list */}
          <div className="relative space-y-3 min-w-0 overflow-x-clip">
            {certifications.map((cert, index) => (
              <CertificationItem
                key={cert.name + cert.issuer}
                cert={cert}
                index={index}
                isExpanded={expandedIndex === index}
                onToggle={() =>
                  setExpandedIndex((current) => (current === index ? null : index))
                }
              />
            ))}

            <div className="pl-9 pt-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-black/28 inline-flex items-center gap-1.5">
                End of certifications
                <BadgeCheck className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
