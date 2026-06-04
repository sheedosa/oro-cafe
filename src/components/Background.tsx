/**
 * Static decorative background: a subtle gold diamond pattern plus two soft
 * gold glows on the burgundy. Intentionally NOT animated — continuous
 * full-screen animation (panning + pulsing blurs + a mix-blend grain) caused
 * repaint jank/flicker, so it's been removed in favour of a calm, static layer.
 */
export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gold diamond pattern */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='none' stroke='%23c6a85b' stroke-width='1.5' stroke-opacity='0.18'%3E%3Cpath d='M40 0L80 40L40 80L0 40Z' /%3E%3Cpath d='M40 10L70 40L40 70L10 40Z' /%3E%3C/g%3E%3Ccircle cx='40' cy='40' r='2' fill='%23c6a85b' fill-opacity='0.25'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Soft static glows for depth (no animation) */}
      <div className="absolute -top-[15%] -left-[15%] w-[70vw] h-[70vw] min-w-[400px] min-h-[400px] rounded-full bg-gradient-to-tr from-gold/10 to-transparent blur-[100px]" />
      <div className="absolute -bottom-[10%] -right-[15%] w-[60vw] h-[60vw] min-w-[350px] min-h-[350px] rounded-full bg-gradient-to-bl from-gold/[0.07] to-transparent blur-[100px]" />
    </div>
  );
}
