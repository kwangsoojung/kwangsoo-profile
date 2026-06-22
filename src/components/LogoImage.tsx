import type { ReplaceableAsset } from '../content/types';
import { AssetImage } from './AssetImage';

type LogoImageProps = {
  logo: ReplaceableAsset;
};

export function LogoImage({ logo }: LogoImageProps) {
  return (
    <AssetImage
      alt={logo.alt}
      className="block h-7 max-w-24 object-contain"
      fallback={
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-ink-500">
          {logo.fallback}
        </span>
      }
      src={logo.src}
    />
  );
}
