/**
 * Bilingual UI + content strings. `en` is the source of truth for the shape;
 * `ar` must match it. Non-text data (image/video paths, phone, email, urls,
 * coords) stays in src/config/site.ts.
 */

export type Lang = 'ar' | 'en';

const en = {
  nav: { home: 'Home', about: 'About', menu: 'Menu', contact: 'Contact' },

  hero: {
    tagline: 'Fine sweets, pastries & specialty coffee',
    location: 'Benghazi, Libya',
    viewMenu: 'View the Menu',
    findUs: 'Find Us',
  },

  moments: [
    { word: 'Coffee', caption: 'Single-origin beans, pulled with precision' },
    { word: 'Pastries', caption: 'Laminated by hand, baked before dawn' },
    { word: 'Desserts', caption: 'Artful, elegant, unforgettable' },
  ],

  gallery: {
    eyebrow: 'A Taste of Oro',
    title: 'Discover What We Serve',
    button: 'View the Full Menu',
    labels: [
      'Honey Croissant',
      'Pistachio Crepe',
      'Cinnamon Roll',
      'Pancakes',
      'Mojito',
      'Smoothie',
      'Hot Chocolate',
      'Cold Drinks',
    ],
  },

  social: {
    eyebrow: 'Stay Connected',
    title: 'Follow Our Journey',
    followFacebook: 'Follow on Facebook',
    followInstagram: 'Follow on Instagram',
  },

  visit: {
    eyebrow: 'Visit Us',
    title: 'Come for the coffee.',
    locationLabel: 'Location',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    hoursLabel: 'Hours',
    addressLines: ['Finisia Street', 'Benghazi, Libya'],
    hoursList: [
      { days: 'Saturday – Thursday', time: '08:00 – 23:00' },
      { days: 'Friday', time: '10:00 – 23:00' },
    ],
    getDirections: 'Get Directions',
    contactUs: 'Contact Us',
  },

  footer: {
    tagline: 'Making & Selling Fine Sweets and Pastries',
    rights: 'All Rights Reserved.',
    cafe: 'ORO Cafe',
  },

  about: {
    heroEyebrow: 'Our Story',
    heroTitle: 'About Oro',
    headingLead: 'Crafted with passion,',
    headingEmph: 'served with care.',
    story: [
      'Every morning, our kitchen comes alive before dawn. We believe in the slow arts—laminating dough by hand, sourcing single-origin beans, and refusing shortcuts. Our aesthetic is modern minimalism, ensuring that the vibrancy and texture of our creations take center stage.',
      "Whether you're stepping in for your morning espresso ritual or selecting an elaborate entremet for a celebration, we invite you to experience the warmth and elegance of Oro.",
      'From our home in Benghazi, Libya, we set out to make every cup and every pastry a small moment worth savouring — a place where quality, creativity and genuine hospitality meet.',
    ],
    visionLabel: 'Vision',
    missionLabel: 'Mission',
    ctaEyebrow: 'Come Say Hello',
    ctaTitle: 'Taste the difference.',
  },

  values: {
    statement: 'To be the first name in delivering an exceptional coffee & hospitality experience.',
    vision: 'Leading regional brand in refined hospitality',
    mission: 'High-quality products and refined service',
    pillars: ['Quality', 'Creativity', 'Hospitality', 'Detail', 'Sustainability'],
  },

  contact: {
    heroEyebrow: 'Get in Touch',
    heroTitle: 'Contact',
    heroSubtitle: "We'd love to welcome you to Oro in Benghazi, Libya.",
    locationLabel: 'Location',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    onlineLabel: 'Online',
    hoursTitle: 'Opening Hours',
    getDirections: 'Get Directions',
    bannerImageText: 'Contact Banner Image',
  },

  menuBannerEyebrow: 'Our Menu',
  menuBannerTitle: 'The Menu',
};

