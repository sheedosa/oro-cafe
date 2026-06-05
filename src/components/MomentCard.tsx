import { motion } from 'motion/react';
import SmartImage from './SmartImage';

interface MomentCardProps {
  /** Section/category word — rendered as the card title (e.g. "Coffee"). */
  word: string;
  /** Short evocative caption underneath the title. */
  caption: string;
  /** Optional photo path, e.g. "/images/moment-coffee.webp". */
  image?: string;
  /** 1-based index, shown as a faint marker beside the eyebrow rule. */
  index: number;
}

/**
 * Editorial card used inside the "Discover what we serve" section, above the
 * product carousel. Three of these form a 3-up grid that prefaces the gallery
 * with the brand's craft pillars (Coffee · Pastries · Desserts).
 *
 * Refined typography: the heading is no longer the giant `text-6xl` that
 * read as a "category" — it's a small serif title inside a cream card.
 */
export default function MomentCard({ word, caption, image, index }: MomentCardProps) {
  return (
    <motion.article
      initial={{ y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: 0.05 * index }}
      className="flex flex-col bg-cream border border-sand/50 rounded-2xl shadow-lg shadow-sand/30 overflow-hidden h-full"
    >
      {/* Photo block — clean object-contain, no parallax / no feather (those were
          designed for the dark burgundy bg and would muddy the cream card). */}
      <div className="relative aspect-[4/3] w-full bg-linen flex items-center justify-center p-6 overflow-hidden">
        <SmartImage
          src={image}
          alt={word}
          text={word}
          className="w-full h-full"
          imgClassName="object-contain drop-shadow-md"
        />
      </div>

      {/* Text block */}
      <div className="px-6 md:px-7 py-6 md:py-7 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-semibold text-gold-dark">
            0{index}
          </span>
          <span className="flex-1 h-px bg-sand/70"></span>
        </div>
        <h3 className="font-serif italic text-2xl md:text-3xl leading-tight text-burgundy">
          {word}
        </h3>
        <p className="font-sans text-sm text-cocoa/85 leading-relaxed">
          {caption}
        </p>
      </div>
    </motion.article>
  );
}
