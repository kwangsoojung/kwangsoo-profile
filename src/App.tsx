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
import { Section } from './components/Section';
import { profile } from './content/profile';

const capabilityIcons = [PenLine, Store, Boxes, ShoppingBag, Route, ArrowUpRight];

function HeroVisual() {
  return (
    <div className="relative min-h-[24rem] overflow-hidden border border-line bg-ivory-50/45 p-5 sm:min-h-[32rem] lg:min-h-[42rem]">
      <div className="absolute inset-x-0 top-1/2 h-px bg-line" />
      <div className="absolute inset-y-0 left-1/2 w-px bg-line" />
      <div className="absolute left-6 top-6 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-ink-500/75">
        Seoul / Paris
      </div>
      <div className="absolute bottom-6 right-6 text-right font-display text-5xl font-medium leading-none text-brand-700 sm:text-7xl">
        01
      </div>
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 520 680"
        fill="none"
      >
        <path
          d="M78 540C154 398 202 188 372 132"
          stroke="#8F1D1D"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M126 120H414V418H126V120Z"
          stroke="rgba(9,8,7,.3)"
          strokeWidth="1"
        />
        <path
          d="M176 170H364V370H176V170Z"
          stroke="rgba(9,8,7,.18)"
          strokeWidth="1"
        />
        <circle cx="372" cy="132" r="62" stroke="#8F1D1D" strokeWidth="1.5" />
        <circle cx="116" cy="552" r="84" stroke="rgba(9,8,7,.22)" strokeWidth="1" />
        <path
          d="M270 0V680M0 334H520"
          stroke="rgba(9,8,7,.09)"
          strokeWidth="1"
        />
      </svg>
      <div className="absolute left-[18%] top-[28%] h-28 w-28 rounded-full border border-brand-700/70" />
      <div className="absolute right-[18%] top-[42%] h-40 w-24 border border-ink-950/20 bg-ivory-100/45" />
      <div className="absolute bottom-[18%] left-[28%] h-3 w-40 bg-brand-700" />
    </div>
  );
}

