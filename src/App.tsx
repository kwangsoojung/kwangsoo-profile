import {
  ArrowUpRight,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Network,
} from 'lucide-react';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Eyebrow } from './components/Eyebrow';
import { Section } from './components/Section';
import { profile } from './content/profile';

function App() {
  return (
    <main className="min-h-screen text-ink-950">
      <header className="border-b border-line">
        <Container className="flex min-h-20 items-center justify-between gap-6 py-5">
          <a
            href="/"
            className="font-display text-2xl font-medium tracking-tight text-ink-950"
          >
            Jung Kwang Soo
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-6 text-sm font-semibold text-ink-700 md:flex">
            <a className="transition-colors hover:text-brand-700" href="#work">
              Work
            </a>
            <a className="transition-colors hover:text-brand-700" href="#cv">
              CV
            </a>
            <a className="transition-colors hover:text-brand-700" href="#contact">
              Contact
            </a>
          </nav>
        </Container>
      </header>

      <Section className="border-t-0 py-20 sm:py-24 lg:min-h-[calc(100vh-5rem)] lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
            <div>
              <Eyebrow>{profile.location}</Eyebrow>
              <h1 className="mt-7 max-w-5xl font-display text-6xl font-medium leading-[0.88] tracking-tight text-ink-950 sm:text-8xl lg:text-[8.5rem]">
                {profile.name}
              </h1>
              <p className="mt-8 max-w-4xl text-2xl font-semibold leading-tight text-brand-700 sm:text-4xl">
                {profile.discipline}
              </p>
            </div>
            <aside className="border-t border-line pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-500">
                {profile.positioning}
              </p>
              <blockquote className="mt-6 font-display text-3xl font-medium leading-tight text-ink-950">
                “{profile.quote}”
              </blockquote>
              <p className="mt-6 text-base leading-8 text-ink-700">{profile.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="#work" variant="primary">
                  View work
                  <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.8} />
                </Button>
                <Button href="#contact" variant="ghost">
                  Contact
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <Section id="positioning">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[20rem_minmax(0,1fr)]">
            <div>
              <Eyebrow>Positioning</Eyebrow>
            </div>
            <div className="max-w-5xl">
              <h2 className="font-display text-4xl font-medium leading-tight text-ink-950 sm:text-6xl">
                “{profile.positioningStatement}”
              </h2>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-ink-700">
                {profile.positioningCopy}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="timeline">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[20rem_minmax(0,1fr)]">
            <div>
              <Eyebrow>Career Narrative</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-ink-950 sm:text-5xl">
                Four chapters, one operating instinct.
              </h2>
            </div>
            <div className="border-t border-line">
              {profile.timeline.map((item) => (
                <article
                  key={item.number}
                  className="grid gap-5 border-b border-line py-8 md:grid-cols-[5rem_minmax(0,1fr)_14rem]"
                >
                  <span className="font-display text-4xl font-medium text-brand-700">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold leading-tight text-ink-950">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-ink-700">
                      {item.description}
                    </p>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-500 md:text-right">
                    {item.company}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="capabilities">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[20rem_minmax(0,1fr)]">
            <div>
              <Eyebrow>Capabilities</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-ink-950 sm:text-5xl">
                Useful across the journey from idea to market.
              </h2>
            </div>
            <div className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-3">
              {profile.capabilities.map((capability, index) => (
                <div
                  key={capability}
                  className={`min-h-36 border-b border-line py-7 sm:px-7 ${
                    index % 2 === 0 ? 'sm:border-r' : ''
                  } ${index % 3 !== 2 ? 'lg:border-r' : 'lg:border-r-0'}`}
                >
                  <Network
                    aria-hidden="true"
                    className="mb-8 text-brand-700"
                    size={20}
                    strokeWidth={1.7}
                  />
                  <h3 className="text-xl font-semibold leading-tight text-ink-950">
                    {capability}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="work">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[20rem_minmax(0,1fr)]">
            <div>
              <Eyebrow>Selected Work</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-ink-950 sm:text-5xl">
                Work made visible through systems, stores and stories.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {profile.selectedWork.map((work) => (
                <article
                  key={work.title}
                  className="border border-line bg-ivory-50/40 p-6 sm:p-8"
                >
                  <h3 className="font-display text-3xl font-medium leading-tight text-ink-950">
                    {work.title}
                  </h3>
                  <p className="mt-5 text-base leading-7 text-ink-700">
                    {work.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="cv">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[20rem_minmax(0,1fr)]">
            <div>
              <Eyebrow>CV Download</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-ink-950 sm:text-5xl">
                Three versions are prepared for the next content pass.
              </h2>
            </div>
            <div className="flex flex-wrap items-start gap-4 border-t border-line pt-8">
              {profile.cvFiles.map((cv) => (
                <Button key={cv.label} href={cv.href} variant="secondary">
                  <Download aria-hidden="true" size={17} strokeWidth={1.8} />
                  {cv.label}
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="contact" className="pb-20 sm:pb-24 lg:pb-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[20rem_minmax(0,1fr)]">
            <div>
              <Eyebrow>Contact</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-ink-950 sm:text-5xl">
                Open to conversations that need care, pace and local sense.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <a
                href={`mailto:${profile.contact.email}`}
                className="group border-t border-line py-7"
              >
                <Mail
                  aria-hidden="true"
                  className="mb-8 text-brand-700"
                  size={21}
                  strokeWidth={1.7}
                />
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-500">
                  Email
                </p>
                <p className="mt-3 text-2xl font-semibold text-ink-950 group-hover:text-brand-700">
                  {profile.contact.email}
                </p>
              </a>
              <div className="border-t border-line py-7">
                <MapPin
                  aria-hidden="true"
                  className="mb-8 text-brand-700"
                  size={21}
                  strokeWidth={1.7}
                />
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-500">
                  Location
                </p>
                <p className="mt-3 text-2xl font-semibold text-ink-950">
                  {profile.contact.area}
                </p>
              </div>
              <a href="#" className="group border-t border-line py-7">
                <ExternalLink
                  aria-hidden="true"
                  className="mb-8 text-brand-700"
                  size={21}
                  strokeWidth={1.7}
                />
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-500">
                  LinkedIn
                </p>
                <p className="mt-3 text-2xl font-semibold text-ink-950 group-hover:text-brand-700">
                  {profile.contact.linkedIn}
                </p>
              </a>
              <a href="#" className="group border-t border-line py-7">
                <ArrowUpRight
                  aria-hidden="true"
                  className="mb-8 text-brand-700"
                  size={21}
                  strokeWidth={1.7}
                />
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-500">
                  Portfolio
                </p>
                <p className="mt-3 text-2xl font-semibold text-ink-950 group-hover:text-brand-700">
                  {profile.contact.portfolio}
                </p>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

export default App;
