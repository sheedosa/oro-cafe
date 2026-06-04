import { motion } from 'motion/react';

interface SectionHeadingProps {
  /** Small uppercase label above the title. */
  eyebrow?: string;
  /** Italic serif heading. */
  title: string;
  /** Light variant for use on the dark espresso band. */
  light?: boolean;
  className?: string;
}

/** The repeated "eyebrow + hairline + italic serif heading" block used across sections. */
export default function SectionHeading({ eyebrow, title, light = false, className = '' }: SectionHeadingProps) {
  const accent = light ? 'text-gold' : 'text-gold-deep';
  const line = light ? 'bg-gold/40' : 'bg-gold/40';
  const heading = light ? 'text-gold' : 'text-gold';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`text-center ${className}`}
    >
      {eyebrow && (
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className={`w-12 h-px ${line}`}></div>
          <span className={`font-sans text-[10px] uppercase tracking-[0.3em] font-semibold ${accent}`}>{eyebrow}</span>
          <div className={`w-12 h-px ${line}`}></div>
        </div>
      )}
      <h2 className={`font-serif italic text-4xl md:text-5xl ${heading}`}>{title}</h2>
    </motion.div>
  );
}
