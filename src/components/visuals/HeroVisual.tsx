import type { ProfileContent } from '../../content/types';
import { AssetImage } from '../AssetImage';

type HeroVisualProps = {
  className?: string;
  visual: ProfileContent['heroVisual'];
};

export function HeroVisual({ className = '', visual }: HeroVisualProps) {
  return (
    <div
      className={`hero-visual pointer-events-none relative flex min-h-[28rem] items-end justify-center overflow-visible bg-transparent sm:min-h-[34rem] ${className}`}
    >
      <AssetImage
        alt={visual.background.alt}
        className="hero-visual-bg absolute left-1/2 top-[2%] z-10 h-[54%] w-[106%] -translate-x-1/2 object-contain opacity-42 mix-blend-multiply"
        fallback={null}
        src={visual.background.src}
      />
      <AssetImage
        alt={visual.portrait.alt}
        className="hero-portrait relative z-20 block h-auto w-[min(92vw,480px)] max-w-none object-contain opacity-100 sm:w-[clamp(420px,42vw,720px)] lg:w-[clamp(560px,46vw,780px)]"
        fallback={
          <div className="relative z-20 flex h-[min(58vw,460px)] w-[min(92vw,480px)] items-center justify-center border border-dashed border-line bg-ivory-50/45 text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 sm:w-[clamp(420px,42vw,720px)] lg:w-[clamp(560px,52vw,860px)]">
            {visual.portrait.fallback}
          </div>
        }
        src={visual.portrait.src}
      />
    </div>
  );
}
