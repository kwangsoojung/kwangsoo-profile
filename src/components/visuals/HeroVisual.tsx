import type { ProfileContent } from '../../content/types';
import { AssetImage } from '../AssetImage';

type HeroVisualProps = {
  visual: ProfileContent['heroVisual'];
};

export function HeroVisual({ visual }: HeroVisualProps) {
  return (
    <div className="pointer-events-none relative h-full min-h-[24rem] overflow-hidden border border-line bg-ivory-50/45 p-5 backdrop-blur-[2px] transition-transform duration-300 sm:min-h-[32rem] lg:min-h-full lg:hover:-translate-y-1">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-line" />
      <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-line" />
      <div className="pointer-events-none absolute right-4 top-4 z-20 max-w-[13rem] border border-line bg-ivory-50/72 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-ink-500/80 backdrop-blur-md sm:left-5 sm:right-auto sm:max-w-none sm:tracking-[0.24em]">
        {visual.meta}
      </div>
      <div className="absolute bottom-6 right-6 text-right font-display text-5xl font-medium leading-none text-brand-700 sm:text-7xl">
        {visual.marker}
      </div>
      <AssetImage
        alt={visual.background.alt}
        className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-multiply"
        fallback={null}
        src={visual.background.src}
      />
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 520 680"
        fill="none"
      >
        <path
          d="M78 540C154 398 202 188 372 132"
          stroke="#8F1D1D"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path d="M126 120H414V418H126V120Z" stroke="rgba(9,8,7,.3)" />
        <path d="M176 170H364V370H176V170Z" stroke="rgba(9,8,7,.18)" />
        <circle cx="372" cy="132" r="62" stroke="#8F1D1D" strokeWidth="1.5" />
        <circle cx="116" cy="552" r="84" stroke="rgba(9,8,7,.22)" />
        <path d="M270 0V680M0 334H520" stroke="rgba(9,8,7,.09)" />
      </svg>
      <div className="absolute left-[18%] top-[28%] h-28 w-28 rounded-full border border-brand-700/70" />
      <div className="absolute right-[18%] top-[42%] h-40 w-24 border border-ink-950/20 bg-ivory-100/45" />
      <div className="absolute bottom-[18%] left-[28%] h-3 w-40 bg-brand-700" />
      <div className="absolute inset-x-8 bottom-0 top-20 flex items-end justify-center sm:inset-x-10 sm:top-24">
        <AssetImage
          alt={visual.portrait.alt}
          className="max-h-full w-full object-contain object-bottom"
          fallback={
            <div className="mb-8 flex h-[72%] w-[70%] max-w-80 items-center justify-center border border-dashed border-line bg-ivory-50/55 text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
              {visual.portrait.fallback}
            </div>
          }
          src={visual.portrait.src}
        />
      </div>
    </div>
  );
}
