type ProductSketchVisualProps = {
  className?: string;
  destinationLabel?: string;
  marker?: string;
  originLabel?: string;
};

export function ProductSketchVisual({
  className = '',
  marker = 'P',
}: ProductSketchVisualProps) {
  return (
    <div
      className={`relative overflow-hidden border border-line bg-ivory-50/45 ${className}`}
    >
      <svg
        aria-hidden="true"
        className="h-full min-h-44 w-full"
        viewBox="0 0 520 260"
        fill="none"
      >
        <path d="M126 72L294 46L398 116L214 156L126 72Z" stroke="rgba(9,8,7,.36)" />
        <path d="M214 156V216L398 172V116" stroke="rgba(9,8,7,.26)" />
        <path d="M126 72V128L214 216" stroke="rgba(9,8,7,.22)" />
        <path d="M158 86L316 62M192 108L350 80M226 132L382 102" stroke="rgba(9,8,7,.14)" />
        <path d="M118 216H420" stroke="rgba(9,8,7,.2)" />
        <path d="M112 46C190 16 320 12 426 70" stroke="#8F1D1D" strokeLinecap="round" strokeWidth="2" />
        <circle cx="294" cy="46" r="7" fill="#8F1D1D" />
      </svg>
      <div className="absolute left-5 top-5 font-display text-6xl font-medium leading-none text-brand-700">
        {marker}
      </div>
    </div>
  );
}
