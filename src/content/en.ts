import type { ProfileContent } from './types';

export const en = {
  lang: 'en',
  htmlLang: 'en',
  nameParts: ['JUNG', 'KWANG', 'SOO'],
  brandName: 'Jung Kwang Soo',
  location: 'Korea ↔ France',
  discipline: 'Product · Retail · E-commerce Operations',
  quote:
    'Products need more than ideas. They need structure, timing, people and local understanding.',
  summary:
    'Connecting product, brand and market execution between Korea and France.',
  positioningStatement:
    'I work where product, brand and market execution meet.',
  heroVisual: {
    meta: 'Seoul / Paris',
    marker: '01',
  },
  ui: {
    languageSwitcherLabel: 'Language',
    languages: [
      { code: 'en', label: 'EN' },
      { code: 'fr', label: 'FR' },
      { code: 'kr', label: 'KR' },
    ],
    nav: {
      profile: 'Profile',
      work: 'Work',
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
    },
    {
      number: '02',
      title: 'France Market & Purchasing Operations',
      company: 'ORCOM Europe',
      lines: [
        'Worked between local needs and supplier networks.',
        'Made distance, language and timing easier to manage.',
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
    },
    {
      number: '04',
      title: 'Retail Marketing & Product Communication',
      company: 'HSAD-GIIR / LG-related projects',
      lines: [
        'Connected launch stories with display systems.',
        'Worked close to production partners and physical presentation.',
      ],
    },
  ],
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
    },
    {
      title: 'Shopify Multilingual Operations',
      index: 'B',
      description:
        'Storefront structure, catalog hygiene and localized content prepared across markets.',
    },
    {
      title: 'Product Development & Sourcing',
      index: 'C',
      description:
        'From concept notes to supplier coordination, with care for quality and fit.',
    },
    {
      title: 'Brand, Space & Production Coordination',
      index: 'D',
      description:
        'A practical bridge between creative intent, physical constraints and delivery teams.',
    },
  ],
  cv: {
    heading: 'Download the profile in your preferred language.',
    files: [
      { label: 'Korean CV', href: '/cv/Jung_Kwang_Soo_CV_KR.pdf' },
      { label: 'English CV', href: '/cv/Jung_Kwang_Soo_CV_EN.pdf' },
      { label: 'French CV', href: '/cv/Jung_Kwang_Soo_CV_FR.pdf' },
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
