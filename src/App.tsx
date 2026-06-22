import { BriefcaseBusiness, Globe2, Languages, Mail } from 'lucide-react';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { CVButton } from './components/CVButton';
import { Eyebrow } from './components/Eyebrow';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { ProfileSection } from './components/ProfileSection';
import { Section } from './components/Section';
import { profile } from './content/profile';

const sectionIcons = [BriefcaseBusiness, Globe2, Languages];

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
          <LanguageSwitcher />
        </Container>
      </header>

      <Section className="border-t-0 py-20 sm:py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
            <div>
              <Eyebrow>{profile.location}</Eyebrow>
              <h1 className="mt-7 max-w-5xl font-display text-6xl font-medium leading-[0.92] tracking-tight text-ink-950 sm:text-7xl lg:text-8xl">
                {profile.name}
              </h1>
              <p className="mt-8 max-w-4xl text-3xl font-semibold leading-tight text-brand-700 sm:text-4xl">
                {profile.positioning}
              </p>
            </div>
            <div className="border-t border-line pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="text-base leading-8 text-ink-700">{profile.summary}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <CVButton />
                <Button href="mailto:hello@example.com" variant="ghost">
                  Contact placeholder
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="profile-foundation">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[18rem_minmax(0,1fr)]">
            <div>
              <Eyebrow>Structure</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-ink-950 sm:text-5xl">
                Editorial profile system, ready for content.
              </h2>
            </div>
            <div className="grid gap-x-8 md:grid-cols-3">
              {profile.placeholderSections.map((section, index) => {
                const Icon = sectionIcons[index] ?? Mail;

                return (
                  <ProfileSection
                    key={section.title}
                    title={section.title}
                    description={section.description}
                    icon={Icon}
                  />
                );
              })}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

export default App;
