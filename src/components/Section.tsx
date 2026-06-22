import type { PropsWithChildren } from 'react';

type SectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
}>;

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`border-t border-line py-16 sm:py-20 lg:py-28 ${className}`}
    >
      {children}
    </section>
  );
}
