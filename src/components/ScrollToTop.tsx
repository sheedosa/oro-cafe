import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Scrolls to the top of the page whenever the route changes. */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant jump on navigation (no smooth scroll between pages).
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
