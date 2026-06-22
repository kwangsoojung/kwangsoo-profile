import type { PropsWithChildren } from 'react';

type EyebrowProps = PropsWithChildren<{
  className?: string;
}>;

export function Eyebrow({ children, className = '' }: EyebrowProps) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.22em] text-brand-700 ${className}`}
    >
      {children}
    </p>
  );
}
