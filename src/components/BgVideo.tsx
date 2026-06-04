import { useEffect, useRef } from 'react';
import { assetUrl } from '../config/site';

interface BgVideoProps {
  src: string;
  className?: string;
}

/**
 * Autoplaying, muted, looping background video that ACTUALLY autoplays on
 * desktop. React doesn't reliably set the `muted` *property* on a <video>
 * (only the attribute), so desktop Chrome treats it as un-muted, blocks
 * autoplay, and shows the paused frame / a play control. We force `muted`
 * via the ref and call play() ourselves (retrying on canplay / when the tab
 * becomes visible again) so it behaves identically to mobile.
 */
export default function BgVideo({ src, className = '' }: BgVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    // Set muted as a real property (the attribute alone isn't enough for autoplay).
    v.muted = true;
    v.defaultMuted = true;

    const play = () => {
      const p = v.play();
      if (p && typeof p.catch === 'function') p.catch(() => { /* will retry */ });
    };

    play();
    v.addEventListener('loadeddata', play);
    v.addEventListener('canplay', play);
    const onVisible = () => { if (!document.hidden) play(); };
    document.addEventListener('visibilitychange', onVisible);

    return () => {
      v.removeEventListener('loadeddata', play);
      v.removeEventListener('canplay', play);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, [src]);

  return (
    <video
      ref={ref}
      className={className}
      src={assetUrl(src)}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      controls={false}
      disablePictureInPicture
      controlsList="nodownload nofullscreen noremoteplayback"
      tabIndex={-1}
      aria-hidden="true"
    />
  );
}
