import type { ProfileContent } from './types';

export const kr = {
  lang: 'kr',
  htmlLang: 'ko',
  nameParts: ['JUNG', 'KWANG', 'SOO'],
  brandName: 'Jung Kwang Soo',
  location: 'Korea ↔ France ↔ Europe',
  discipline: '제품 개발 운영 · 리테일 마케팅 · 이커머스 구축 및 실행',
  quote:
    '제품은 아이디어만으로 시장에서 살아남지 못합니다. 구조, 타이밍, 사람, 그리고 현지 이해가 필요합니다.',
  summary:
    '제품과 브랜드가 시장에서 실제로 구현되는 과정을 만들고 운영합니다.',
  positioningStatement:
    '제품, 브랜드, 시장 실행이 만나는 지점. 제가 일합니다.',
  heroVisual: {
    meta: 'Seoul / Paris / Europe',
    marker: '01',
    background: {
      src: '/images/hero/hero-background.png',
      alt: '정광수 프로필을 위한 추상 배경 이미지',
      fallback: 'Editorial background',
    },
    portrait: {
      src: '/images/hero/portrait-cutout.png',
      alt: '정광수 프로필 사진',
      fallback: 'Portrait asset pending',
    },
  },
  mapVisual: {
    origin: 'KR',
    destination: 'FR',
  },
  ui: {
    languageSwitcherLabel: '언어',
    languages: [
      { code: 'en', label: 'EN' },
      { code: 'fr', label: 'FR' },
      { code: 'kr', label: 'KR' },
    ],
    nav: {
      cv: 'CV',
      profile: '프로필',
      work: '주요 작업',
      contact: '문의',
    },
    cta: {
      viewProfile: '프로필 보기',
      downloadCv: 'CV 다운로드',
    },
    sections: {
      positioning: '포지셔닝',
      narrative: '커리어 흐름',
      capabilities: '역량',
      selectedWork: '주요 작업',
      cv: 'CV 다운로드',
      contact: '연락',
    },
    caseLabel: '작업',
    contactLabels: {
      email: '이메일',
      linkedIn: 'LinkedIn',
      location: '위치',
    },
  },
  pillars: [
    {
      title: '제품 운영',
      description: '구성, 소싱, 일정이 실제로 움직이도록 정리합니다.',
    },
    {
      title: '리테일 마케팅',
      description: '공간과 런칭 현장에서 브랜드 이야기를 명확하게 만듭니다.',
    },
    {
      title: '이커머스 실행',
      description: '언어와 시장이 달라도 스토어의 기준을 유지합니다.',
    },
  ],
  narrativeIntro: '사물, 시장, 실행 사이에서 쌓아온 네 개의 장면.',
  chapters: [
    {
      number: '01',
      title: '제품·가구 개발',
      company: 'EMONS / LBF',
      lines: [
        '아이디어를 실제 제품군으로 구체화했습니다.',
        '소재, 소싱, 사용성을 함께 보며 균형을 잡았습니다.',
      ],
      logos: [
        {
          src: '/images/logos/emons.png',
          alt: 'EMONS 로고',
          fallback: 'EMONS',
        },
        {
          src: '/images/logos/lbf.png',
          alt: 'LBF 로고',
          fallback: 'LBF',
        },
      ],
    },
    {
      number: '02',
      title: '프랑스 시장 구매·운영',
      company: 'ORCOM Europe',
      lines: [
        '현지 요구와 공급 네트워크 사이를 연결했습니다.',
        '거리, 언어, 일정의 복잡도를 운영 가능한 흐름으로 바꿨습니다.',
      ],
      logos: [
        {
          src: '/images/logos/orcom.png',
          alt: 'ORCOM Europe 로고',
          fallback: 'ORCOM',
        },
      ],
    },
    {
      number: '03',
      title: '이커머스·브랜드 운영',
      company: 'ACE FOOD',
      lines: [
        '스토어 구조와 상품 정보를 정리했습니다.',
        '온라인 구매 과정에서 브랜드가 일관되게 보이도록 운영했습니다.',
      ],
      logos: [
        {
          src: '/images/logos/ace-food.png',
          alt: 'ACE FOOD 로고',
          fallback: 'ACE FOOD',
        },
      ],
    },
    {
      number: '04',
      title: '리테일 마케팅·제품 커뮤니케이션',
      company: 'HSAD-GIIR / LG 관련 프로젝트',
      lines: [
        '런칭 메시지와 매장 디스플레이를 연결했습니다.',
        '제작 파트너와 현장 조건을 함께 조율했습니다.',
      ],
      logos: [
        {
          src: '/images/logos/hsad-giir.png',
          alt: 'HSAD-GIIR 로고',
          fallback: 'HSAD-GIIR',
        },
      ],
    },
  ],
  handsOn: {
    headline: '프로젝트 밖에서 직접 운영한 경험',
    title: 'BUILT, RAN, LEARNED',
    subtitle: '직접 만들고, 운영하고, 배운 것들',
    body:
      '회사 프로젝트는 구조를 가르쳐주었고, 직접 운영한 사업은 현실을 가르쳐주었습니다. 프랑스에서 목공 제작과 레지던스 운영을 경험하며, 아이디어가 고객, 비용, 시간, 유지보수, 매일의 판단과 어떻게 만나는지 배웠습니다.',
    cards: [
      {
        title: 'Woodworking Studio Operations',
        subtitle: '목공소 운영',
        lines: [
          '맞춤 제작, 소재 검토, 견적, 제작 일정, 납품 후속 관리',
          '디자인 의도와 실제 제작 조건 사이를 연결한 경험',
        ],
        image: {
          src: '/images/work/woodworking-studio.png',
          alt: '목공 제작 운영 이미지',
          fallback: 'Woodworking studio',
        },
      },
      {
        title: 'Residence & Hospitality Operations',
        subtitle: '레지던스 운영',
        lines: [
          'Paris Noble Residence 운영: 예약, 고객 응대, 체크인/아웃, 시설 관리와 서비스 품질',
          '고객 경험, 유지보수, 시간 관리, 운영 책임을 매일 이해한 경험',
        ],
        image: {
          src: '/images/work/residence-operations.png',
          alt: '레지던스 운영 이미지',
          fallback: 'Residence operations',
        },
      },
    ],
  },
  capabilitiesHeading: '감각과 운영을 함께 다루는 실무 범위.',
  capabilities: [
    { title: '제품 커뮤니케이션', note: '제안의 구조' },
    { title: '리테일 마케팅', note: '공간, 진열, 런칭' },
    { title: '비즈니스 운영', note: '프로세스와 일정' },
    { title: '이커머스 운영', note: '스토어 기준' },
    { title: '크로스보더 조율', note: '한국-프랑스 리듬' },
    { title: '디자인·제품 감각', note: '절제된 디테일' },
  ],
  selectedWorkHeading: '결과보다, 일이 실제로 움직인 장면들.',
  selectedWork: [
    {
      title: '리테일 디스플레이 & 제품 커뮤니케이션',
      index: 'A',
      description:
        '매장 안에서 제품의 가치가 빠르게 이해되도록 이야기와 디테일을 정리했습니다.',
      image: {
        src: '/images/work/retail-display.png',
        alt: '리테일 디스플레이와 제품 커뮤니케이션 작업 이미지',
        fallback: 'Retail display',
      },
    },
    {
      title: 'Shopify 다국어 운영',
      index: 'B',
      description:
        '스토어 구조, 상품 정보, 현지화 콘텐츠를 시장에 맞게 관리했습니다.',
      image: {
        src: '/images/work/ecommerce-operations.png',
        alt: '이커머스 운영 작업 이미지',
        fallback: 'E-commerce operations',
      },
    },
    {
      title: '제품 개발 & 소싱',
      index: 'C',
      description:
        '컨셉 정리부터 공급 파트너 조율까지 품질과 적합성을 함께 보았습니다.',
      image: {
        src: '/images/work/product-development.png',
        alt: '제품 개발과 소싱 작업 이미지',
        fallback: 'Product development',
      },
    },
    {
      title: '브랜드, 공간 & 제작 조율',
      index: 'D',
      description:
        '크리에이티브 방향, 물리적 조건, 실행 팀 사이의 연결을 만들었습니다.',
      image: {
        src: '/images/work/brand-space-production.png',
        alt: '브랜드, 공간, 제작 조율 작업 이미지',
        fallback: 'Brand and space',
      },
    },
  ],
  cv: {
    access: {
      codeError: '코드가 올바르지 않습니다. 다시 시도해주세요.',
      inputLabel: '접근 코드를 입력하세요',
      unlockButton: 'CV 열기',
    },
    heading: '원하는 언어의 CV를 다운로드하실 수 있습니다.',
    files: [
      { label: '한국어 CV 다운로드', href: '/cv/Jung_Kwang_Soo_CV_KR.pdf' },
      { label: '영어 CV 다운로드', href: '/cv/Jung_Kwang_Soo_CV_EN.pdf' },
      { label: '프랑스어 CV 다운로드', href: '/cv/Jung_Kwang_Soo_CV_FR.pdf' },
    ],
  },
  contact: {
    email: 'jungkwangsoo.paris@gmail.com',
    area: '프랑스 파리 인근',
    linkedIn: 'https://www.linkedin.com/in/jungkwangsoo/',
    linkedInLabel: 'jungkwangsoo',
    cta: '제품, 리테일, 이커머스, 한국-프랑스 협업 관련 기회를 열어두고 있습니다.',
  },
} satisfies ProfileContent;
