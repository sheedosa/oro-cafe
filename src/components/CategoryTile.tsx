import { motion } from 'motion/react';
import SmartImage from './SmartImage';

interface CategoryTileProps {
  /** Display name (already translated for the active language). */
  label: string;
  /** Image path served from /public (menu category photo). */
  image: string;
  /** Hash on the menu page (e.g. "#hot-drinks"). */
  href: string;
  /** Position in the grid — only used to stagger the entry animation. */
  index?: number;
}

/**
 * Clickable menu-category tile shown in the homepage "Discover what we serve"
 * section. Photo on a soft linen plate + name underneath; clicking jumps
 * straight to the matching section of the self-hosted menu.
 */
export default function CategoryTile({ label, image, href, index = 0 }: CategoryTileProps) {
  return (
    <motion.a
      href={href}
      initial={{ y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.04 * index }}
      className="group flex flex-col bg-cream border border-sand/50 rounded-2xl shadow-md shadow-sand/30 overflow-hidden hover:shadow-lg hover:shadow-sand/40 hover:border-burgundy/40 transition-all duration-300"
    >
      <div className="relative aspect-square w-full bg-linen overflow-hidden flex items-center justify-center p-4 md:p-5">
        <SmartImage
          src={image}
          alt={label}
          text={label}
          className="w-full h-full"
          imgClassName="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />
      </div>
      <div className="px-3 py-3 md:px-4 md:py-4 text-center">
        <p className="font-serif italic text-base md:text-lg leading-tight text-burgundy">
          {label}
        </p>
      </div>
    </motion.a>
  );
}
