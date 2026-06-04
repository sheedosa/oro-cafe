import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import logo from '../assets/logo-oro-v3.png';
import { site } from '../config/site';
import { useLang } from '../i18n/useLang';

export default function Footer() {
  const { t } = useLang();
  const contactItems = [
    { icon: MapPin, label: t.visit.locationLabel, value: t.visit.addressLines.join('، '), href: site.contact.mapsUrl, external: true, dir: undefined as string | undefined },
    { icon: Phone, label: t.visit.phoneLabel, value: site.contact.phone, href: site.contact.phoneHref, external: false, dir: 'ltr' },
    { icon: Mail, label: t.visit.emailLabel, value: site.contact.email, href: `mailto:${site.contact.email}`, external: false, dir: 'ltr' },
  ];

  return (
    <footer className="w-full relative z-20 bg-burgundy border-t border-gold/20 py-16 px-4 flex flex-col items-center text-gold-deep">
      <motion.div
        initial={{ y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6 w-full max-w-4xl"
      >
        <img src={logo} alt={`${site.name} logo`} className="w-24 object-contain" />

        <p className="font-sans text-xs uppercase tracking-[0.2em] font-medium text-center text-ink/80">
          {t.footer.tagline}
        </p>

        {/* Contact info with icons (same style as the Contact page) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-7 w-full mt-4 text-start">
          {contactItems.map(({ icon: Icon, label, value, href, external, dir }) => (
            <div key={label} className="flex items-start gap-3">
              <div className="mt-0.5 text-gold-deep shrink-0"><Icon size={16} /></div>
              <div className="min-w-0">
                <h3 className="font-sans uppercase text-[10px] tracking-[0.2em] font-bold mb-1 text-gold-deep">{label}</h3>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  {...(dir ? { dir } : {})}
                  className="font-sans text-xs text-ink/90 hover:text-gold-deep transition-colors break-words inline-block"
                >
                  {value}
                </a>
              </div>
            </div>
          ))}

          {/* Opening hours */}
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-gold-deep shrink-0"><Clock size={16} /></div>
            <div className="min-w-0">
              <h3 className="font-sans uppercase text-[10px] tracking-[0.2em] font-bold mb-1 text-gold-deep">{t.visit.hoursLabel}</h3>
              <ul className="font-sans text-xs text-ink/90 space-y-1">
                {t.visit.hoursList.map((h) => (
                  <li key={h.days}>
                    {h.days}
                    <br />
                    <span dir="ltr" className="text-ink/70 inline-block">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Socials */}
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

        <p className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-70 mt-4 text-ink">
          &copy; {new Date().getFullYear()} {t.footer.cafe}. {t.footer.rights}
        </p>
      </motion.div>
    </footer>
  );
}
