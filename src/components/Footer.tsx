import { Facebook, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import logo from '../assets/logo-oro-v3.png';
import { site } from '../config/site';

export default function Footer() {
  return (
    <footer className="w-full relative z-20 bg-burgundy border-t border-gold/20 py-16 px-4 flex flex-col items-center justify-center text-gold-deep">
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6 }}
         className="flex flex-col items-center gap-6"
       >
         <img
           src={logo}
           alt={`${site.name} logo`}
           className="w-24 object-contain"
         />

         <p className="font-sans text-xs uppercase tracking-[0.2em] font-medium text-center text-ink/80">
            Making &amp; Selling Fine Sweets and Pastries
         </p>

         <div className="flex items-center gap-6 mt-4 text-gold-deep">
           {site.socials.facebook && (
             <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Oro on Facebook" className="hover:text-gold transition-colors">
                <Facebook size={20} />
             </a>
           )}
           {site.socials.instagram && (
             <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Oro on Instagram" className="hover:text-gold transition-colors">
                <Instagram size={20} />
             </a>
           )}
         </div>

         <p className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-70 mt-8 text-ink">
            &copy; {new Date().getFullYear()} {site.name} Cafe. All Rights Reserved.
         </p>
       </motion.div>
    </footer>
  );
}
