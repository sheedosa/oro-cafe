import { motion } from 'motion/react';
import SmartImage from './SmartImage';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageText?: string;
}

/** Banner used at the top of the About / Menu / Contact pages. */
export default function PageHero({ eyebrow, title, subtitle, image, imageText = 'Image coming soon' }: PageHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SmartImage src={image} alt={title} text={imageText} className="w-full h-full" />
        {/* Soft cream wash so the heading stays readable over any photo. */}
        <div className="absolute inset-0 bg-burgundy/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy via-burgundy/70 to-burgundy/30"></div>
      </div>

      <motion.div
        initial={{ y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="w-10 h-px bg-gold/50"></div>
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-semibold text-gold-deep">{eyebrow}</span>
          <div className="w-10 h-px bg-gold/50"></div>
        </div>
        <h1 className="font-serif italic text-5xl md:text-7xl text-gold mb-4">{title}</h1>
        {subtitle && (
          <p className="font-sans text-sm md:text-base text-ink/90 max-w-xl mx-auto tracking-wide">{subtitle}</p>
        )}
      </motion.div>
    </section>
  );
}
