import type { ProfileContent } from '../../content/types';
import { AssetImage } from '../AssetImage';

type HeroVisualProps = {
  className?: string;
  visual: ProfileContent['heroVisual'];
};

export function HeroVisual({ className = '', visual }: HeroVisualProps) {
  return (
    <div
      className={`hero-visual pointer-events-none relative overflow-visible bg-transparent ${className}`}
    >
      <AssetImage
        alt={visual.background.alt}
        className="hero-visual-bg absolute left-1/2 top-[2%] z-10 h-[54%] w-[106%] -translate-x-1/2 object-contain opacity-42 mix-blend-multiply"
        fallback={null}
        src={visual.background.src}
      />
      <AssetImage
        alt={visual.portrait.alt}
        className="hero-main-visual hero-portrait relative z-20 block h-auto w-full max-w-none object-contain opacity-100"
        fallback={
          <div className="relative z-20 flex aspect-[4/5] w-full items-center justify-center border border-dashed border-line bg-ivory-50/45 text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
            {visual.portrait.fallback}
          </div>
        }
        src={visual.portrait.src}
      />
    </div>
  );
}
