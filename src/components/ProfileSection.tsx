import type { LucideIcon } from 'lucide-react';

type ProfileSectionProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ProfileSection({
  title,
  description,
  icon: Icon,
}: ProfileSectionProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-brand-700">
        <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
      </div>
      <h2 className="text-lg font-semibold text-ink-950">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-ink-500">{description}</p>
    </article>
  );
}
