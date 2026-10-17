import { useEffect, useCallback } from 'react';
import { Gsap, GsapPresence } from '../utils/gsapAnimate';
import { createPortal } from 'react-dom';
import { X, Trophy, MapPin } from 'lucide-react';

/* ─── Main Modal ────────────────────────────────────────── */
export default function AchievementDetailModal({ isOpen, onClose, achievement }) {
    // Lock body scroll
    useEffect(() => {
        if (!isOpen) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = prev; };
    }, [isOpen]);

    // Escape key
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [isOpen, onClose]);

    const handleClose = useCallback(() => onClose(), [onClose]);

    if (!achievement) return null;

    const photos = (achievement.photos || []).slice(0, 4);
    const hasPhotos = photos.length > 0;

    return createPortal(
        <GsapPresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-0 md:p-6 lg:p-10">
                    {/* Backdrop */}
                    <Gsap.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={handleClose}
                    />

                    {/* Modal content */}
                    <Gsap.div
                        initial={{ opacity: 0, y: 30, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.98 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        data-lenis-prevent
                        className="relative z-10 w-full h-full md:h-auto md:max-h-[90vh] max-w-3xl bg-[#FAF9F6] shadow-2xl md:rounded-lg overflow-y-auto overscroll-contain flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* ── Sticky header ─────────────────────── */}
                        <div className="sticky top-0 z-40 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-black/5">
                            <div className="px-6 md:px-10 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="font-mono text-[10px] uppercase font-bold tracking-[0.14em] text-[#000] flex items-center gap-2">
                                        <Trophy size={13} className="text-lime-500" />
                                        {achievement.rank}
                                    </span>
                                    <span className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-black/40 border border-black/[0.1] px-2 py-0.5 rounded-[2px]">
                                        {achievement.category}
                                    </span>
                                </div>
                                <button
                                    onClick={handleClose}
                                    className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                                    aria-label="Close"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* ── Content body ──────────────────────── */}
                        <div className="px-6 md:px-10 pt-8 pb-14 space-y-10">

                            {/* Title block */}
                            <div className="max-w-2xl">
                                <p className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-black/38 mb-3">
                                    {achievement.event}
                                </p>
                                <h1 className="font-display font-black text-[32px] md:text-[42px] tracking-[-0.025em] leading-[1.0] text-black mb-3">
                                    {achievement.title}
                                </h1>
                                <div className="flex items-center gap-1.5 mt-4">
                                    <MapPin size={11} className="text-black/35 shrink-0" />
                                    <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-black/40">
                                        {achievement.organizer}
                                    </span>
                                </div>
                            </div>

                            {/* Photos — max 2, layout adapts */}
                            {hasPhotos && (
                                <div className={`grid gap-3 ${photos.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                                    {photos.map((photo, i) => (
                                        <div
                                            key={i}
                                            className="relative bg-neutral-100 overflow-hidden rounded-[4px] border border-black/[0.07]"
                                            style={{ aspectRatio: photos.length === 1 ? '16/9' : '4/3' }}
                                        >
                                            <img
                                                src={photo.src}
                                                alt={photo.alt || `${achievement.title} — dokumentasi ${i + 1}`}
                                                loading="lazy"
                                                decoding="async"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Description */}
                            <div>
                                <h2 className="text-xs font-mono font-bold uppercase tracking-[0.14em] text-black/38 mb-4 flex items-center gap-3">
                                    <span className="w-5 h-[1px] bg-black/18" /> Deskripsi
                                </h2>
                                <p className="text-[14.5px] leading-[1.85] text-black/68 font-light max-w-[600px]">
                                    {achievement.longDescription || achievement.description}
                                </p>
                            </div>

                            {/* Year tag */}
                            <div className="border-t border-black/[0.07] pt-6 flex items-center gap-3">
                                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-black/30">Tahun</span>
                                <span className="font-mono text-[11px] font-bold text-black/60 tabular-nums">{achievement.year}</span>
                            </div>

                        </div>
                    </Gsap.div>
                </div>
            )}
        </GsapPresence>,
        document.body
    );
}