const ar: typeof en = {
  nav: { home: 'الرئيسية', about: 'من نحن', menu: 'القائمة', contact: 'تواصل معنا' },

  hero: {
    tagline: 'حلويات ومعجنات فاخرة وقهوة مختصة',
    location: 'بنغازي، ليبيا',
    viewMenu: 'تصفّح القائمة',
    findUs: 'موقعنا',
  },

  moments: [
    { word: 'قهوة', caption: 'حبوب أحادية المصدر، تُحضَّر بإتقان' },
    { word: 'معجنات', caption: 'مصنوعة يدويًا، تُخبز قبل الفجر' },
    { word: 'حلويات', caption: 'فنٌّ وأناقةٌ لا تُنسى' },
  ],

  gallery: {
    eyebrow: 'لمحة من أورو',
    title: 'اكتشف ما نقدّمه',
    button: 'شاهد القائمة كاملة',
    labels: [
      'كرواسون بالعسل',
      'كريب بالفستق',
      'سينابون',
      'بان كيك',
      'موخيتو',
      'سموذي',
      'شوكولاتة ساخنة',
      'مشروبات باردة',
    ],
  },

  social: {
    eyebrow: 'ابقَ على تواصل',
    title: 'تابع رحلتنا',
    followFacebook: 'تابعنا على فيسبوك',
    followInstagram: 'تابعنا على إنستغرام',
  },

  visit: {
    eyebrow: 'زورونا',
    title: 'تعال لاحتساء القهوة.',
    locationLabel: 'الموقع',
    phoneLabel: 'الهاتف',
    emailLabel: 'البريد الإلكتروني',
    hoursLabel: 'أوقات العمل',
    addressLines: ['شارع فينيسيا', 'بنغازي، ليبيا'],
    hoursList: [
      { days: 'السبت – الخميس', time: '08:00 – 23:00' },
      { days: 'الجمعة', time: '10:00 – 23:00' },
    ],
    getDirections: 'احصل على الاتجاهات',
    contactUs: 'تواصل معنا',
  },

  footer: {
    tagline: 'صناعة وبيع أجود الحلويات والمعجنات',
    rights: 'جميع الحقوق محفوظة.',
    cafe: 'مقهى أورو',
  },

  about: {
    heroEyebrow: 'قصتنا',
    heroTitle: 'عن أورو',
    headingLead: 'نصنعها بشغف،',
    headingEmph: 'ونقدّمها بعناية.',
    story: [
      'في كلّ صباح، يدبّ النشاط في مطبخنا قبل بزوغ الفجر. نؤمن بالحِرف المتأنّية — نرقّق العجين يدويًا، وننتقي حبوب القهوة أحادية المصدر، ونرفض الحلول المختصرة. أسلوبنا يقوم على البساطة العصرية، بحيث تتصدّر نكهات إبداعاتنا وقوامها المشهد.',
      'سواء مررتَ لاحتساء إسبريسو الصباح أو اخترتَ حلوى فاخرة لمناسبة خاصة، ندعوك لتختبر دفء أورو وأناقتها.',
      'من موطننا في بنغازي بليبيا، انطلقنا لنجعل من كلّ كوبٍ وكلّ قطعة معجّنات لحظةً صغيرةً تستحقّ التذوّق — مكانٌ تلتقي فيه الجودة والإبداع والضيافة الصادقة.',
    ],
    visionLabel: 'الرؤية',
    missionLabel: 'الرسالة',
    ctaEyebrow: 'مرحبًا بك',
    ctaTitle: 'تذوّق الفرق.',
  },

  values: {
    statement: 'أن نكون الاسم الأول في تقديم تجربة استثنائية من القهوة والضيافة.',
    vision: 'علامة رائدة إقليميًا في الضيافة الراقية',
    mission: 'منتجات عالية الجودة وخدمة راقية',
    pillars: ['الجودة', 'الإبداع', 'الضيافة', 'الإتقان', 'الاستدامة'],
  },

  contact: {
    heroEyebrow: 'تواصل معنا',
    heroTitle: 'اتصل بنا',
    heroSubtitle: 'يسعدنا الترحيب بك في أورو في بنغازي، ليبيا.',
    locationLabel: 'الموقع',
    phoneLabel: 'الهاتف',
    emailLabel: 'البريد الإلكتروني',
    onlineLabel: 'عبر الإنترنت',
    hoursTitle: 'أوقات العمل',
    getDirections: 'احصل على الاتجاهات',
    bannerImageText: 'صورة صفحة التواصل',
  },

  menuBannerEyebrow: 'قائمتنا',
  menuBannerTitle: 'القائمة',
};

export const strings = { en, ar };
export type Strings = typeof en;
