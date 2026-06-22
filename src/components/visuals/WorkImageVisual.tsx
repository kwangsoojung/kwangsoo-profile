import type { ReactNode } from 'react';
import type { ReplaceableAsset } from '../../content/types';
import { AssetImage } from '../AssetImage';

type WorkImageVisualProps = {
  asset: ReplaceableAsset;
  className?: string;
  fallback: ReactNode;
};

export function WorkImageVisual({
  asset,
  className = '',
  fallback,
}: WorkImageVisualProps) {
  return (
    <div className={`relative h-48 overflow-hidden bg-ivory-100/25 ${className}`}>
      <AssetImage
        alt={asset.alt}
        className="h-full w-full object-cover"
        fallback={fallback}
        src={asset.src}
      />
    </div>
  );
}
