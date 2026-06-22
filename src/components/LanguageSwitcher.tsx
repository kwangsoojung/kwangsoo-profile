const languages = ['EN', 'KO', 'FR'];

export function LanguageSwitcher() {
  return (
    <div
      aria-label="Language switcher placeholder"
      className="inline-flex rounded-full border border-line bg-ivory-50/70 p-1 text-xs font-semibold uppercase tracking-[0.12em]"
    >
      {languages.map((language, index) => (
        <button
          key={language}
          type="button"
          className={`rounded-full px-3 py-2 transition-colors duration-200 ${
            index === 0
              ? 'bg-ink-950 text-ivory-50'
              : 'text-ink-500 hover:text-brand-700'
          }`}
        >
          {language}
        </button>
      ))}
    </div>
  );
}
