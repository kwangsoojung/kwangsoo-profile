import { useEffect, useState, type FormEvent } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Boxes,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  PenLine,
  Route,
  ShoppingBag,
  Store,
} from 'lucide-react';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Eyebrow } from './components/Eyebrow';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { LogoImage } from './components/LogoImage';
import { Section } from './components/Section';
import {
  EcommerceInterfaceVisual,
  HeroVisual,
  KoreaFranceMapVisual,
  ProductSketchVisual,
  RetailGridVisual,
  WorkImageVisual,
} from './components/visuals';
import { en } from './content/en';
import { fr } from './content/fr';
import { kr } from './content/kr';
import type { LanguageCode, ProfileContent } from './content/types';

const capabilityIcons = [PenLine, Store, Boxes, ShoppingBag, Route, ArrowUpRight];
const chapterVisuals = [
  ProductSketchVisual,
  KoreaFranceMapVisual,
  EcommerceInterfaceVisual,
  RetailGridVisual,
];
const workVisuals = [
  RetailGridVisual,
  EcommerceInterfaceVisual,
  ProductSketchVisual,
  KoreaFranceMapVisual,
];
const contentByLanguage: Record<LanguageCode, ProfileContent> = { en, fr, kr };
const cvAccessCode = 'JKS2026';
const cvUnlockStorageKey = 'kwangsoo-cv-unlocked';
const languageStorageKey = 'kwangsoo-profile-language';

function isLanguageCode(value: string | null): value is LanguageCode {
  return value === 'en' || value === 'fr' || value === 'kr';
}

function TitleWithSupport({
  className,
  primary,
  support,
  supportClassName = '',
}: {
  className: string;
  primary: string;
  support?: string;
  supportClassName?: string;
}) {
  return (
    <span className="block">
      <span className={className}>{primary}</span>
      {support ? (
        <span
          className={`mt-4 block font-sans text-base font-medium leading-7 tracking-normal text-ink-700 sm:text-lg ${supportClassName}`}
        >
          {support}
        </span>
      ) : null}
    </span>
  );
}

