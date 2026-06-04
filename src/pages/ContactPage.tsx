import { motion } from 'motion/react';
import { Facebook, Instagram, MapPin, Phone, Mail, Globe } from 'lucide-react';
import PageHero from '../components/PageHero';
import { site } from '../config/site';

export default function ContactPage() {
  const mapEmbed = `https://www.google.com/maps?q=${site.contact.coords}&z=17&output=embed`;

  const details = [
    { icon: MapPin, label: 'Location', value: site.contact.addressLines.join(', '), href: site.contact.mapsUrl, external: true },
    { icon: Phone, label: 'Phone', value: site.contact.phone, href: site.contact.phoneHref },
    { icon: Mail, label: 'Email', value: site.contact.email, href: `mailto:${site.contact.email}` },
    { icon: Globe, label: 'Online', value: site.contact.website, href: site.contact.websiteHref, external: true },
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHero
        eyebrow="Get in Touch"
        title="Contact"
        subtitle={`We'd love to welcome you to Oro in ${site.location}.`}
        image={site.images.contactHero}
        imageText="Contact Banner Image"
      />

      <section className="py-20 md:py-28 px-4 md:px-8 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Details + hours */}
          <motion.div
            initial={{ x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="space-y-7">
              {details.map(({ icon: Icon, label, value, href, external }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="mt-0.5 text-gold-deep shrink-0"><Icon size={18} /></div>
                  <div>
                    <h3 className="font-sans uppercase text-[10px] tracking-[0.2em] font-bold mb-1 text-gold-deep">{label}</h3>
                    <a
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                      className="font-sans text-sm text-ink/90 hover:text-gold-deep transition-colors break-words"
                    >
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div className="mt-10 border border-gold/25 bg-burgundy-soft shadow-sm px-7 py-6 max-w-sm">
              <h3 className="font-sans uppercase text-[10px] tracking-[0.3em] font-bold mb-5 text-gold-deep">Opening Hours</h3>
              <ul className="space-y-2">
                {site.hours.map((h) => (
                  <li key={h.days} className="flex items-center justify-between gap-6 font-sans text-sm text-ink/90">
                    <span className="tracking-wide">{h.days}</span>
                    <span className="font-medium whitespace-nowrap">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-5 mt-8 text-gold-deep">
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
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full md:w-1/2"
          >
            <div className="relative w-full h-full min-h-[340px] border border-gold/25 shadow-sm overflow-hidden">
              <iframe
                title="Oro location map"
                src={mapEmbed}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href={site.contact.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-5 border border-gold bg-gold text-cream px-8 py-3.5 font-sans uppercase text-[11px] tracking-[0.2em] font-bold hover:bg-gold-deep hover:border-gold-deep transition-colors"
            >
              Get Directions
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
