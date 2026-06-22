import type { ProfileContent } from './types';

export const kr = {
  lang: 'kr',
  htmlLang: 'ko',
  nameParts: ['JUNG', 'KWANG', 'SOO'],
  brandName: 'Jung Kwang Soo',
  location: '한국 ↔ 프랑스',
  discipline: '제품 개발 운영 · 리테일 마케팅 · 이커머스 구축 및 실행',
  quote:
    '제품은 아이디어만으로 시장에서 살아남지 못합니다. 구조, 타이밍, 사람, 그리고 현지 이해가 필요합니다.',
  summary:
    '제품과 브랜드가 시장에서 실제로 구현되는 과정을 만들고 운영합니다.',
  positioningStatement:
    '제품, 브랜드, 시장 실행이 만나는 지점. 제가 일합니다.',
  heroVisual: {
    meta: '서울 / 파리',
    marker: '01',
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
      profile: '프로필',
      work: '작업',
      contact: '연락',
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
    },
    {
      number: '02',
      title: '프랑스 시장 구매·운영',
      company: 'ORCOM Europe',
      lines: [
        '현지 요구와 공급 네트워크 사이를 연결했습니다.',
        '거리, 언어, 일정의 복잡도를 운영 가능한 흐름으로 바꿨습니다.',
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
    },
    {
      number: '04',
      title: '리테일 마케팅·제품 커뮤니케이션',
      company: 'HSAD-GIIR / LG 관련 프로젝트',
      lines: [
        '런칭 메시지와 매장 디스플레이를 연결했습니다.',
        '제작 파트너와 현장 조건을 함께 조율했습니다.',
      ],
    },
  ],
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
    },
    {
      title: 'Shopify 다국어 운영',
      index: 'B',
      description:
        '스토어 구조, 상품 정보, 현지화 콘텐츠를 시장에 맞게 관리했습니다.',
    },
    {
      title: '제품 개발 & 소싱',
      index: 'C',
      description:
        '컨셉 정리부터 공급 파트너 조율까지 품질과 적합성을 함께 보았습니다.',
    },
    {
      title: '브랜드, 공간 & 제작 조율',
      index: 'D',
      description:
        '크리에이티브 방향, 물리적 조건, 실행 팀 사이의 연결을 만들었습니다.',
    },
  ],
  cv: {
    heading: '원하는 언어의 CV를 다운로드하실 수 있습니다.',
    files: [
      { label: '국문 CV', href: '/cv/Jung_Kwang_Soo_CV_KR.pdf' },
      { label: '영문 CV', href: '/cv/Jung_Kwang_Soo_CV_EN.pdf' },
      { label: '불문 CV', href: '/cv/Jung_Kwang_Soo_CV_FR.pdf' },
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
