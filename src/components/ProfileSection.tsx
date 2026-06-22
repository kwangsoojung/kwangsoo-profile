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
    <article className="border-t border-line py-7">
      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-line text-brand-700">
        <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
      </div>
      <h2 className="font-display text-2xl font-medium text-ink-950">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-ink-500">{description}</p>
    </article>
  );
}
