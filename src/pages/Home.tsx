import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronDown, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import SmartImage from '../components/SmartImage';
import BgVideo from '../components/BgVideo';
import SectionHeading from '../components/SectionHeading';
import Marquee from '../components/Marquee';
import CategoryTile from '../components/CategoryTile';
import AutoCarousel from '../components/AutoCarousel';
import { site, menuUrl } from '../config/site';
import { useLang } from '../i18n/useLang';
import logo from '../assets/logo-oro-v3.png';

export default function Home() {
  const { t, lang } = useLang();
  const mapEmbed = `https://www.google.com/maps?q=${site.contact.coords}&z=17&output=embed`;
  const menuLink = `${menuUrl}?lang=${lang}`;
  const galleryItems = site.gallery.map((g, i) => ({ image: g.image, label: t.gallery.labels[i] }));

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero — full-bleed background video */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 md:pt-32 md:pb-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {site.video.hero ? (
            <BgVideo src={site.video.hero} className="w-full h-full object-cover pointer-events-none" />
          ) : (
            <SmartImage src={site.images.hero} alt="Oro" text="Hero Video / Image" className="w-full h-full" />
          )}
        </div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl [text-shadow:0_2px_18px_rgba(28,26,23,0.65)]">
          <h1 className="contents">
            <motion.img
              src={logo}
              alt={site.fullName}
              initial={{ scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15 }}
              className="w-64 md:w-80 lg:w-[26rem] mb-2 drop-shadow-[0_6px_30px_rgba(28,26,23,0.8)]"
            />
          </h1>

          <motion.p
            initial={{ y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-sans text-[11px] md:text-xs uppercase tracking-[0.3em] font-semibold text-cream mb-9"
          >
            {t.hero.tagline} &nbsp;&middot;&nbsp; {t.hero.location}
          </motion.p>

          <motion.div
            initial={false}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 font-sans text-xs uppercase tracking-[0.2em] [text-shadow:none]"
          >
            <a href={menuLink} className="border border-gold bg-gold text-cream px-8 py-4 shadow-lg hover:bg-gold-deep hover:border-gold-deep transition-colors">
              {t.hero.viewMenu}
            </a>
            <Link to="/contact" className="border border-cream text-cream px-8 py-4 hover:bg-cream hover:text-burgundy transition-colors">
              {t.hero.findUs}
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 text-cream/70 animate-bounce">
          <ChevronDown size={22} />
        </div>
      </section>

      {/* 2. Follow our journey — auto-scrolling post carousel */}
      <section id="social" className="py-24 md:py-32 bg-burgundy overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8 w-full">
          <SectionHeading eyebrow={t.social.eyebrow} title={t.social.title} className="mb-3" />
          <motion.p
            initial={{ y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center font-sans text-sm tracking-[0.2em] text-gold-deep mb-12"
          >
            {site.social.handle}
          </motion.p>
        </div>

        <Marquee
          items={site.social.posts}
          speed={45}
          gap="1rem"
          renderItem={(post, i) => {
            const href = post.url || site.socials.facebook || site.socials.instagram || '#';
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Oro post ${i + 1}`}
                className="group relative block w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-2xl border border-gold/15 shadow-lg shadow-espresso/20 bg-burgundy-soft"
              >
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
                  <SmartImage src={post.image} alt="" text="Post" className="w-full h-full" />
                </div>
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/45 transition-colors duration-300 flex items-center justify-center">
                  <Facebook size={22} className="text-cream opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300" />
                </div>
              </a>
            );
          }}
        />

        <div className="max-w-6xl mx-auto px-4 md:px-8 w-full">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            {site.socials.instagram && (
              <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-gold bg-gold text-cream px-8 py-3.5 font-sans uppercase text-[11px] tracking-[0.2em] font-bold hover:bg-gold-deep hover:border-gold-deep transition-colors">
                <Instagram size={16} /> {t.social.followInstagram} <ArrowUpRight size={14} />
              </a>
            )}
            {site.socials.facebook && (
              <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-gold bg-gold text-cream px-8 py-3.5 font-sans uppercase text-[11px] tracking-[0.2em] font-bold hover:bg-gold-deep hover:border-gold-deep transition-colors">
                <Facebook size={16} /> {t.social.followFacebook} <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* 3. Discover what we serve — menu category tiles + product carousel + CTA, one linen band */}
      <section id="menu" className="py-20 md:py-28 bg-linen overflow-hidden rounded-t-[2.5rem] md:rounded-t-[4rem] rounded-b-[2.5rem] md:rounded-b-[4rem]">
        <div className="max-w-6xl mx-auto px-4 md:px-8 w-full">
          <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} onLight className="mb-12 md:mb-14" />

          {/* Menu category tiles — 9 actual categories from the menu, each clicks into the matching section */}
          <p className="text-center font-sans text-[11px] uppercase tracking-[0.3em] font-semibold text-gold-dark mb-6 md:mb-8">
            {t.gallery.categoriesEyebrow}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 mb-14 md:mb-20">
            {site.categories.map((c, i) => (
              <div key={c.id}>
                <CategoryTile
                  label={t.gallery.categories[i]}
                  image={c.image}
                  href={`${menuLink}#${c.id}`}
                  index={i}
                />
              </div>
            ))}
          </div>

          {/* Product variety — a small eyebrow announces the carousel that follows */}
          <p className="text-center font-sans text-[11px] uppercase tracking-[0.3em] font-semibold text-gold-dark mb-6 md:mb-8">
            {t.gallery.galleryEyebrow}
          </p>
        </div>

        {/* Product carousel (full-bleed within the linen band) — now 14 items */}
        <AutoCarousel items={galleryItems} onLight />

        {/* Single CTA closes the discovery story */}
        <div className="text-center mt-12 px-4">
          <a href={menuLink} className="inline-block border border-burgundy bg-burgundy text-cream px-10 py-4 font-sans uppercase text-[11px] tracking-[0.2em] font-bold hover:bg-burgundy-soft hover:border-burgundy-soft transition-colors">
            {t.gallery.button}
          </a>
        </div>
      </section>

      {/* 4. Visit / Contact preview — storefront image + map, then details */}
      <section id="visit" className="py-24 md:py-32 px-4 md:px-8 max-w-6xl mx-auto w-full">
        <SectionHeading eyebrow={t.visit.eyebrow} title={t.visit.title} className="mb-12 md:mb-16" />

        <div className="grid md:grid-cols-2 gap-5 md:gap-8 mb-12 md:mb-16">
          <motion.div
            initial={{ y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gold/25 shadow-lg shadow-espresso/20"
          >
            <SmartImage src={site.images.storefront} alt="Oro storefront in Benghazi" text="Storefront Photo" className="w-full h-full" imgClassName="object-top" />
          </motion.div>

          <motion.div
            initial={{ y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gold/25 shadow-lg shadow-espresso/20"
          >
            <iframe
              title="Oro — Benghazi location map"
              src={mapEmbed}
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>

        <motion.div initial={{ y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={site.contact.mapsUrl} target="_blank" rel="noreferrer" className="inline-block text-center border border-gold bg-gold text-cream px-8 py-3.5 font-sans uppercase text-[11px] tracking-[0.2em] font-bold hover:bg-gold-deep hover:border-gold-deep transition-colors">
              {t.visit.getDirections}
            </a>
            <Link to="/contact" className="inline-block text-center border border-gold/60 bg-transparent text-gold-deep px-8 py-3.5 font-sans uppercase text-[11px] tracking-[0.2em] font-bold hover:bg-gold hover:text-cream transition-colors">
              {t.visit.contactUs}
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
