import { useState } from 'react';
import ImagePlaceholder from './ImagePlaceholder';
import { assetUrl } from '../config/site';

interface SmartImageProps {
  /** Path to the image, e.g. "/images/hero.jpg". Falls back to a placeholder if missing or it fails to load. */
  src?: string;
  alt?: string;
  /** Text shown on the placeholder while no image is present. */
  text?: string;
  /** Classes for the wrapper (sizing) — applied to both the image and the placeholder. */
  className?: string;
  /** Extra classes for the <img> itself (e.g. object-position, opacity). */
  imgClassName?: string;
}

/**
 * Renders a real image when one is available, otherwise an elegant placeholder.
 * Lets the client simply drop files into `public/images/` to populate the site.
 */
export default function SmartImage({
  src,
  alt = '',
  text = 'Image coming soon',
  className = '',
  imgClassName = '',
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <ImagePlaceholder className={className} text={text} />;
  }

  // Default to object-cover unless the caller specifies an object-fit.
  const fit = imgClassName.includes('object-') ? '' : 'object-cover';

  return (
    <img
      src={assetUrl(src)}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`${fit} ${className} ${imgClassName}`.trim()}
    />
  );
}
