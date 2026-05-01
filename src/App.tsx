/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Facebook } from 'lucide-react';
import logo from './assets/logo-oro-v3.png';

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col relative font-serif text-[#c6a85b] overflow-hidden selection:bg-[#c6a85b] selection:text-white">
      {/* Vertical Rail Text */}
      <div className="hidden lg:flex absolute left-10 top-1/2 -translate-y-1/2 flex-col items-center gap-12 z-10">
        <p className="uppercase tracking-[0.5em] text-[11px] rotate-180 font-sans" style={{ writingMode: 'vertical-rl' }}>Est. 2026</p>
        <div className="w-px h-24 bg-[#c6a85b] opacity-40"></div>
        <p className="uppercase tracking-[0.5em] text-[11px] rotate-180 font-sans" style={{ writingMode: 'vertical-rl' }}>Brew District</p>
      </div>

      {/* Main Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-20 relative z-10 py-12 md:py-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.05
              }
            }
          }}
          className="flex flex-col items-center w-full"
        >
          {/* Logo */}
          <motion.img
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
            }}
            src={logo}
            alt="Oro - Sweets & Pastries Logo"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            className="w-64 sm:w-52 md:w-56 lg:w-64 mb-8 sm:mb-10 -mt-24 sm:mt-0 object-contain mx-auto"
            referrerPolicy="no-referrer"
          />
          
          {/* Heavy Coming Soon */}
          <h1 className="flex flex-col items-center justify-center text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[140px] leading-[0.8] font-sans font-bold tracking-tighter mb-8 text-center uppercase relative">
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="block"
            >
              Coming
            </motion.span>
            <motion.span 
              variants={{
                hidden: { opacity: 0, scale: 0.95, filter: "blur(2px)" },
                visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="block font-arabic text-[50px] sm:text-[70px] md:text-[90px] lg:text-[110px] xl:text-[130px] tracking-normal leading-[0.9] mt-2 md:mt-4 mb-4 md:mb-8 lowercase"
            >
              قريباً
            </motion.span>
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="block"
            >
              Soon
            </motion.span>
          </h1>

          <motion.div 
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              visible: { opacity: 0.6, scaleX: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="w-24 h-px bg-[#c6a85b] mb-8 origin-center"
          ></motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="lg:fixed lg:bottom-12 lg:left-1/2 lg:-translate-x-1/2"
          >
            <a href="https://www.facebook.com/p/Oro-sweets-pastries-61557170640518/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity inline-block">
              <Facebook size={24} />
            </a>
          </motion.div>
        </motion.div>
      </main>

      {/* Visual Accents */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-24 xl:w-48 h-px bg-[#c6a85b] opacity-20 pointer-events-none z-10"></div>
      <div className="hidden lg:flex absolute right-10 xl:right-20 top-1/2 -translate-y-1/2 flex-col gap-4 items-end pointer-events-none z-10">
         <p className="text-[10px] uppercase tracking-[0.4em] mb-4 font-sans">01 &mdash; 04</p>
         <div className="w-2 h-2 rounded-full border border-[#c6a85b]"></div>
         <div className="w-2 h-2 rounded-full bg-[#c6a85b]"></div>
         <div className="w-2 h-2 rounded-full border border-[#c6a85b]"></div>
         <div className="w-2 h-2 rounded-full border border-[#c6a85b]"></div>
      </div>

      {/* Bottom Decorative Bar */}
      <div className="absolute bottom-0 w-full h-2 bg-[#c6a85b] z-20"></div>
      
      {/* Background decoration elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 40, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-[#c6a85b]/[0.02] blur-3xl mix-blend-multiply" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            x: [0, -30, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-[#c6a85b]/[0.03] blur-3xl mix-blend-multiply" 
        />
      </div>

      {/* Subtle Grain Overlay for Editorial Texture */}
      <div 
        className="fixed inset-0 pointer-events-none z-[100] opacity-[0.25] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
