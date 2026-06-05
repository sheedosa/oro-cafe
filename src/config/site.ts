/**
 * Single source of truth for ORO's business information.
 *
 * ── EDIT THIS FILE to update the site. ──
 * Anything marked TODO below uses placeholder values that should be
 * confirmed with the client before showing the site publicly.
 */

export const site = {
  name: 'ORO',
  fullName: 'Oro — Sweets & Pastries',
  // One-line value proposition shown in the hero.
  tagline: 'Fine sweets, pastries & specialty coffee',
  location: 'Benghazi, Libya',
  quote: 'Coffee is not just a daily habit — it is a complete experience.',
  shortDescription:
    'Oro — Sweets & Pastries. Specialty coffee, luxury desserts and fine pastries in Benghazi, Libya.',

  contact: {
    addressLines: ['Finisia Street', 'Benghazi, Libya'],
    phone: '091 233 75 98',
    // International format for click-to-call (Libya +218, drop the leading 0).
    phoneHref: 'tel:+218912337598',
    email: 'sales@orocafe.ly',
    website: 'www.orosweet.ly',
    websiteHref: 'https://www.orosweet.ly',
    // Exact shop location (Oro Sweets & Pastries, Benghazi).
    coords: '32.0593966,20.0740673',
    // "Get Directions" — opens the place in Google Maps.
    mapsUrl: 'https://www.google.com/maps/place/Oro+Sweets+%26+Pastries/@32.0593966,20.0740673,17z/data=!3m1!4b1!4m6!3m5!1s0x13831b006d4053eb:0x1024f5228f3d1543!8m2!3d32.0593966!4d20.0740673!16s%2Fg%2F11zj6n6byk',
  },

  hours: [
    { days: 'Saturday – Thursday', time: '08:00 – 23:00' },
    { days: 'Friday', time: '10:00 – 23:00' },
  ],

  // Leave a value empty ('') to hide that social icon.
  socials: {
    facebook: 'https://www.facebook.com/Orosweets/',
    instagram: '', // TODO: add the Instagram profile URL to show the icon.
  },

  /**
   * Image paths. Drop matching files into `public/images/` and they appear
   * automatically — until then, an elegant placeholder is shown.
   * See public/images/README.md for the expected filenames.
   */
  images: {
    hero: '/images/hero.jpg',           // homepage hero (video poster fallback)
    about: '/images/about.jpg',         // homepage About + About-page story
    aboutHero: '/images/about-hero.jpg',// About page banner
    valuesImage: '/images/values.jpg',  // homepage dark "Values" band
    storefront: '/images/storefront.jpg',// homepage Visit + Contact page
    contactHero: '/images/contact-hero.jpg', // Contact page banner
    contactShowcase: '/images/contact-showcase.jpg', // Contact page feature photo (after the title)
  },

  // Hero background video (plays muted + looping behind the hero text).
  // Set to '' to fall back to the hero image instead.
  video: {
    hero: '/videos/hero.mp4',
  },

  // Words for the homepage marquee ribbon.
  marqueeWords: ['Coffee', 'Pastries', 'Desserts', 'Hospitality', 'Breakfast', 'Specialty'],

  // "Signature moments" on the homepage (parallax panels beside big type).
  // Each may use an image OR a video; `blend: true` renders it frameless with
  // edges feathered into the background. Drop matching files in public/.
  moments: [
    { word: 'Coffee', caption: 'Single-origin beans, pulled with precision', image: '/images/moment-coffee.webp', video: '', blend: true },
    { word: 'Pastries', caption: 'Laminated by hand, baked before dawn', image: '/images/moment-pastries.webp', video: '', blend: true },
    { word: 'Desserts', caption: 'Artful, elegant, unforgettable', image: '/images/moment-desserts.webp', video: '', blend: true },
  ],

  // Menu categories shown as tiles on the homepage (each clicks into the
  // matching section of the self-hosted menu via `${menuUrl}?lang=…#id`).
  // The `id` MUST match a <section id="…"> in public/menu/index.html.
  // Images are reused from the menu's own category photos. Order mirrors the
  // menu's nav so the homepage previews the menu's structure 1:1.
  categories: [
    { id: 'hot-drinks',  image: '/menu/img/hot-drinks.webp'  },
    { id: 'iced-coffee', image: '/menu/img/iced-coffee.webp' },
    { id: 'milkshakes',  image: '/menu/img/milkshake.webp'   },
    { id: 'mojitos',     image: '/menu/img/mojito.webp'      },
    { id: 'smoothies',   image: '/menu/img/smoothie.webp'    },
    { id: 'juices',      image: '/menu/img/juice.webp'       },
    { id: 'breakfast',   image: '/menu/img/breakfast.webp'   },
    { id: 'croissant',   image: '/menu/img/croissant.webp'   },
    { id: 'waffles',     image: '/menu/img/waffle.webp'      },
    { id: 'crepes',      image: '/menu/img/crepe.webp'       },
    { id: 'pancakes',    image: '/menu/img/pancakes.webp'    },
    { id: 'donuts',      image: '/menu/img/donuts.webp'      },
    { id: 'cinnabon',    image: '/menu/img/cinnabon.webp'    },
    { id: 'cookies',     image: '/menu/img/cookies.webp'     },
    { id: 'appetizers',  image: '/menu/img/appetizers.webp'  },
    { id: 'cold-drinks', image: '/menu/img/cold-drinks.webp' },
  ],

  // "Discover what we serve" — auto-playing, browsable image gallery.
  // Drop photos into public/images/gallery/ and list them here (label optional).
  gallery: [
    { image: '/images/gallery/croissant.webp',  label: 'Honey Croissant' },
    { image: '/menu/img/waffle.webp',           label: 'Waffle Stick' },
    { image: '/images/gallery/crepe.webp',      label: 'Pistachio Crepe' },
    { image: '/images/gallery/pancakes.webp',   label: 'Pancakes' },
    { image: '/menu/img/donuts.webp',           label: 'Filled Donut' },
    { image: '/images/gallery/cinnabon.webp',   label: 'Cinnamon Roll' },
    { image: '/menu/img/cookies.webp',          label: 'Pistachio Cookies' },
    { image: '/menu/img/breakfast.webp',        label: 'Morning Toast' },
    { image: '/images/gallery/mojito.webp',     label: 'Mojito' },
    { image: '/images/gallery/smoothie.webp',   label: 'Smoothie' },
    { image: '/menu/img/juice.webp',            label: 'Fresh Juice' },
    { image: '/menu/img/iced-coffee.webp',      label: 'Iced Latte' },
    { image: '/images/gallery/tea-chocolate.webp', label: 'Hot Chocolate' },
    { image: '/images/gallery/cold-drinks.webp',label: 'Cold Drinks' },
  ],

  // Vision / Mission / Values — shared by the homepage band and the About page.
  values: {
    statement: 'To be the first name in delivering an exceptional coffee & hospitality experience.',
    vision: 'Leading regional brand in refined hospitality',
    mission: 'High-quality products and refined service',
    pillars: ['Quality', 'Creativity', 'Hospitality', 'Detail', 'Sustainability'],
  },

  /**
   * "Follow our journey" social section on the homepage.
   * - `instagramUrl`: set this to show the Instagram follow button (kept in sync
   *   with `socials.instagram` below). Leave '' to hide it.
   * - `posts`: curated grid. Drop each photo into public/images/social/ and set
   *   `url` to the real post link. If `url` is '', it falls back to the profile.
   */
  social: {
    handle: '@orosweets',
    posts: [
      { image: '/images/social/1.jpg', url: '' },
      { image: '/images/social/2.jpg', url: '' },
      { image: '/images/social/3.jpg', url: '' },
      { image: '/images/social/4.jpg', url: '' },
      { image: '/images/social/5.jpg', url: '' },
      { image: '/images/social/6.jpg', url: '' },
      { image: '/images/social/7.jpg', url: '' },
      { image: '/images/social/8.jpg', url: '' },
    ],
  },

  // NOTE: The full menu is a standalone self-hosted page at `public/menu/`
  // (see `menuUrl` below). To edit menu items/prices/images, edit that
  // page's files directly — not this config.
} as const;

export type Site = typeof site;

/**
 * URL of the self-hosted full menu page (static site in `public/menu/`).
 * It's a standalone HTML page, so it's reached via a normal link, not the
 * in-app router. We point at `index.html` explicitly so the dev server's
 * SPA fallback doesn't intercept the bare `/menu/` directory request.
 * `BASE_URL` keeps it correct if the site is deployed in a subpath.
 */
export const menuUrl = `${import.meta.env.BASE_URL}menu/index.html`;

/**
 * Prefix a root-absolute asset path (e.g. "/images/x.jpg", "/videos/x.mp4")
 * with the deploy base so it resolves under a GitHub Pages subpath.
 * Leaves non-absolute / external URLs untouched.
 */
export const assetUrl = (path?: string) =>
  path && path.startsWith('/')
    ? `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`
    : path;
