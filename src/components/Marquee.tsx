import type { ReactNode } from 'react';
import { useReducedMotion } from 'motion/react';

interface MarqueeProps<T> {
  items: readonly T[];
  renderItem: (item: T, index: number) => ReactNode;
  /** Seconds for one full loop. Lower = faster. */
  speed?: number;
  /** Scroll right-to-left (default) or left-to-right. */
  reverse?: boolean;
  /** Gap between items (CSS length). */
  gap?: string;
  className?: string;
}

/**
 * Seamless infinite marquee. Renders two identical sequences inside a track
 * animated x: 0% → -50% (or reverse). Each sequence carries its own trailing
 * gap so the two halves are exactly equal width — making -50% land seamlessly.
 * Respects prefers-reduced-motion (single static, horizontally-scrollable row).
 */
export default function Marquee<T>({
  items,
  renderItem,
  speed = 30,
  reverse = false,
  gap = '3rem',
  className = '',
}: MarqueeProps<T>) {
  const reduce = useReducedMotion();

  const Sequence = ({ tag }: { tag: string }) => (
    <div
      className="flex shrink-0 items-center"
      style={{ gap, paddingRight: gap }}
      aria-hidden={tag === 'b' ? true : undefined}
    >
      {items.map((item, i) => (
        <div key={`${tag}-${i}`} className="shrink-0">
          {renderItem(item, i)}
        </div>
      ))}
    </div>
  );

  if (reduce) {
    return (
      <div dir="ltr" className={`overflow-x-auto ${className}`}>
        <div className="flex w-max">
          <Sequence tag="a" />
        </div>
      </div>
    );
  }

  return (
    <div dir="ltr" className={`overflow-hidden flex [contain:layout_paint] ${className}`}>
      <div
        className="flex shrink-0 oro-marquee-track"
        style={{ animationDuration: `${speed}s`, animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        <Sequence tag="a" />
        <Sequence tag="b" />
      </div>
    </div>
  );
}
