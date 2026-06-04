import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import SmartImage from '../components/SmartImage';
import { site, menuUrl } from '../config/site';
import { useLang } from '../i18n/useLang';

export default function AboutPage() {
  const { t, lang } = useLang();
  const menuLink = `${menuUrl}?lang=${lang}`;
  return (
    <div className="flex flex-col w-full">
      <PageHero
        eyebrow={t.about.heroEyebrow}
        title={t.about.heroTitle}
        subtitle={`${t.hero.tagline} · ${t.hero.location}`}
        image={site.images.aboutHero}
        imageText="About Banner Image"
      />

      {/* Story */}
      <section className="py-20 md:py-28 px-4 md:px-8 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 aspect-[4/5] relative order-2 md:order-1"
          >
            <SmartImage src={site.images.about} alt="The craft behind Oro" text="Interior or Signature Item" className="w-full h-full" />
            <div className="absolute inset-0 border border-gold/30 -translate-x-4 translate-y-4 -z-10 bg-burgundy"></div>
          </motion.div>

          <motion.div
            initial={{ x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full md:w-1/2 order-1 md:order-2"
          >
            <h2 className="font-serif italic text-4xl md:text-5xl text-gold mb-8 leading-tight">
              {t.about.headingLead} <br/><span className="not-italic font-bold font-sans uppercase text-3xl tracking-tight text-ink">{t.about.headingEmph}</span>
            </h2>
            <div className="font-sans text-sm text-ink/90 space-y-6 leading-relaxed">
              {t.about.story.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision · Mission · Values */}
      <section className="py-20 md:py-28 bg-espresso text-gold relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
        <div className="max-w-5xl mx-auto px-4 md:px-8 w-full relative z-10 text-center">
          <motion.h2
            initial={{ y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif italic text-3xl md:text-4xl leading-tight mb-14 max-w-3xl mx-auto"
          >
            &ldquo;{t.values.statement}&rdquo;
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12 text-start max-w-2xl mx-auto">
            <div>
              <h3 className="uppercase text-[10px] tracking-[0.3em] font-bold mb-3 opacity-70">{t.about.visionLabel}</h3>
              <p className="font-sans text-sm font-normal tracking-wide">{t.values.vision}</p>
            </div>
            <div>
              <h3 className="uppercase text-[10px] tracking-[0.3em] font-bold mb-3 opacity-70">{t.about.missionLabel}</h3>
              <p className="font-sans text-sm font-normal tracking-wide">{t.values.mission}</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {t.values.pillars.map(val => (
              <span key={val} className="border border-gold/30 px-4 py-1.5 font-sans text-xs tracking-wider rounded-full hover:bg-gold hover:text-espresso transition-colors">{val}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-4 md:px-8 max-w-4xl mx-auto w-full text-center">
        <SectionHeading eyebrow={t.about.ctaEyebrow} title={t.about.ctaTitle} className="mb-10" />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={menuLink} className="inline-block border border-gold bg-gold text-cream px-10 py-4 font-sans uppercase text-[11px] tracking-[0.2em] font-bold hover:bg-gold-deep hover:border-gold-deep transition-colors">
            {t.hero.viewMenu}
          </a>
          <Link to="/contact" className="inline-block border border-gold/60 text-gold-deep px-10 py-4 font-sans uppercase text-[11px] tracking-[0.2em] font-bold hover:bg-gold hover:text-cream transition-colors">
            {t.hero.findUs}
          </Link>
        </div>
      </section>
    </div>
  );
}
