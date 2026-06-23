export type LanguageCode = 'en' | 'fr' | 'kr';

export type LanguageOption = {
  code: LanguageCode;
  label: string;
};

export type ReplaceableAsset = {
  src: string;
  alt: string;
  fallback: string;
};

export type ProfileContent = {
  lang: LanguageCode;
  htmlLang: string;
  nameParts: string[];
  brandName: string;
  location: string;
  discipline: string;
  quote: string;
  summary: string;
  positioningStatement: string;
  heroVisual: {
    meta: string;
    marker: string;
    background: ReplaceableAsset;
    portrait: ReplaceableAsset;
  };
  mapVisual: {
    origin: string;
    destination: string;
  };
  ui: {
    languageSwitcherLabel: string;
    languages: LanguageOption[];
    nav: {
      cv: string;
      profile: string;
      work: string;
      contact: string;
    };
    cta: {
      viewProfile: string;
      downloadCv: string;
    };
    sections: {
      positioning: string;
      narrative: string;
      capabilities: string;
      selectedWork: string;
      cv: string;
      contact: string;
    };
    caseLabel: string;
    contactLabels: {
      email: string;
      linkedIn: string;
      location: string;
    };
  };
  pillars: Array<{
    title: string;
    description: string;
  }>;
  chapters: Array<{
    number: string;
    title: string;
    company: string;
    lines: string[];
    logos: ReplaceableAsset[];
  }>;
  handsOn: {
    headline: string;
    title: string;
    subtitle: string;
    body: string;
    cards: Array<{
      title: string;
      subtitle?: string;
      lines: string[];
      image: ReplaceableAsset;
    }>;
  };
  narrativeIntro: string;
  capabilitiesHeading: string;
  capabilities: Array<{
    title: string;
    note: string;
  }>;
  selectedWorkHeading: string;
  selectedWork: Array<{
    title: string;
    index: string;
    description: string;
    image: ReplaceableAsset;
  }>;
  cv: {
    access: {
      codeError: string;
      inputLabel: string;
      unlockButton: string;
    };
    heading: string;
    files: Array<{
      label: string;
      href: string;
    }>;
  };
  contact: {
    email: string;
    area: string;
    linkedIn: string;
    linkedInLabel: string;
    cta: string;
  };
};
