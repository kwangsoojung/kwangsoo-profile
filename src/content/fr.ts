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
  positioningProof: [
    {
      number: '750+',
      title: 'Déploiement retail',
      description:
        'Coordination de l’exécution nationale en magasin auprès de réseaux comme Fnac, Darty, Carrefour et autres enseignes.',
    },
    {
      number: '3',
      title: 'Plateformes Shopify',
      description:
        'Structuration des opérations e-commerce entre la France, la Corée et le Japon.',
    },
    {
      number: 'KR · FR',
      title: 'Coordination multi-marchés',
      description:
        'Faire le lien entre siège coréen, besoins du marché français, fournisseurs et partenaires locaux.',
    },
  ],
  ui: {
    languageSwitcherLabel: 'Langue',
    languages: [
      { code: 'en', label: 'EN' },
      { code: 'fr', label: 'FR' },
      { code: 'kr', label: 'KR' },
    ],
    nav: {
      cv: 'CV',
      profile: 'Profil',
      work: 'Réalisations',
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
        'Relier matériaux, sourcing et usages quotidiens.',
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
      company: 'ORCOM EUROPE',
      lines: [
        'Faire le lien entre besoins locaux, réseaux fournisseurs et contraintes de timing.',
        'Simplifier la distance, la langue et l’exécution.',
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
        'Structurer catalogues, contenus et opérations Shopify.',
        'Maintenir la cohérence de marque entre France, Corée et Japon.',
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
      company: 'HSAD-GIIR / LG Projects',
      lines: [
        'Déployer les dispositifs retail sur le terrain.',
        'Relier lancements, PLV, partenaires et réseaux de vente.',
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
  handsOn: {
    headline: 'LE RÉEL, AU-DELÀ DES PROJETS',
    title: 'BUILT, RAN, LEARNED',
    subtitle: 'Créer, gérer, apprendre par le réel',
    body:
      'Les projets d’entreprise m’ont appris la structure. L’exploitation d’activités indépendantes m’a appris la réalité du terrain. En France, j’ai géré une activité de fabrication bois ainsi qu’une résidence, avec une compréhension concrète des clients, des coûts, du temps, de la maintenance et des décisions quotidiennes.',
    cards: [
      {
        title: 'Woodworking Studio Operations',
        subtitle: 'Gestion d’un atelier bois',
        lines: [
          'Commandes sur mesure, choix des matériaux, devis, planning de fabrication et suivi de livraison',
          'Une expérience concrète entre intention design et contraintes réelles d’atelier',
        ],
        image: {
          src: '/images/work/woodworking-studio.png',
          alt: 'Opérations d’atelier bois',
          fallback: 'Atelier bois',
        },
      },
      {
        title: 'Residence & Hospitality Operations',
        subtitle: 'Gestion de résidence',
        lines: [
          'Paris Noble Residence : réservations, relation client, check-in/out, coordination des équipements et qualité de service',
          'Compréhension quotidienne de l’expérience client, de la maintenance, du timing et de la responsabilité opérationnelle',
        ],
        image: {
          src: '/images/work/residence-operations.png',
          alt: 'Opérations de résidence et hospitalité',
          fallback: 'Résidence',
        },
      },
    ],
  },
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
    access: {
      codeError: 'Code incorrect. Veuillez réessayer.',
      inputLabel: 'Entrez le code d’accès',
      unlockButton: 'Déverrouiller le CV',
    },
    heading: 'Téléchargez le profil dans la langue de votre choix.',
    files: [
      { label: 'Télécharger le CV coréen', href: '/cv/Jung_Kwang_Soo_CV_KR.pdf' },
      { label: 'Télécharger le CV anglais', href: '/cv/Jung_Kwang_Soo_CV_EN.pdf' },
      { label: 'Télécharger le CV français', href: '/cv/Jung_Kwang_Soo_CV_FR.pdf' },
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
