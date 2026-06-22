export type LanguageCode = 'en' | 'fr' | 'kr';

export type LanguageOption = {
  code: LanguageCode;
  label: string;
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
  };
  ui: {
    languageSwitcherLabel: string;
    languages: LanguageOption[];
    nav: {
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
  }>;
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
  }>;
  cv: {
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
