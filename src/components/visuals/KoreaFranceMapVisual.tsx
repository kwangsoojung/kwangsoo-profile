type KoreaFranceMapVisualProps = {
  className?: string;
  destinationLabel?: string;
  marker?: string;
  originLabel?: string;
};

export function KoreaFranceMapVisual({
  className = '',
  destinationLabel = 'FR',
  marker,
  originLabel = 'KR',
}: KoreaFranceMapVisualProps) {
  return (
    <div
      className={`relative overflow-hidden border border-line bg-ivory-50/45 ${className}`}
    >
      <svg
        aria-hidden="true"
        className="h-full min-h-64 w-full"
        viewBox="0 0 640 360"
        fill="none"
      >
        <path d="M0 90H640M0 180H640M0 270H640" stroke="rgba(9,8,7,.08)" />
        <path d="M128 0V360M256 0V360M384 0V360M512 0V360" stroke="rgba(9,8,7,.08)" />
        <path
          d="M130 232C218 126 322 88 494 118"
          stroke="#8F1D1D"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M130 232C228 182 334 156 494 118"
          stroke="rgba(9,8,7,.34)"
          strokeDasharray="5 9"
        />
        <circle cx="130" cy="232" r="48" stroke="rgba(9,8,7,.3)" />
        <circle cx="494" cy="118" r="48" stroke="rgba(9,8,7,.3)" />
        <circle cx="130" cy="232" r="7" fill="#8F1D1D" />
        <circle cx="494" cy="118" r="7" fill="#8F1D1D" />
        <path d="M92 254L168 210M456 140L532 96" stroke="rgba(9,8,7,.25)" />
        <path d="M86 292H210M430 78H560" stroke="rgba(9,8,7,.28)" />
      </svg>
      <div className="absolute left-5 top-5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ink-500">
        {originLabel}
      </div>
      <div className="absolute bottom-5 right-5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ink-500">
        {destinationLabel}
      </div>
      {marker ? (
        <div className="absolute right-5 top-5 font-display text-6xl font-medium leading-none text-brand-700">
          {marker}
        </div>
      ) : null}
    </div>
  );
}
