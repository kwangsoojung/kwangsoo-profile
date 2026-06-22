type RetailGridVisualProps = {
  className?: string;
  destinationLabel?: string;
  marker?: string;
  originLabel?: string;
};

export function RetailGridVisual({ className = '', marker = 'R' }: RetailGridVisualProps) {
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
        <path d="M0 65H520M0 130H520M0 195H520" stroke="rgba(9,8,7,.08)" />
        <path d="M104 0V260M208 0V260M312 0V260M416 0V260" stroke="rgba(9,8,7,.08)" />
        <path d="M64 48H240V122H64V48Z" stroke="rgba(9,8,7,.34)" />
        <path d="M280 48H456V122H280V48Z" stroke="rgba(9,8,7,.34)" />
        <path d="M64 154H172V214H64V154Z" stroke="rgba(9,8,7,.28)" />
        <path d="M212 154H456V214H212V154Z" stroke="rgba(9,8,7,.28)" />
        <path d="M92 86H212M308 86H428M240 184H430" stroke="#8F1D1D" strokeWidth="2" />
        <circle cx="194" cy="184" r="18" stroke="#8F1D1D" />
      </svg>
      <div className="absolute left-5 top-5 font-display text-6xl font-medium leading-none text-brand-700">
        {marker}
      </div>
    </div>
  );
}