function App() {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    if (typeof window === 'undefined') {
      return 'en';
    }

    const storedLanguage = window.localStorage.getItem(languageStorageKey);
    return isLanguageCode(storedLanguage) ? storedLanguage : 'en';
  });
  const [cvAccessError, setCvAccessError] = useState(false);
  const [cvCode, setCvCode] = useState('');
  const [isCvUnlocked, setIsCvUnlocked] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.sessionStorage.getItem(cvUnlockStorageKey) === 'true';
  });
  const [isHeaderCompact, setIsHeaderCompact] = useState(false);
  const profile = contentByLanguage[language];
  const isKorean = language === 'kr';
  const displayProfile = isKorean ? en : profile;

  useEffect(() => {
    window.localStorage.setItem(languageStorageKey, language);
    document.documentElement.lang = profile.htmlLang;
  }, [language, profile.htmlLang]);

  useEffect(() => {
    const updateHeader = () => {
      setIsHeaderCompact(window.scrollY > 24);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  function handleCvUnlock(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (cvCode.trim() === cvAccessCode) {
      window.sessionStorage.setItem(cvUnlockStorageKey, 'true');
      setIsCvUnlocked(true);
      setCvAccessError(false);
      return;
    }

    setCvAccessError(true);
  }

  return (
    <main className="min-h-screen text-ink-950" lang={profile.htmlLang}>
      <header className="sticky top-0 z-50 border-b border-line bg-ivory-50/82 backdrop-blur-md transition-colors duration-300">
        <Container
          className={`flex items-center justify-between gap-4 transition-[min-height,padding] duration-300 ${
            isHeaderCompact ? 'min-h-14 py-2' : 'min-h-16 py-4'
          }`}
        >
          <a
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.24em] text-ink-950"
          >
            {profile.brandName}
          </a>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.18em] text-ink-700 md:flex"
          >
            <a className="transition-colors hover:text-brand-700" href="#profile">
              {profile.ui.nav.profile}
            </a>
            <a className="transition-colors hover:text-brand-700" href="#work">
              {profile.ui.nav.work}
            </a>
            <a className="transition-colors hover:text-brand-700" href="#cv">
              {profile.ui.nav.cv}
            </a>
            <a className="transition-colors hover:text-brand-700" href="#contact">
              {profile.ui.nav.contact}
            </a>
          </nav>
          <LanguageSwitcher
            ariaLabel={profile.ui.languageSwitcherLabel}
            options={profile.ui.languages}
            selectedLanguage={language}
            onLanguageChange={setLanguage}
          />
        </Container>
      </header>

      <section className="relative overflow-hidden border-b border-line py-10 sm:py-14 lg:min-h-[calc(100vh-4rem)] lg:py-12">
        <Container>
          <div className="relative">
            <div className="relative z-30 flex min-h-[36rem] flex-col justify-between border-l border-line pl-5 sm:min-h-[44rem] sm:pl-8 lg:min-h-[calc(100vh-10rem)]">
              <div className="relative">
                <p className="text-base font-bold uppercase tracking-[0.18em] text-brand-700 sm:text-lg">
                  {profile.location}
                </p>
                <h1 className="relative z-0 mt-12 max-w-none font-display text-[clamp(4.7rem,18vw,14.5rem)] font-medium uppercase leading-[0.88] tracking-[-0.05em] text-ink-950 sm:mt-14 sm:text-[clamp(7rem,18vw,14.5rem)] lg:mt-16 lg:w-[calc(100%+min(20vw,18rem))]">
                  {displayProfile.nameParts.map((part) => (
                    <span key={part} className="block whitespace-nowrap">
                      {part}
                    </span>
                  ))}
                </h1>
              </div>
              <HeroVisual
                className="z-10 mx-auto my-10 lg:absolute lg:bottom-0 lg:right-[clamp(2.5rem,8vw,8.75rem)] lg:my-0 lg:min-h-0 lg:w-[clamp(560px,46vw,780px)]"
                visual={profile.heroVisual}
              />
              <div className="relative z-40 max-w-2xl pt-7">
                <div>
                  <p className="max-w-3xl text-2xl font-semibold leading-tight text-brand-700 sm:text-4xl">
                    {displayProfile.discipline}
                  </p>
                  {isKorean ? (
                    <p className="mt-3 max-w-3xl text-sm font-medium leading-7 text-ink-700 sm:text-base">
                      {profile.discipline}
                    </p>
                  ) : null}
                  <blockquote className="mt-5 max-w-2xl font-display text-2xl font-medium leading-tight text-ink-950 sm:text-3xl">
                    “{profile.quote}”
                  </blockquote>
                </div>
                <div className="relative z-50 mt-8 flex flex-wrap items-center gap-3 lg:ml-[clamp(1.5rem,4vw,5rem)]">
                  <Button href="#profile" variant="primary">
                    {profile.ui.cta.viewProfile}
                    <ArrowDown aria-hidden="true" size={17} strokeWidth={1.8} />
                  </Button>
                  <Button href="#cv" variant="secondary">
                    {profile.ui.cta.downloadCv}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section id="profile" className="py-16 sm:py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(18rem,0.58fr)]">
            <div>
              <Eyebrow>{profile.ui.sections.positioning}</Eyebrow>
              <h2 className="mt-6 max-w-5xl font-display text-5xl font-medium leading-[0.96] tracking-tight text-ink-950 sm:text-7xl">
                <TitleWithSupport
                  className="block"
                  primary={`“${displayProfile.positioningStatement}”`}
                  support={isKorean ? `“${profile.positioningStatement}”` : undefined}
                />
              </h2>
            </div>
            <div className="self-end">
              <p className="max-w-md text-lg leading-8 text-ink-700">{profile.summary}</p>
              <KoreaFranceMapVisual
                className="mt-9 h-64"
                destinationLabel={profile.mapVisual.destination}
                originLabel={profile.mapVisual.origin}
              />
              <div className="mt-9 grid gap-0 border-t border-line">
                {profile.pillars.map((pillar, index) => (
                  <article key={pillar.title} className="border-b border-line py-5">
                    <h3 className="text-lg font-semibold text-ink-950">
                      {isKorean ? displayProfile.pillars[index].title : pillar.title}
                    </h3>
                    {isKorean ? (
                      <p className="mt-2 text-sm font-medium leading-6 text-ink-700">
                        {pillar.title}
                      </p>
                    ) : null}
                    <p className="mt-2 text-sm leading-6 text-ink-500">
                      {pillar.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="narrative">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)]">
            <div>
              <Eyebrow>{profile.ui.sections.narrative}</Eyebrow>
              <p className="mt-6 max-w-xs font-display text-3xl font-medium leading-tight text-ink-950">
                <TitleWithSupport
                  className="block"
                  primary={displayProfile.narrativeIntro}
                  support={isKorean ? profile.narrativeIntro : undefined}
                  supportClassName="text-sm sm:text-base"
                />
              </p>
            </div>
            <div className="grid gap-0 border-t border-line">
              {profile.chapters.map((chapter, index) => {
                const ChapterVisual = chapterVisuals[index] ?? ProductSketchVisual;

                return (
                  <article
                    key={chapter.number}
                    className="grid gap-6 border-b border-line py-8 md:grid-cols-[7rem_minmax(0,1fr)_minmax(10rem,15rem)] xl:grid-cols-[7rem_minmax(0,1fr)_minmax(10rem,14rem)_13rem]"
                  >
                    <span className="font-display text-6xl font-medium leading-none text-brand-700">
                      {chapter.number}
                    </span>
                    <div>
                      <h3 className="font-display text-3xl font-medium leading-tight text-ink-950 sm:text-4xl">
                        <TitleWithSupport
                          className="block"
                          primary={displayProfile.chapters[index].title}
                          support={isKorean ? chapter.title : undefined}
                          supportClassName="text-sm sm:text-base"
                        />
                      </h3>
                      <div className="mt-5 space-y-2 text-base leading-7 text-ink-700">
                        {chapter.lines.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                    <div className="md:text-right">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-500">
                        {chapter.company}
                      </p>
                      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 md:justify-end">
                        {chapter.logos.map((logo) => (
                          <LogoImage key={logo.src} logo={logo} />
                        ))}
                      </div>
                    </div>
                    <ChapterVisual
                      className="h-40 md:col-span-3 xl:col-span-1"
                      destinationLabel={profile.mapVisual.destination}
                      marker={chapter.number}
                      originLabel={profile.mapVisual.origin}
                    />
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="built-ran-learned">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)]">
            <div>
              <Eyebrow>{profile.handsOn.title}</Eyebrow>
            </div>
            <div>
              <div className="grid gap-8 border-t border-line pt-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.55fr)]">
                <div>
                  <h2 className="font-display text-5xl font-medium leading-none tracking-tight text-ink-950 sm:text-6xl">
                    <TitleWithSupport
                      className="block"
                      primary={displayProfile.handsOn.headline}
                      support={
                        language === 'en'
                          ? displayProfile.handsOn.subtitle
                          : language === 'kr'
                            ? profile.handsOn.headline
                            : profile.handsOn.subtitle
                      }
                    />
                  </h2>
                </div>
                <p className="max-w-xl text-base leading-8 text-ink-700 lg:pt-2">
                  {profile.handsOn.body}
                </p>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {profile.handsOn.cards.map((card, index) => (
                  <article key={card.title} className="border-t border-line pt-6">
                    {/* Replace these files manually in /public/images/work when real business images are ready. */}
                    <WorkImageVisual
                      asset={card.image}
                      className="h-56 bg-ivory-50/30"
                      fallback={
                        <div className="relative h-full overflow-hidden bg-ivory-100/25">
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(9,8,7,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(9,8,7,.07)_1px,transparent_1px)] bg-[size:28px_28px]" />
                          <div className="absolute left-6 top-6 font-display text-5xl font-medium text-brand-700">
                            {index + 1}
                          </div>
                          <div className="absolute bottom-8 left-8 h-16 w-36 border border-ink-950/20 bg-ivory-50/30" />
                          <div className="absolute bottom-14 right-8 h-px w-36 rotate-[-18deg] bg-brand-700" />
                          <div className="absolute right-10 top-8 h-24 w-20 rounded-full border border-ink-950/20" />
                        </div>
                      }
                    />
                    <div className="pt-6">
                      <h3 className="font-display text-3xl font-medium leading-tight text-ink-950">
                        <TitleWithSupport
                          className="block"
                          primary={displayProfile.handsOn.cards[index].title}
                          support={card.subtitle}
                          supportClassName="text-sm sm:text-base"
                        />
                      </h3>
                      <div className="mt-5 space-y-3 text-sm leading-7 text-ink-700 sm:text-base">
                        {card.lines.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="capabilities" className="overflow-hidden">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
            <div>
              <Eyebrow>{profile.ui.sections.capabilities}</Eyebrow>
              <h2 className="mt-5 font-display text-5xl font-medium leading-none tracking-tight text-ink-950 sm:text-6xl">
                <TitleWithSupport
                  className="block"
                  primary={displayProfile.capabilitiesHeading}
                  support={isKorean ? profile.capabilitiesHeading : undefined}
                />
              </h2>
            </div>
            <div className="grid grid-cols-2 border-l border-t border-line md:grid-cols-3">
              {profile.capabilities.map((capability, index) => {
                const Icon = capabilityIcons[index] ?? ArrowUpRight;

                return (
                  <div
                    key={capability.title}
                    className="min-h-44 border-b border-r border-line p-5 sm:p-7"
                  >
                    <div className="mb-9 flex h-12 w-12 items-center justify-center rounded-full border border-brand-700/60 text-brand-700">
                      <Icon aria-hidden="true" size={19} strokeWidth={1.6} />
                    </div>
                    <h3 className="text-base font-semibold leading-tight text-ink-950 sm:text-lg">
                      {displayProfile.capabilities[index].title}
                    </h3>
                    {isKorean ? (
                      <p className="mt-2 text-sm font-medium leading-6 text-ink-700">
                        {capability.title}
                      </p>
                    ) : null}
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                      {capability.note}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="work">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:items-end">
            <Eyebrow>{profile.ui.sections.selectedWork}</Eyebrow>
            <h2 className="max-w-4xl font-display text-5xl font-medium leading-none tracking-tight text-ink-950 sm:text-6xl">
              <TitleWithSupport
                className="block"
                primary={displayProfile.selectedWorkHeading}
                support={isKorean ? profile.selectedWorkHeading : undefined}
              />
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {profile.selectedWork.map((work, index) => {
              const WorkFallbackVisual = workVisuals[index] ?? RetailGridVisual;

              return (
                <article
                  key={work.title}
                  className={`overflow-hidden border border-line ${
                    index === 1 || index === 2 ? 'md:translate-y-10' : ''
                  }`}
                >
                  <WorkImageVisual
                    asset={work.image}
                    fallback={
                      <WorkFallbackVisual
                        className="h-full border-0"
                        destinationLabel={profile.mapVisual.destination}
                        marker={work.index}
                        originLabel={profile.mapVisual.origin}
                      />
                    }
                  />
                  <div className="p-6 sm:p-8">
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                      {profile.ui.caseLabel} {work.index}
                    </p>
                  <h3 className="font-display text-3xl font-medium leading-tight text-ink-950 sm:text-4xl">
                    <TitleWithSupport
                      className="block"
                      primary={displayProfile.selectedWork[index].title}
                      support={isKorean ? work.title : undefined}
                      supportClassName="text-sm sm:text-base"
                    />
                  </h3>
                    <p className="mt-5 max-w-xl text-base leading-7 text-ink-700">
                      {work.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section id="cv" className="pt-24 sm:pt-32">
        <Container>
          <div className="border-y border-line py-10 sm:py-14">
            <div className="grid gap-9 lg:grid-cols-[minmax(0,0.8fr)_minmax(18rem,0.5fr)] lg:items-end">
              <div>
                <Eyebrow>{profile.ui.sections.cv}</Eyebrow>
                <h2 className="mt-5 max-w-3xl font-display text-5xl font-medium leading-none tracking-tight text-ink-950 sm:text-6xl">
                  <TitleWithSupport
                    className="block"
                    primary={displayProfile.cv.heading}
                    support={isKorean ? profile.cv.heading : undefined}
                  />
                </h2>
              </div>
              {isCvUnlocked ? (
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  {profile.cv.files.map((cv) => (
                    <Button key={cv.label} href={cv.href} variant="secondary">
                      <Download aria-hidden="true" size={17} strokeWidth={1.8} />
                      {cv.label}
                    </Button>
                  ))}
                </div>
              ) : (
                <form
                  className="flex w-full max-w-md flex-col gap-3 lg:ml-auto"
                  onSubmit={handleCvUnlock}
                >
                  <input
                    aria-label={profile.cv.access.inputLabel}
                    className="min-h-12 rounded-full border border-line bg-ivory-50/70 px-5 text-sm font-medium text-ink-950 outline-none transition-colors placeholder:text-ink-500 focus:border-brand-700"
                    onChange={(event) => {
                      setCvCode(event.target.value);
                      setCvAccessError(false);
                    }}
                    placeholder={profile.cv.access.inputLabel}
                    type="password"
                    value={cvCode}
                  />
                  <div className="flex flex-wrap items-center gap-3">
                    <Button type="submit" variant="primary">
                      {profile.cv.access.unlockButton}
                    </Button>
                    {cvAccessError ? (
                      <p className="text-sm font-medium text-brand-700">
                        {profile.cv.access.codeError}
                      </p>
                    ) : null}
                  </div>
                </form>
              )}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="contact" className="pb-20 sm:pb-24 lg:pb-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,0.5fr)]">
            <div>
              <Eyebrow>{profile.ui.sections.contact}</Eyebrow>
              <h2 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[0.98] tracking-tight text-ink-950 sm:text-7xl">
                <TitleWithSupport
                  className="block"
                  primary={displayProfile.contact.cta}
                  support={isKorean ? profile.contact.cta : undefined}
                />
              </h2>
            </div>
            <div className="self-end border-t border-line pt-7">
              <a
                href={`mailto:${profile.contact.email}`}
                className="group block border-b border-line pb-6"
              >
                <Mail
                  aria-hidden="true"
                  className="mb-5 text-brand-700"
                  size={21}
                  strokeWidth={1.7}
                />
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-500">
                  {profile.ui.contactLabels.email}
                </p>
                <p className="mt-2 break-words text-xl font-semibold text-ink-950 group-hover:text-brand-700">
                  {profile.contact.email}
                </p>
              </a>
              <a
                href={profile.contact.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="group block border-b border-line py-6"
              >
                <ExternalLink
                  aria-hidden="true"
                  className="mb-5 text-brand-700"
                  size={21}
                  strokeWidth={1.7}
                />
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-500">
                  {profile.ui.contactLabels.linkedIn}
                </p>
                <p className="mt-2 break-words text-lg font-semibold text-ink-950 group-hover:text-brand-700">
                  {profile.contact.linkedInLabel}
                </p>
              </a>
              <div className="py-6">
                <MapPin
                  aria-hidden="true"
                  className="mb-5 text-brand-700"
                  size={21}
                  strokeWidth={1.7}
                />
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-500">
                  {profile.ui.contactLabels.location}
                </p>
                <p className="mt-2 text-xl font-semibold text-ink-950">
                  {profile.contact.area}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

export default App;
