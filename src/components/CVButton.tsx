import { FileDown } from 'lucide-react';
import { Button } from './Button';

type CVButtonProps = {
  href: string;
  label: string;
};

export function CVButton({ href, label }: CVButtonProps) {
  return (
    <Button href={href} variant="secondary">
      <FileDown aria-hidden="true" size={17} strokeWidth={1.8} />
      {label}
    </Button>
  );
}
