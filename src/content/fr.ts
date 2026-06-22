import type { ProfileContent } from './types';

export const fr = {
  lang: 'fr',
  htmlLang: 'fr',
  nameParts: ['JUNG', 'KWANG', 'SOO'],
  brandName: 'Jung Kwang Soo',
  location: 'Korea ↔ France ↔ Europe',
  discipline: 'Opérations produit · Marketing retail · Exécution e-commerce',
  quote:
    'Un produit ne se construit pas seulement avec une idée. Il lui faut une structure, le bon timing, les bonnes personnes et une compréhension locale.',
  summary:
    'Relier produit, marque et marché entre la Corée et la France.',
  positioningStatement:
    'Je travaille au croisement du produit, de la marque et de l’exécution marché.',
  heroVisual: {
    meta: 'Seoul / Paris / Europe',
    marker: '01',
    background: {
      src: '/images/hero/hero-background.png',
      alt: 'Fond éditorial abstrait pour Jung Kwang Soo',
      fallback: 'Fond éditorial',
    },
    portrait: {
      src: '/images/hero/portrait-cutout.png',
      alt: 'Portrait de Jung Kwang Soo',
      fallback: 'Portrait à ajouter',
    },
  },
  mapVisual: {
    origin: 'KR',
    destination: 'FR',
  },
  ui: {
    languageSwitcherLabel: 'Langue',
    languages: [
      { code: 'en', label: 'EN' },
      { code: 'fr', label: 'FR' },
      { code: 'kr', label: 'KR' },
    ],
    nav: {
      profile: 'Profil',
      work: 'Travaux',
      contact: 'Contact',
    },
    cta: {
      viewProfile: 'Voir le profil',
      downloadCv: 'Télécharger le CV',
    },
    sections: {
      positioning: 'Positionnement',
      narrative: 'Parcours',
      capabilities: 'Compétences',
      selectedWork: 'Travaux choisis',
      cv: 'CV',
      contact: 'Contact',
    },
    caseLabel: 'Cas',
    contactLabels: {
      email: 'Email',
      linkedIn: 'LinkedIn',
      location: 'Lieu',
    },
  },
  pillars: [
    {
      title: 'Opérations produit',
      description: 'Structurer gamme, sourcing et calendrier pour avancer.',
    },
    {
      title: 'Marketing retail',
      description: 'Rendre une histoire lisible dans l’espace et le lancement.',
    },
    {
      title: 'Exécution e-commerce',
      description: 'Maintenir des boutiques claires entre langues et marchés.',
    },
  ],
  narrativeIntro: 'Quatre chapitres entre objets, marchés et mise en mouvement.',
  chapters: [
    {
      number: '01',
      title: 'Développement produit & mobilier',
      company: 'EMONS / LBF',
      lines: [
        'Transformer des concepts en gammes concrètes.',
        'Tenir ensemble matériaux, sourcing et usages quotidiens.',
      ],
      logos: [
        {
          src: '/images/logos/emons.png',
          alt: 'Logo EMONS',
          fallback: 'EMONS',
        },
        {
          src: '/images/logos/lbf.png',
          alt: 'Logo LBF',
          fallback: 'LBF',
        },
      ],
    },
    {
      number: '02',
      title: 'Achats & opérations marché France',
      company: 'ORCOM Europe',
      lines: [
        'Faire le lien entre besoins locaux et réseaux fournisseurs.',
        'Rendre la distance, la langue et le timing plus simples.',
      ],
      logos: [
        {
          src: '/images/logos/orcom.png',
          alt: 'Logo ORCOM Europe',
          fallback: 'ORCOM',
        },
      ],
    },
    {
      number: '03',
      title: 'E-commerce & opérations de marque',
      company: 'ACE FOOD',
      lines: [
        'Clarifier la boutique, le catalogue et les contenus.',
        'Aider la marque à rester cohérente dans l’achat en ligne.',
      ],
      logos: [
        {
          src: '/images/logos/ace-food.png',
          alt: 'Logo ACE FOOD',
          fallback: 'ACE FOOD',
        },
      ],
    },
    {
      number: '04',
      title: 'Marketing retail & communication produit',
      company: 'HSAD-GIIR / projets liés à LG',
      lines: [
        'Relier récits de lancement et dispositifs de présentation.',
        'Travailler près des partenaires de production et du terrain.',
      ],
      logos: [
        {
          src: '/images/logos/hsad-giir.png',
          alt: 'Logo HSAD-GIIR',
          fallback: 'HSAD-GIIR',
        },
      ],
    },
  ],
  capabilitiesHeading: 'Une pratique opérationnelle, portée par le sens du détail.',
  capabilities: [
    { title: 'Communication produit', note: 'offre claire' },
    { title: 'Marketing retail', note: 'espace, display, lancement' },
    { title: 'Opérations business', note: 'process et timing' },
    { title: 'Opérations e-commerce', note: 'discipline storefront' },
    { title: 'Coordination transfrontalière', note: 'rythme Corée-France' },
    { title: 'Sens design & produit', note: 'détail mesuré' },
  ],
  selectedWorkHeading: 'Des scènes de travail plus que des trophées.',
  selectedWork: [
    {
      title: 'Retail display & communication produit',
      index: 'A',
      description:
        'Des récits en magasin et des détails de lancement qui rendent l’offre immédiate.',
      image: {
        src: '/images/work/retail-display.png',
        alt: 'Travail de retail display et communication produit',
        fallback: 'Retail display',
      },
    },
    {
      title: 'Opérations Shopify multilingues',
      index: 'B',
      description:
        'Structure de boutique, catalogue propre et contenu localisé entre marchés.',
      image: {
        src: '/images/work/ecommerce-operations.png',
        alt: 'Travail d’opérations e-commerce',
        fallback: 'E-commerce',
      },
    },
    {
      title: 'Développement produit & sourcing',
      index: 'C',
      description:
        'Des notes de concept à la coordination fournisseurs, avec exigence et justesse.',
      image: {
        src: '/images/work/product-development.png',
        alt: 'Travail de développement produit et sourcing',
        fallback: 'Développement produit',
      },
    },
    {
      title: 'Coordination marque, espace & production',
      index: 'D',
      description:
        'Un lien pratique entre intention créative, contraintes physiques et livraison.',
      image: {
        src: '/images/work/brand-space-production.png',
        alt: 'Travail de coordination marque, espace et production',
        fallback: 'Marque et espace',
      },
    },
  ],
  cv: {
    heading: 'Téléchargez le profil dans la langue de votre choix.',
    files: [
      { label: 'CV coréen', href: '/cv/Jung_Kwang_Soo_CV_KR.pdf' },
      { label: 'CV anglais', href: '/cv/Jung_Kwang_Soo_CV_EN.pdf' },
      { label: 'CV français', href: '/cv/Jung_Kwang_Soo_CV_FR.pdf' },
    ],
  },
  contact: {
    email: 'jungkwangsoo.paris@gmail.com',
    area: 'Région parisienne, France',
    linkedIn: 'https://www.linkedin.com/in/jungkwangsoo/',
    linkedInLabel: 'jungkwangsoo',
    cta: 'Pour des opportunités liées au produit, au retail, à l’e-commerce ou à la coordination Corée-France.',
  },
} satisfies ProfileContent;
