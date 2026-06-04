import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import SmartImage from './SmartImage';

interface ParallaxMomentProps {
  word: string;
  caption: string;
  image?: string;
  /** Place the image on the left instead of the right. */
  reverse?: boolean;
  /** 1-based index, shown as a faint marker. */
  index?: number;
}

/**
 * A contained "signature moment": a framed image panel beside a large serif
 * word + caption. The image drifts gently inside its frame on scroll (parallax)
 * — it never fills the screen or becomes a page background. Parallax is
 * disabled under prefers-reduced-motion.
 */
export default function ParallaxMoment({ word, caption, image, reverse = false, index }: ParallaxMomentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-6%', '6%']);

  return (
    <section className="py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Framed image panel (drifts within its own bounds) */}
        <motion.div
          ref={ref}
          initial={{ x: reverse ? 24 : -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`relative w-full aspect-[4/5] overflow-hidden ${reverse ? 'md:order-2' : ''}`}
        >
          <motion.div style={{ y }} className="absolute inset-0 scale-110 will-change-transform">
            <SmartImage src={image} alt={word} text={word} className="w-full h-full" />
          </motion.div>
          {/* Decorative offset frame, matching the rest of the site */}
          <div className="absolute inset-0 border border-gold/30 translate-x-4 translate-y-4 -z-10"></div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className={reverse ? 'md:order-1' : ''}
        >
          {index != null && (
            <span className="block font-sans text-[11px] uppercase tracking-[0.4em] text-gold-deep mb-4">0{index}</span>
          )}
          <h2 className="font-serif italic text-5xl md:text-7xl lg:text-8xl text-gold leading-none">{word}</h2>
          <p className="mt-5 font-sans text-sm md:text-base text-ink/90 max-w-sm leading-relaxed">{caption}</p>
        </motion.div>
      </div>
    </section>
  );
}
