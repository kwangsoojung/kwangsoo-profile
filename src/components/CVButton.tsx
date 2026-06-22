import { FileDown } from 'lucide-react';
import { Button } from './Button';

export function CVButton() {
  return (
    <Button href="/cv/" variant="secondary" aria-label="CV download placeholder">
      <FileDown aria-hidden="true" size={17} strokeWidth={1.8} />
      CV placeholder
    </Button>
  );
}
