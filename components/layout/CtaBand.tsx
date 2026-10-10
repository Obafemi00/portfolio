import Button from '@/components/ui/Button';
import Magnetic from '@/components/ui/Magnetic';
import { cn } from '@/lib/utils';

type Props = {
  variant?: 'light' | 'dark';
};

export default function CtaBand({ variant = 'dark' }: Props) {
  const isDark = variant === 'dark';
  return (
    <section
      className={cn(
        'py-section',
        isDark ? 'bg-herb-ink text-white' : 'bg-herb-fog text-herb-ink',
      )}
    >
      <div className="container-content text-center flex flex-col items-center gap-6">
        <h2 className="text-h2 font-hammersmith balance max-w-2xl">
          Let&apos;s build something reliable.
        </h2>
        <p
          className={cn(
            'text-base max-w-lg',
            isDark ? 'text-white/70' : 'text-herb-slate',
          )}
        >
          Whether you need a new site, a rebuild, or ongoing management, HerbCodes is ready.
        </p>
        <Magnetic>
          <Button href="mailto:obafemi00@gmail.com" variant="primary" size="lg">
            Start a project
          </Button>
        </Magnetic>
        <p
          className={cn(
            'text-xs',
            isDark ? 'text-white/40' : 'text-herb-slate/70',
          )}
        >
          Response within 24 hours.
        </p>
      </div>
    </section>
  );
}
