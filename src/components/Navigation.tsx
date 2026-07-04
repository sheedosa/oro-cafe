import { motion } from 'motion/react';
import { Menu as MenuIcon, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo-oro-ar.png';
import { site, menuUrl } from '../config/site';
import { useLang } from '../i18n/useLang';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, lang, toggle } = useLang();

  // `Menu` is a standalone self-hosted page (passes the language as a query param),
  // so it's a plain link (external: true) rather than an in-app route.
  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.menu, path: `${menuUrl}?lang=${lang}`, external: true },
    { name: t.nav.contact, path: '/contact' },
  ];

  const toggleLabel = lang === 'ar' ? 'EN' : 'العربية';

  return (
    <>
      <nav className="fixed top-0 w-full z-50 py-4 px-6 md:px-12 flex justify-between items-center text-gold bg-burgundy/85 backdrop-blur-md border-b border-gold/15 rounded-b-3xl shadow-lg shadow-espresso/20">
        <Link to="/" className="z-50 shrink-0 inline-block focus:outline-none" aria-label={`${site.fullName} — home`}>
          <img
            src={logo}
            alt={`${site.name} logo`}
            className="w-16 md:w-20 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center mt-2">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.name}
                href={link.path}
                className="text-xs uppercase tracking-[0.2em] font-sans transition-colors border-b border-transparent pb-1 text-gold-deep hover:text-gold"
              >
                {link.name}
              </a>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.2em] font-sans transition-colors border-b pb-1 ${
                    isActive ? 'text-gold border-gold' : 'text-gold-deep border-transparent hover:text-gold'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ),
          )}
          <button
            onClick={toggle}
            aria-label="Switch language"
            className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 px-3 py-1.5 text-[11px] font-sans font-bold tracking-[0.1em] text-gold-deep hover:bg-gold hover:text-burgundy transition-colors"
          >
            <Globe size={13} /> {toggleLabel}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-1">
          <button
            onClick={toggle}
            aria-label="Switch language"
            className="z-50 inline-flex items-center gap-1 rounded-full border border-gold/40 px-3 py-1.5 text-[11px] font-sans font-bold tracking-[0.1em] text-gold-deep hover:bg-gold hover:text-burgundy transition-colors"
          >
            <Globe size={13} /> {toggleLabel}
          </button>
          <button
            className="z-50 p-2 text-gold-deep"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, pointerEvents: 'auto', backdropFilter: 'blur(10px)' },
          closed: { opacity: 0, pointerEvents: 'none', backdropFilter: 'blur(0px)' },
        }}
        className="fixed inset-0 z-40 bg-burgundy/95 flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              variants={{
                open: { opacity: 1, y: 0, transition: { delay: i * 0.1 } },
                closed: { opacity: 0, y: 20 },
              }}
            >
              {link.external ? (
                <a
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl uppercase tracking-[0.2em] font-serif text-gold"
                >
                  {link.name}
                </a>
              ) : (
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-2xl uppercase tracking-[0.2em] font-serif ${isActive ? 'text-gold-deep' : 'text-gold'}`
                  }
                >
                  {link.name}
                </NavLink>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
