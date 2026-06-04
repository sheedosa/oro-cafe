import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SmartImage from './SmartImage';

interface GalleryItem {
  image: string;
  label?: string;
}

interface AutoCarouselProps {
  items: readonly GalleryItem[];
}

/**
 * Horizontal image gallery that auto-advances but stays fully browsable: it's a
 * native scroll-snap container (swipe/drag/scroll any time) with optional
 * desktop arrows. Auto-advance pauses while the user interacts or hovers, and
 * is disabled entirely for prefers-reduced-motion.
 */
export default function AutoCarousel({ items }: AutoCarouselProps) {
  const ref = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const idleRef = useRef<number | undefined>(undefined);
  const reduce = useReducedMotion();

  const stepPx = () => {
    const el = ref.current;
    if (!el) return 0;
    const first = el.firstElementChild as HTMLElement | null;
    return first ? first.offsetWidth + 24 : el.clientWidth * 0.8;
  };

  const pauseAwhile = (ms = 4500) => {
    pausedRef.current = true;
    window.clearTimeout(idleRef.current);
    idleRef.current = window.setTimeout(() => {
      pausedRef.current = false;
    }, ms);
  };

  const go = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    pauseAwhile();
    const max = el.scrollWidth - el.clientWidth;
    let target = el.scrollLeft + dir * stepPx();
    if (target > max - 4) target = dir > 0 ? 0 : max;
    if (target < 0) target = max;
    el.scrollTo({ left: target, behavior: 'smooth' });
  };

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    const onInteract = () => pauseAwhile();
    el.addEventListener('pointerdown', onInteract);
    el.addEventListener('wheel', onInteract, { passive: true });
    el.addEventListener('touchstart', onInteract, { passive: true });

    const id = window.setInterval(() => {
      if (pausedRef.current) return;
      const max = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= max - 4) el.scrollTo({ left: 0, behavior: 'smooth' });
      else el.scrollBy({ left: stepPx(), behavior: 'smooth' });
    }, 3500);

    return () => {
      window.clearInterval(id);
      window.clearTimeout(idleRef.current);
      el.removeEventListener('pointerdown', onInteract);
      el.removeEventListener('wheel', onInteract);
      el.removeEventListener('touchstart', onInteract);
    };
  }, [reduce]);

  return (
    <div
      className="relative group/carousel"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div
        ref={ref}
        className="flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory px-4 md:px-10 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((it, i) => (
          <div key={i} className="snap-center shrink-0 w-[72%] sm:w-[46%] md:w-[31%] lg:w-[23.5%]">
            <div className="relative aspect-square rounded-2xl bg-burgundy-soft border border-gold/20 shadow-lg shadow-espresso/20 overflow-hidden flex items-center justify-center p-5">
              <SmartImage
                src={it.image}
                alt={it.label || ''}
                text={it.label || 'Image'}
                className="w-full h-full"
                imgClassName="object-contain drop-shadow-xl"
              />
            </div>
            {it.label && (
              <p className="mt-3 text-center font-serif italic text-lg text-gold">{it.label}</p>
            )}
          </div>
        ))}
      </div>

      {/* Desktop arrows (appear on hover) */}
      <button
        type="button"
        aria-label="Previous"
        onClick={() => go(-1)}
        className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-burgundy/85 border border-gold/30 text-gold hover:bg-gold hover:text-burgundy transition-all opacity-0 group-hover/carousel:opacity-100"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => go(1)}
        className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-burgundy/85 border border-gold/30 text-gold hover:bg-gold hover:text-burgundy transition-all opacity-0 group-hover/carousel:opacity-100"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
