import type { LanguageCode, LanguageOption } from '../content/types';

type LanguageSwitcherProps = {
  ariaLabel: string;
  options: LanguageOption[];
  selectedLanguage: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
};

export function LanguageSwitcher({
  ariaLabel,
  options,
  selectedLanguage,
  onLanguageChange,
}: LanguageSwitcherProps) {
  return (
    <div
      aria-label={ariaLabel}
      className="inline-flex rounded-full border border-line bg-ivory-50/70 p-1 text-xs font-semibold uppercase tracking-[0.12em]"
    >
      {options.map((language) => {
        const isActive = language.code === selectedLanguage;

        return (
          <button
            key={language.code}
            type="button"
            aria-pressed={isActive}
            onClick={() => onLanguageChange(language.code)}
            className={`rounded-full px-3 py-2 transition-colors duration-200 ${
              isActive
                ? 'bg-ink-950 text-ivory-50'
                : 'text-ink-500 hover:text-brand-700'
            }`}
          >
            {language.label}
          </button>
        );
      })}
    </div>
  );
}
