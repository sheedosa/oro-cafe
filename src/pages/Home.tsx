import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronDown, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import SmartImage from '../components/SmartImage';
import SectionHeading from '../components/SectionHeading';
import Marquee from '../components/Marquee';
import ParallaxMoment from '../components/ParallaxMoment';
import AutoCarousel from '../components/AutoCarousel';
import { site, menuUrl, assetUrl } from '../config/site';

export default function Home() {
  const mapEmbed = `https://www.google.com/maps?q=${site.contact.coords}&z=17&output=embed`;

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero — full-bleed background video (plays once, freezes on last frame; no overlay) */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 md:pt-32 md:pb-20 px-4 md:px-8 overflow-hidden">
        {/* Full-bleed video background — no overlay/tint over it */}
        <div className="absolute inset-0 z-0">
          {site.video.hero ? (
            <video
              className="w-full h-full object-cover pointer-events-none"
              src={assetUrl(site.video.hero)}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              controls={false}
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              tabIndex={-1}
              aria-hidden="true"
            />
          ) : (
            <SmartImage
              src={site.images.hero}
              alt="Oro — sweets, pastries and specialty coffee"
              text="Hero Video / Image"
              className="w-full h-full"
            />
          )}
        </div>

        {/* Content over the video. A soft text-shadow keeps it legible — this is a
            text property, not an overlay layer over the video. */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl [text-shadow:0_2px_18px_rgba(28,26,23,0.65)]">
          {/* Title */}
          <motion.h1
            initial={{ scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-serif text-[72px] md:text-[104px] lg:text-[128px] leading-none text-gold mb-3 [text-shadow:0_4px_28px_rgba(28,26,23,0.7)]"
          >
            ORO
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-sans text-[11px] md:text-xs uppercase tracking-[0.3em] font-semibold text-cream mb-9"
          >
            {site.tagline} &nbsp;&middot;&nbsp; {site.location}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 font-sans text-xs uppercase tracking-[0.2em] [text-shadow:none]"
          >
            <a href={menuUrl} className="border border-gold bg-gold text-cream px-8 py-4 shadow-lg hover:bg-gold-deep hover:border-gold-deep transition-colors">
              View the Menu
            </a>
            <Link to="/contact" className="border border-cream text-cream px-8 py-4 hover:bg-cream hover:text-burgundy transition-colors">
              Find Us
            </Link>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 text-cream/70 animate-bounce">
          <ChevronDown size={22} />
        </div>
      </section>

      {/* 2. Follow our journey — auto-scrolling gallery strip (straight after the hero) */}
      <section id="social" className="py-24 md:py-32 bg-burgundy overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8 w-full">
          <SectionHeading eyebrow="Stay Connected" title="Follow Our Journey" className="mb-3" />
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

        {/* Full-width auto-scrolling strip */}
        <Marquee
          items={site.social.posts}
          speed={45}
          gap="0.75rem"
          renderItem={(post, i) => {
            const href = post.url || site.socials.instagram || site.socials.facebook || '#';
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View Oro post ${i + 1} on social media`}
                className="group relative block w-44 h-44 md:w-60 md:h-60 overflow-hidden bg-gold/5"
              >
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
                  <SmartImage src={post.image} alt="" text="Post" className="w-full h-full" />
                </div>
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/45 transition-colors duration-300 flex items-center justify-center">
                  <Instagram size={22} className="text-cream opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300" />
                </div>
              </a>
            );
          }}
        />

        {/* Follow buttons */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 w-full">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            {site.socials.instagram && (
              <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-gold bg-gold text-cream px-8 py-3.5 font-sans uppercase text-[11px] tracking-[0.2em] font-bold hover:bg-gold-deep hover:border-gold-deep transition-colors">
                <Instagram size={16} /> Follow on Instagram <ArrowUpRight size={14} />
              </a>
            )}
            {site.socials.facebook && (
              <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-gold/60 bg-transparent text-gold-deep px-8 py-3.5 font-sans uppercase text-[11px] tracking-[0.2em] font-bold hover:bg-gold hover:text-cream transition-colors">
                <Facebook size={16} /> Facebook
              </a>
            )}
          </div>
        </div>
      </section>

      {/* 3. Signature moments — title first, then image */}
      <div id="menu">
        {site.moments.map((m, i) => (
          <div key={m.word}>
            <ParallaxMoment
              word={m.word}
              caption={m.caption}
              image={m.image}
              video={m.video}
              blend={m.blend}
              index={i + 1}
              reverse={i % 2 === 1}
            />
          </div>
        ))}
      </div>

      {/* Gallery — Discover what we serve (auto-playing, browsable) */}
      <section className="py-20 md:py-28 bg-burgundy overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8 w-full">
          <SectionHeading eyebrow="A Taste of Oro" title="Discover What We Serve" className="mb-12 md:mb-14" />
        </div>

        <AutoCarousel items={site.gallery} />

        <div className="text-center mt-12 px-4">
          <a href={menuUrl} className="inline-block border border-gold bg-gold text-cream px-10 py-4 font-sans uppercase text-[11px] tracking-[0.2em] font-bold hover:bg-gold-deep hover:border-gold-deep transition-colors">
            View the Full Menu
          </a>
        </div>
      </section>

      {/* 4. Visit / Contact preview — storefront image + map, then details */}
      <section id="visit" className="py-24 md:py-32 px-4 md:px-8 max-w-6xl mx-auto w-full">
        <SectionHeading eyebrow="Visit Us" title="Come for the coffee." className="mb-12 md:mb-16" />

        {/* Storefront photo + map, side by side on desktop, stacked on mobile */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-8 mb-12 md:mb-16">
          <motion.div
            initial={{ y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gold/25 shadow-lg shadow-espresso/20"
          >
            <SmartImage
              src={site.images.storefront}
              alt="Oro storefront in Benghazi"
              text="Storefront Photo"
              className="w-full h-full"
              imgClassName="object-top"
            />
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

        {/* Details */}
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 text-center md:text-left">
            <div>
              <h3 className="font-sans uppercase text-[10px] tracking-[0.2em] font-bold mb-2 text-gold-deep">Location</h3>
              <p className="font-sans text-sm text-ink/90 leading-relaxed">
                {site.contact.addressLines.map((line, i) => (
                  <span key={i}>{line}{i < site.contact.addressLines.length - 1 && <br/>}</span>
                ))}
              </p>
            </div>
            <div>
              <h3 className="font-sans uppercase text-[10px] tracking-[0.2em] font-bold mb-2 text-gold-deep">Phone</h3>
              <a href={site.contact.phoneHref} className="font-sans text-sm text-ink/90 hover:text-gold-deep transition-colors">{site.contact.phone}</a>
            </div>
            <div>
              <h3 className="font-sans uppercase text-[10px] tracking-[0.2em] font-bold mb-2 text-gold-deep">Email</h3>
              <a href={`mailto:${site.contact.email}`} className="font-sans text-sm text-ink/90 hover:text-gold-deep transition-colors break-all">{site.contact.email}</a>
            </div>
            <div>
              <h3 className="font-sans uppercase text-[10px] tracking-[0.2em] font-bold mb-2 text-gold-deep">Hours</h3>
              <ul className="font-sans text-sm text-ink/90 space-y-1">
                {site.hours.map((h) => (
                  <li key={h.days}>{h.days}<br/><span className="text-ink/70">{h.time}</span></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={site.contact.mapsUrl} target="_blank" rel="noreferrer" className="inline-block text-center border border-gold bg-gold text-cream px-8 py-3.5 font-sans uppercase text-[11px] tracking-[0.2em] font-bold hover:bg-gold-deep hover:border-gold-deep transition-colors">
              Get Directions
            </a>
            <Link to="/contact" className="inline-block text-center border border-gold/60 bg-transparent text-gold-deep px-8 py-3.5 font-sans uppercase text-[11px] tracking-[0.2em] font-bold hover:bg-gold hover:text-cream transition-colors">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
