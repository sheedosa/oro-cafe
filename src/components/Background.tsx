import { motion, useReducedMotion } from 'motion/react';

export default function Background() {
  // Disable continuous, looping motion for users who prefer reduced motion.
  const reduce = useReducedMotion();

  return (
    <>
      {/* Visual Accents */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-24 xl:w-48 h-px bg-gold opacity-20 pointer-events-none z-10"></div>
      <div className="hidden lg:flex absolute right-10 xl:right-20 top-1/2 -translate-y-1/2 flex-col gap-4 items-end pointer-events-none z-10 text-gold">
         <p className="text-[10px] uppercase tracking-[0.4em] mb-4 font-sans">01 &mdash; 04</p>
         <div className="w-2 h-2 rounded-full border border-gold"></div>
         <div className="w-2 h-2 rounded-full bg-gold"></div>
         <div className="w-2 h-2 rounded-full border border-gold"></div>
         <div className="w-2 h-2 rounded-full border border-gold"></div>
      </div>

      {/* Background decoration elements - Slow-Panning Luxury Pattern */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={reduce ? undefined : { backgroundPosition: ["0px 0px", "100px 100px"] }}
          transition={reduce ? undefined : { duration: 25, ease: "linear", repeat: Infinity }}
          className="absolute inset-0 w-full h-full opacity-70"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='none' stroke='%23c6a85b' stroke-width='1.5' stroke-opacity='0.2'%3E%3Cpath d='M40 0L80 40L40 80L0 40Z' /%3E%3Cpath d='M40 10L70 40L40 70L10 40Z' /%3E%3C/g%3E%3Ccircle cx='40' cy='40' r='2' fill='%23c6a85b' fill-opacity='0.3'/%3E%3Ccircle cx='0' cy='0' r='2' fill='%23c6a85b' fill-opacity='0.3'/%3E%3Ccircle cx='80' cy='0' r='2' fill='%23c6a85b' fill-opacity='0.3'/%3E%3Ccircle cx='0' cy='80' r='2' fill='%23c6a85b' fill-opacity='0.3'/%3E%3Ccircle cx='80' cy='80' r='2' fill='%23c6a85b' fill-opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px"
          }}
        />

        {/* Soft, pulsating glows to give lighting to the pattern */}
        <motion.div
          animate={reduce ? undefined : { opacity: [0.3, 0.5, 0.3] }}
          transition={reduce ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-20%] w-[100vw] h-[100vw] min-w-[500px] min-h-[500px] rounded-full bg-gradient-to-tr from-gold/15 to-transparent blur-[80px]"
        />
        <motion.div
          animate={reduce ? undefined : { opacity: [0.2, 0.4, 0.2] }}
          transition={reduce ? undefined : { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-20%] w-[80vw] h-[80vw] min-w-[400px] min-h-[400px] rounded-full bg-gradient-to-bl from-gold/10 to-transparent blur-[80px]"
        />
      </div>

      {/* Subtle Grain Overlay for Editorial Texture */}
      <div
        className="fixed inset-0 pointer-events-none z-[100] opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </>
  );
}