function WorkVisual({ index }: { index: string }) {
  return (
    <div className="relative h-44 overflow-hidden border-b border-line bg-ivory-100/35">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(9,8,7,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(9,8,7,.08)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute left-5 top-5 font-display text-6xl font-medium text-brand-700">
        {index}
      </div>
      <div className="absolute bottom-5 right-5 h-24 w-24 rounded-full border border-ink-950/25" />
      <div className="absolute bottom-12 right-16 h-px w-40 rotate-[-24deg] bg-brand-700" />
      <div className="absolute right-10 top-8 h-16 w-28 border border-ink-950/20" />
    </div>
  );
}

function App() {
  return (
    <main className="min-h-screen text-ink-950">
      <header className="border-b border-line">
        <Container className="flex min-h-16 items-center justify-between gap-6 py-4">
          <a
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.24em] text-ink-950"
          >
            Jung Kwang Soo
          </a>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.18em] text-ink-700 md:flex"
          >
            <a className="transition-colors hover:text-brand-700" href="#profile">
              Profile
            </a>
            <a className="transition-colors hover:text-brand-700" href="#work">
              Work
            </a>
            <a className="transition-colors hover:text-brand-700" href="#contact">
              Contact
            </a>
          </nav>
        </Container>
      </header>

      <section className="border-b border-line py-10 sm:py-14 lg:min-h-[calc(100vh-4rem)] lg:py-12">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,34vw)] lg:items-stretch">
            <div className="flex min-h-[34rem] flex-col justify-between border-l border-line pl-5 sm:min-h-[42rem] sm:pl-8 lg:min-h-[calc(100vh-10rem)]">
              <div>
                <p className="text-base font-bold uppercase tracking-[0.18em] text-brand-700 sm:text-lg">
                  {profile.location}
                </p>
                <h1 className="mt-12 font-display text-[clamp(5rem,20vw,15rem)] font-medium uppercase leading-[0.72] tracking-[-0.05em] text-ink-950 sm:mt-14 lg:mt-16">
                  {profile.nameParts.map((part) => (
                    <span key={part} className="block">
                      {part}
                    </span>
                  ))}
                </h1>
              </div>
              <div className="grid gap-7 border-t border-line pt-7 lg:grid-cols-[minmax(0,1fr)_18rem]">
                <div>
                  <p className="max-w-3xl text-2xl font-semibold leading-tight text-brand-700 sm:text-4xl">
                    {profile.discipline}
                  </p>
                  <blockquote className="mt-5 max-w-2xl font-display text-2xl font-medium leading-tight text-ink-950 sm:text-3xl">
                    “{profile.quote}”
                  </blockquote>
                </div>
                <div className="flex flex-wrap items-end gap-3 lg:justify-end">
                  <Button href="#profile" variant="primary">
                    View Profile
                    <ArrowDown aria-hidden="true" size={17} strokeWidth={1.8} />
                  </Button>
                  <Button href="#cv" variant="secondary">
                    Download CV
                  </Button>
                </div>
              </div>
            </div>
            <HeroVisual />
          </div>
        </Container>
      </section>

      <Section id="profile" className="py-16 sm:py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(18rem,0.58fr)]">
            <div>
              <Eyebrow>Positioning</Eyebrow>
              <h2 className="mt-6 max-w-5xl font-display text-5xl font-medium leading-[0.96] tracking-tight text-ink-950 sm:text-7xl">
                “{profile.positioningStatement}”
              </h2>
            </div>
            <div className="self-end">
              <p className="max-w-md text-lg leading-8 text-ink-700">{profile.summary}</p>
              <div className="mt-9 grid gap-0 border-t border-line">
                {profile.pillars.map((pillar) => (
                  <article key={pillar.title} className="border-b border-line py-5">
                    <h3 className="text-lg font-semibold text-ink-950">{pillar.title}</h3>
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
              <Eyebrow>Career Narrative</Eyebrow>
              <p className="mt-6 max-w-xs font-display text-3xl font-medium leading-tight text-ink-950">
                Four chapters shaped by objects, markets and momentum.
              </p>
            </div>
            <div className="grid gap-0 border-t border-line">
              {profile.chapters.map((chapter) => (
                <article
                  key={chapter.number}
                  className="grid gap-6 border-b border-line py-8 md:grid-cols-[7rem_minmax(0,1fr)_minmax(10rem,15rem)]"
                >
                  <span className="font-display text-6xl font-medium leading-none text-brand-700">
                    {chapter.number}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl font-medium leading-tight text-ink-950 sm:text-4xl">
                      {chapter.title}
                    </h3>
                    <div className="mt-5 space-y-2 text-base leading-7 text-ink-700">
                      {chapter.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-500 md:text-right">
                    {chapter.company}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="capabilities" className="overflow-hidden">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
            <div>
              <Eyebrow>Capabilities</Eyebrow>
              <h2 className="mt-5 font-display text-5xl font-medium leading-none tracking-tight text-ink-950 sm:text-6xl">
                Practical range, held together by taste.
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
                      {capability.title}
                    </h3>
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
            <Eyebrow>Selected Work</Eyebrow>
            <h2 className="max-w-4xl font-display text-5xl font-medium leading-none tracking-tight text-ink-950 sm:text-6xl">
              Selected work as operating scenes, not trophies.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {profile.selectedWork.map((work, index) => (
              <article
                key={work.title}
                className={`overflow-hidden border border-line ${
                  index === 1 || index === 2 ? 'md:translate-y-10' : ''
                }`}
              >
                <WorkVisual index={work.index} />
                <div className="p-6 sm:p-8">
                  <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                    Case {work.index}
                  </p>
                  <h3 className="font-display text-3xl font-medium leading-tight text-ink-950 sm:text-4xl">
                    {work.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-7 text-ink-700">
                    {work.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="cv" className="pt-24 sm:pt-32">
        <Container>
          <div className="border-y border-line py-10 sm:py-14">
            <div className="grid gap-9 lg:grid-cols-[minmax(0,0.8fr)_minmax(18rem,0.5fr)] lg:items-end">
              <div>
                <Eyebrow>CV Download</Eyebrow>
                <h2 className="mt-5 max-w-3xl font-display text-5xl font-medium leading-none tracking-tight text-ink-950 sm:text-6xl">
                  Documents are ready for three reading contexts.
                </h2>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                {profile.cvFiles.map((cv) => (
                  <Button key={cv.label} href={cv.href} variant="secondary">
                    <Download aria-hidden="true" size={17} strokeWidth={1.8} />
                    {cv.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="contact" className="pb-20 sm:pb-24 lg:pb-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,0.5fr)]">
            <div>
              <Eyebrow>Contact</Eyebrow>
              <h2 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[0.98] tracking-tight text-ink-950 sm:text-7xl">
                {profile.contact.cta}
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
                  Email
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
                  LinkedIn
                </p>
                <p className="mt-2 break-words text-lg font-semibold text-ink-950 group-hover:text-brand-700">
                  jungkwangsoo
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
                  Location
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
