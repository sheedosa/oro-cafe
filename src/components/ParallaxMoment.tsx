import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import SmartImage from './SmartImage';
import { assetUrl } from '../config/site';

interface ParallaxMomentProps {
  word: string;
  caption: string;
  image?: string;
  /** Optional video shown instead of the image. */
  video?: string;
  /** Render the media frameless and feather its edges into the background. */
  blend?: boolean;
  /** Place the image on the left instead of the right. */
  reverse?: boolean;
  /** 1-based index, shown as a faint marker. */
  index?: number;
}

/**
 * A contained "signature moment": a framed image (or video) panel beside a
 * large serif word + caption. The media drifts gently on scroll (parallax).
 * With `blend`, the media is frameless and its edges are feathered with a
 * radial mask so it melts seamlessly into the page background.
 */
export default function ParallaxMoment({ word, caption, image, video, blend = false, reverse = false, index }: ParallaxMomentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-6%', '6%']);

  // Feather a blended *video's* edges into the background. Transparent cutout
  // images blend on their own, so they don't need (and shouldn't get) a mask.
  const blendMask = blend && video
    ? {
        WebkitMaskImage: 'radial-gradient(ellipse at center, #000 50%, transparent 85%)',
        maskImage: 'radial-gradient(ellipse at center, #000 50%, transparent 85%)',
      }
    : undefined;

  return (
    <section className="py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Text — comes first (title before the image) */}
        <motion.div
          initial={{ y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={reverse ? 'md:order-2' : ''}
        >
          {index != null && (
            <span className="block font-sans text-[11px] uppercase tracking-[0.4em] text-gold-deep mb-4">0{index}</span>
          )}
          <h2 className="font-serif italic text-5xl md:text-7xl lg:text-8xl text-gold leading-none">{word}</h2>
          <p className="mt-5 font-sans text-sm md:text-base text-ink/90 max-w-sm leading-relaxed">{caption}</p>
        </motion.div>

        {/* Media panel (drifts within its own bounds) */}
        <motion.div
          ref={ref}
          initial={{ x: reverse ? -24 : 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={`relative w-full ${blend ? 'aspect-square' : 'aspect-[4/5] overflow-hidden'} ${reverse ? 'md:order-1' : ''}`}
        >
          <motion.div style={{ y, ...blendMask }} className="absolute inset-0 scale-110 will-change-transform">
            {video ? (
              <video
                className="w-full h-full object-cover pointer-events-none"
                src={assetUrl(video)}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                controls={false}
                disablePictureInPicture
                tabIndex={-1}
                aria-hidden="true"
              />
            ) : (
              <SmartImage
                src={image}
                alt={word}
                text={word}
                className="w-full h-full"
                imgClassName={blend ? 'object-contain' : ''}
              />
            )}
          </motion.div>

          {/* Decorative offset frame — only when not blending */}
          {!blend && (
            <div className="absolute inset-0 border border-gold/30 translate-x-4 translate-y-4 -z-10"></div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
