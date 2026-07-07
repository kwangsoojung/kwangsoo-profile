import type { ProfileContent } from './types';

export const en = {
  lang: 'en',
  htmlLang: 'en',
  nameParts: ['JUNG', 'KWANG', 'SOO'],
  brandName: 'Jung Kwang Soo',
  location: 'Korea ↔ France ↔ Europe',
  discipline: 'Product · Retail · E-commerce Operations',
  quote:
    'Products need more than ideas. They need structure, timing, people and local understanding.',
  summary:
    'Connecting product, brand and market execution between Korea and France.',
  positioningStatement:
    'I work where product, brand and market execution meet.',
  heroVisual: {
    meta: 'Seoul / Paris / Europe',
    marker: '01',
    background: {
      src: '/images/hero/hero-background.png',
      alt: 'Abstract editorial background for Jung Kwang Soo',
      fallback: 'Editorial background',
    },
    portrait: {
      src: '/images/hero/portrait-cutout.png',
      alt: 'Portrait of Jung Kwang Soo',
      fallback: 'Portrait asset pending',
    },
  },
  mapVisual: {
    origin: 'KR',
    destination: 'FR',
  },
  positioningProof: [
    {
      number: '750+',
      title: 'Retail deployment',
      description:
        'Coordinating national in-store execution across Fnac, Darty, Carrefour and other retail networks.',
    },
    {
      number: '3',
      title: 'Shopify platforms',
      description:
        'Structuring e-commerce operations across France, Korea and Japan.',
    },
    {
      number: 'KR · FR',
      title: 'Cross-market coordination',
      description:
        'Bridging Korean headquarters, French market needs, suppliers and local partners.',
    },
  ],
  ui: {
    languageSwitcherLabel: 'Language',
    languages: [
      { code: 'en', label: 'EN' },
      { code: 'fr', label: 'FR' },
      { code: 'kr', label: 'KR' },
    ],
    nav: {
      cv: 'CV',
      profile: 'Profile',
      work: 'Selected Work',
      contact: 'Contact',
    },
    cta: {
      viewProfile: 'View Profile',
      downloadCv: 'Download CV',
    },
    sections: {
      positioning: 'Positioning',
      narrative: 'Career Narrative',
      capabilities: 'Capabilities',
      selectedWork: 'Selected Work',
      cv: 'CV Download',
      contact: 'Contact',
    },
    caseLabel: 'Case',
    contactLabels: {
      email: 'Email',
      linkedIn: 'LinkedIn',
      location: 'Location',
    },
  },
  pillars: [
    {
      title: 'Product Operations',
      description: 'Turning range, sourcing and timing into a usable path.',
    },
    {
      title: 'Retail Marketing',
      description: 'Making stories clear in physical spaces and launch moments.',
    },
    {
      title: 'E-commerce Execution',
      description: 'Keeping digital stores coherent across languages and markets.',
    },
  ],
  narrativeIntro: 'Four chapters shaped by objects, markets and momentum.',
  chapters: [
    {
      number: '01',
      title: 'Product & Furniture Development',
      company: 'EMONS / LBF',
      lines: [
        'Shaped concepts into practical furniture ranges.',
        'Balanced material choices, sourcing reality and everyday use.',
      ],
      logos: [
        {
          src: '/images/logos/emons.png',
          alt: 'EMONS logo',
          fallback: 'EMONS',
        },
        {
          src: '/images/logos/lbf.png',
          alt: 'LBF logo',
          fallback: 'LBF',
        },
      ],
    },
    {
      number: '02',
      title: 'France Market & Purchasing Operations',
      company: 'ORCOM Europe',
      lines: [
        'Worked between local needs and supplier networks.',
        'Made distance, language and timing easier to manage.',
      ],
      logos: [
        {
          src: '/images/logos/orcom.png',
          alt: 'ORCOM Europe logo',
          fallback: 'ORCOM',
        },
      ],
    },
    {
      number: '03',
      title: 'E-commerce & Brand Operations',
      company: 'ACE FOOD',
      lines: [
        'Supported storefront structure and catalog clarity.',
        'Helped brand details travel across digital buying moments.',
      ],
      logos: [
        {
          src: '/images/logos/ace-food.png',
          alt: 'ACE FOOD logo',
          fallback: 'ACE FOOD',
        },
      ],
    },
    {
      number: '04',
      title: 'Retail Marketing & Product Communication',
      company: 'HSAD-GIIR / LG-related projects',
      lines: [
        'Connected launch stories with display systems.',
        'Worked close to production partners and physical presentation.',
      ],
      logos: [
        {
          src: '/images/logos/hsad-giir.png',
          alt: 'HSAD-GIIR logo',
          fallback: 'HSAD-GIIR',
        },
      ],
    },
  ],
  handsOn: {
    headline: 'REAL OPERATIONS, BEYOND PROJECTS',
    title: 'BUILT, RAN, LEARNED',
    subtitle:
      'Corporate projects gave me structure. Running small businesses gave me reality.',
    body:
      'I have operated a woodworking activity and a residence business in France — experiences that taught me how ideas meet clients, costs, timing, maintenance and daily decisions.',
    cards: [
      {
        title: 'Woodworking Studio Operations',
        lines: [
          'Custom orders, material review, quotations, production timing and delivery follow-up',
          'A practical bridge between design intention and real workshop constraints',
        ],
        image: {
          src: '/images/work/woodworking-studio.png',
          alt: 'Woodworking studio operations',
          fallback: 'Woodworking studio',
        },
      },
      {
        title: 'Residence & Hospitality Operations',
        lines: [
          'Paris Noble Residence operations: reservations, guest communication, check-in/out, facilities and service quality',
          'Daily understanding of customer experience, maintenance, timing and operational responsibility',
        ],
        image: {
          src: '/images/work/residence-operations.png',
          alt: 'Residence and hospitality operations',
          fallback: 'Residence operations',
        },
      },
    ],
  },
  capabilitiesHeading: 'Practical range, held together by taste.',
  capabilities: [
    { title: 'Product Communication', note: 'clear offer logic' },
    { title: 'Retail Marketing', note: 'space, display, launch' },
    { title: 'Business Operations', note: 'process and timing' },
    { title: 'E-commerce Operations', note: 'storefront discipline' },
    { title: 'Cross-border Coordination', note: 'Korea-France rhythm' },
    { title: 'Design & Product Sense', note: 'detail with restraint' },
  ],
  selectedWorkHeading: 'Selected work as operating scenes, not trophies.',
  selectedWork: [
    {
      title: 'Retail Display & Product Communication',
      index: 'A',
      description:
        'In-store stories and launch details designed to make complex offers feel immediate.',
      image: {
        src: '/images/work/retail-display.png',
        alt: 'Retail display and product communication work',
        fallback: 'Retail display',
      },
    },
    {
      title: 'Shopify Multilingual Operations',
      index: 'B',
      description:
        'Storefront structure, catalog hygiene and localized content prepared across markets.',
      image: {
        src: '/images/work/ecommerce-operations.png',
        alt: 'E-commerce operations work',
        fallback: 'E-commerce operations',
      },
    },
    {
      title: 'Product Development & Sourcing',
      index: 'C',
      description:
        'From concept notes to supplier coordination, with care for quality and fit.',
      image: {
        src: '/images/work/product-development.png',
        alt: 'Product development and sourcing work',
        fallback: 'Product development',
      },
    },
    {
      title: 'Brand, Space & Production Coordination',
      index: 'D',
      description:
        'A practical bridge between creative intent, physical constraints and delivery teams.',
      image: {
        src: '/images/work/brand-space-production.png',
        alt: 'Brand, space and production coordination work',
        fallback: 'Brand and space',
      },
    },
  ],
  cv: {
    access: {
      codeError: 'Incorrect code. Please try again.',
      inputLabel: 'Enter access code',
      unlockButton: 'Unlock CV',
    },
    heading: 'Download the profile in your preferred language.',
    files: [
      { label: 'Download Korean CV', href: '/cv/Jung_Kwang_Soo_CV_KR.pdf' },
      { label: 'Download English CV', href: '/cv/Jung_Kwang_Soo_CV_EN.pdf' },
      { label: 'Download French CV', href: '/cv/Jung_Kwang_Soo_CV_FR.pdf' },
    ],
  },
  contact: {
    email: 'jungkwangsoo.paris@gmail.com',
    area: 'Paris area, France',
    linkedIn: 'https://www.linkedin.com/in/jungkwangsoo/',
    linkedInLabel: 'jungkwangsoo',
    cta: 'For product, retail, e-commerce or Korea-France coordination opportunities.',
  },
} satisfies ProfileContent;
