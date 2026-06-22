type EcommerceInterfaceVisualProps = {
  className?: string;
  destinationLabel?: string;
  marker?: string;
  originLabel?: string;
};

export function EcommerceInterfaceVisual({
  className = '',
  marker = 'E',
}: EcommerceInterfaceVisualProps) {
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
        <path d="M54 42H466V218H54V42Z" stroke="rgba(9,8,7,.35)" />
        <path d="M54 80H466" stroke="rgba(9,8,7,.22)" />
        <path d="M88 118H190V188H88V118Z" stroke="rgba(9,8,7,.25)" />
        <path d="M220 118H322V188H220V118Z" stroke="rgba(9,8,7,.25)" />
        <path d="M352 118H432V188H352V118Z" stroke="rgba(9,8,7,.25)" />
        <path d="M86 61H164M196 61H228M250 61H282" stroke="rgba(9,8,7,.35)" />
        <path d="M96 146H182M228 146H314M360 146H424" stroke="#8F1D1D" strokeWidth="2" />
        <path d="M96 166H156M228 166H288M360 166H404" stroke="rgba(9,8,7,.28)" />
        <circle cx="432" cy="61" r="10" stroke="#8F1D1D" />
      </svg>
      <div className="absolute left-5 top-5 font-display text-6xl font-medium leading-none text-brand-700">
        {marker}
      </div>
    </div>
  );
}
