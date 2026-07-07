import type { ProfileContent } from '../../content/types';
import { AssetImage } from '../AssetImage';

type HeroVisualProps = {
  visual: ProfileContent['heroVisual'];
};

export function HeroVisual({ visual }: HeroVisualProps) {
  return (
    <div className="hero-visual pointer-events-none relative h-full min-h-[24rem] overflow-hidden border border-line bg-ivory-50/45 p-5 backdrop-blur-[2px] transition-transform duration-300 sm:min-h-[32rem] lg:min-h-full lg:hover:-translate-y-1">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-line" />
      <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-line" />
      <div className="pointer-events-none absolute right-4 top-4 z-20 max-w-[13rem] border border-line bg-ivory-50/72 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-ink-500/80 backdrop-blur-md sm:left-5 sm:right-auto sm:max-w-none sm:tracking-[0.24em]">
        {visual.meta}
      </div>
      <AssetImage
        alt={visual.background.alt}
        className="hero-visual-bg absolute inset-x-[4%] top-[6%] z-10 h-[58%] w-[92%] object-contain opacity-55 mix-blend-multiply"
        fallback={null}
        src={visual.background.src}
      />
      <svg
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full"
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
      <div className="absolute left-[18%] top-[30%] z-[1] h-24 w-24 rounded-full border border-brand-700/55" />
      <div className="absolute right-[18%] top-[40%] z-[1] h-32 w-20 border border-ink-950/15 bg-ivory-100/35" />
      <div className="absolute bottom-[16%] left-[26%] z-[1] h-2 w-32 bg-brand-700/85" />
      <AssetImage
        alt={visual.portrait.alt}
        className="hero-portrait absolute bottom-0 left-1/2 z-20 h-auto max-h-[74%] w-[clamp(170px,42%,330px)] -translate-x-1/2 object-contain object-bottom"
        fallback={
          <div className="absolute bottom-8 left-1/2 z-20 flex h-[58%] w-[60%] max-w-72 -translate-x-1/2 items-center justify-center border border-dashed border-line bg-ivory-50/55 text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
            {visual.portrait.fallback}
          </div>
        }
        src={visual.portrait.src}
      />
    </div>
  );
}
