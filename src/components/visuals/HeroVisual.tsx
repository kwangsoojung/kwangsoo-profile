import type { ProfileContent } from '../../content/types';
import { AssetImage } from '../AssetImage';

type HeroVisualProps = {
  visual: ProfileContent['heroVisual'];
};

export function HeroVisual({ visual }: HeroVisualProps) {
  return (
    <div className="hero-visual pointer-events-none relative flex h-full min-h-[32rem] items-center justify-center overflow-visible bg-transparent sm:min-h-[38rem] lg:min-h-[620px]">
      <AssetImage
        alt={visual.background.alt}
        className="hero-visual-bg absolute inset-x-[-2%] top-[4%] z-10 h-[52%] w-[104%] object-contain opacity-45 mix-blend-multiply"
        fallback={null}
        src={visual.background.src}
      />
      <svg
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full opacity-25"
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
      <div className="decor-circle absolute left-[16%] top-[30%] z-[1] h-24 w-24 rounded-full border border-brand-700/20" />
      <div className="decor-box absolute right-[16%] top-[42%] z-[1] h-32 w-20 border border-ink-950/10 bg-ivory-100/20" />
      <div className="decor-line absolute bottom-[18%] left-[22%] z-[1] h-px w-32 bg-brand-700/30" />
      <AssetImage
        alt={visual.portrait.alt}
        className="hero-portrait relative z-20 block h-auto w-[min(92vw,640px)] max-w-none object-contain sm:w-[clamp(420px,36vw,640px)]"
        fallback={
          <div className="relative z-20 flex h-[min(58vw,460px)] w-[clamp(300px,36vw,540px)] items-center justify-center border border-dashed border-line bg-ivory-50/45 text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
            {visual.portrait.fallback}
          </div>
        }
        src={visual.portrait.src}
      />
    </div>
  );
}
