import { motion } from 'framer-motion';
import { BriefcaseBusiness, Globe2, Languages, Mail } from 'lucide-react';
import { ProfileSection } from './components/ProfileSection';
import { profile } from './content/profile';

const sectionIcons = [BriefcaseBusiness, Globe2, Languages];

function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-ink-950">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            {profile.location}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-ink-950 sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-medium text-brand-700 sm:text-2xl">
            {profile.positioning}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-700">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {profile.languages.map((language) => (
              <span
                key={language}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 shadow-sm"
              >
                {language}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
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
      </section>
    </main>
  );
}

export default App;
