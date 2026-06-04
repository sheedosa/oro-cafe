import { motion } from 'motion/react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo-oro-v3.png';
import { site, menuUrl } from '../config/site';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // `Menu` is a standalone self-hosted page, so it's a plain link (external: true)
  // rather than an in-app route.
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: menuUrl, external: true },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 py-4 px-6 md:px-12 flex justify-between items-center bg-white/95 backdrop-blur-md border-b border-burgundy/10 shadow-sm">
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
                className="text-xs uppercase tracking-[0.2em] font-sans transition-colors border-b border-transparent pb-1 text-burgundy/70 hover:text-burgundy"
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
                    isActive ? 'text-burgundy border-gold' : 'text-burgundy/70 border-transparent hover:text-burgundy'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ),
          )}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden z-50 p-2 text-burgundy"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>

      {/* Mobile Nav Overlay */}
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, pointerEvents: 'auto', backdropFilter: 'blur(10px)' },
          closed: { opacity: 0, pointerEvents: 'none', backdropFilter: 'blur(0px)' },
        }}
        className="fixed inset-0 z-40 bg-white/97 flex flex-col items-center justify-center"
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
                  className="text-2xl uppercase tracking-[0.2em] font-serif text-burgundy"
                >
                  {link.name}
                </a>
              ) : (
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-2xl uppercase tracking-[0.2em] font-serif ${isActive ? 'text-gold-deep' : 'text-burgundy'}`
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
