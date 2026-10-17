import { Gsap } from "../../utils/gsapAnimate";

// Helper: inject Cloudinary automatic format & quality + width
function cloudinarySrc(originalUrl, width) {
  try {
    if (!originalUrl || typeof originalUrl !== 'string') return originalUrl;
    if (!originalUrl.includes('/upload/')) return originalUrl;
    // Avoid double-injecting transforms
    if (originalUrl.includes('f_auto') || originalUrl.includes('q_auto')) return originalUrl;
    return originalUrl.replace('/upload/', `/upload/f_auto,q_auto,w_${width}/`);
  } catch {
    return originalUrl;
  }
}

const TechBadge = ({ children }) => (
  <span className="px-3 py-1.5 bg-black/5 font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.12em] md:tracking-[0.16em] text-black/80">
    {children}
  </span>
);

// Documentation gallery: max 4 per row, consistent sizes, responsive
const DocumentationGallery = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="mt-12 lg:mt-16 border-t border-black/10 pt-12 lg:pt-16">
      <h2 className="text-xs font-mono font-bold uppercase tracking-[0.12em] md:tracking-[0.16em] text-black/40 mb-6 flex items-center gap-3">
        <span className="w-6 h-[1px] bg-black/20" /> Documentation
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((src, idx) => (
          <DocImage key={idx} src={src} index={idx} />
        ))}
      </div>
    </div>
  );
};

// Individual documentation image with lightbox
const DocImage = ({ src, index }) => {
  const handleClick = () => {
    // Simple lightbox: open image in new tab if no lightbox lib present
    window.open(src, '_blank');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group relative block w-full aspect-[4/3] overflow-hidden rounded-[4px] border border-black/8 bg-neutral-100 hover:border-black/20 transition-all duration-200 cursor-zoom-in"
      title={`Documentation image ${index + 1}`}
    >
      <img
        src={src}
        alt={`Documentation ${index + 1}`}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
    </button>
  );
};

export default function ProjectCaseLayout({
  project,
  onClose,
  closeLabel = "Back to Home",
  preFeatureSection,
  mode,
}) {
  return (
    <div className={`bg-[#FAF9F6] text-black font-sans selection:bg-lime-400 selection:text-black overflow-x-hidden ${mode === 'page' ? 'min-h-screen' : 'h-full flex flex-col'}`}>

      {/* ── Sticky header: Category | Year  +  Close button ─── */}
      <div className="sticky top-0 z-40 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase font-bold tracking-[0.12em] md:tracking-[0.16em] text-black/40 flex items-center gap-2">
              {project.category}
            </span>
            <span className="font-mono text-[10px] uppercase font-bold tracking-[0.12em] md:tracking-[0.16em] text-black/30 border-l border-black/20 pl-3">
              {project.year}
            </span>
          </div>
          <button
            onClick={onClose}
            className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2 text-xs md:text-sm font-bold tracking-wide uppercase hover:bg-black hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            Close
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* ── Hero: Title + Overview ──────────────────────── */}
        <section className="max-w-4xl mx-auto text-center flex flex-col items-center px-6 md:px-10 pt-16 md:pt-20 pb-12">
          <Gsap.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tighter text-black mb-8"
          >
            {project.title.split(' ').map((word, i, arr) => (
              <span key={i} className={i === arr.length - 1 ? "text-transparent" : ""} style={i === arr.length - 1 ? { WebkitTextStroke: '2px black' } : {}}>
                {word}{i !== arr.length - 1 ? ' ' : ''}
              </span>
            ))}
          </Gsap.h1>

          {/* Project Overview */}
          {project.overview && (
            <Gsap.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg leading-7 md:leading-8 text-black/60 max-w-2xl mx-auto"
            >
              {project.overview}
            </Gsap.p>
          )}
        </section>

        <section className="max-w-5xl mx-auto px-6 md:px-10 pb-24">

          {/* Custom Section Block (if any) */}
          {preFeatureSection}

          {/* ── Documentation ──────────────── */}
          <DocumentationGallery images={project.galleryImages} />

          {/* ── Main Grid: Key Features + Outcome/Impact ── */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mt-12 lg:mt-16 border-t border-black/10 pt-12 lg:pt-16">

            {/* Left Column: Key Features */}
            <div className="space-y-16">
              {project.features && project.features.length > 0 && (
                <div>
                  <h2 className="text-xs font-mono font-bold uppercase tracking-[0.12em] md:tracking-[0.16em] text-black/40 mb-6 flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-black/20" /> Key Features
                  </h2>
                  <ul className="space-y-4 text-base leading-relaxed text-black/80">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-4">
                        <span className="mt-1.5 shrink-0 block w-1.5 h-1.5 bg-lime-500 rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column: Outcome / Impact */}
            <div className="space-y-16">
              {project.impact && project.impact.length > 0 && (
                <div>
                  <h2 className="text-xs font-mono font-bold uppercase tracking-[0.12em] md:tracking-[0.16em] text-black/40 mb-6 flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-black/20" /> Outcome / Impact
                  </h2>
                  <ul className="space-y-4 text-base leading-relaxed text-black/80">
                    {project.impact.map((item, idx) => (
                      <li key={idx} className="flex gap-4">
                        <span className="mt-1.5 shrink-0 block w-1.5 h-1.5 bg-lime-500 rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* ── Tech Stack ──────────────── */}
          <div className="mt-12 lg:mt-16 border-t border-black/10 pt-12 lg:pt-16">
            {project.stack && project.stack.length > 0 && (
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-[0.12em] md:tracking-[0.16em] text-black/40 mb-6 flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-black/20" /> Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <TechBadge key={item}>{item}</TechBadge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
