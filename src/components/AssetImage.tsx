import { useEffect, useState, type ReactNode } from 'react';

type AssetImageProps = {
  alt: string;
  className?: string;
  fallback?: ReactNode;
  imgClassName?: string;
  src: string;
};

export function AssetImage({
  alt,
  className = '',
  fallback = null,
  imgClassName = '',
  src,
}: AssetImageProps) {
  const [isMissing, setIsMissing] = useState(false);

  useEffect(() => {
    setIsMissing(false);
  }, [src]);

  if (isMissing) {
    return <>{fallback}</>;
  }

  return (
    <img
      alt={alt}
      className={`${className} ${imgClassName}`}
      loading="lazy"
      onError={() => setIsMissing(true)}
      src={src}
    />
  );
}
