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
        'py-20 md:py-32',
        isDark ? 'bg-herb-ink text-white' : 'bg-herb-fog text-herb-ink',
      )}
    >
      <div className="container-content">
        <div className="max-w-[720px] mx-auto text-center flex flex-col items-center gap-4 md:gap-5">
          <h2 className="m-0 font-hammersmith font-normal text-[32px] md:text-[44px] leading-[1.12] tracking-normal balance">
            Let&apos;s build something reliable.
          </h2>
          <p
            className={cn(
              'm-0 text-base md:text-lg',
              isDark ? 'text-[#A9B2BA]' : 'text-herb-slate',
            )}
          >
            Tell us what you need built. We scope it clearly and build it properly.
          </p>
          <Magnetic className="mt-3.5 md:mt-4 self-stretch md:self-auto">
            <Button
              href="mailto:obafemi00@gmail.com"
              variant="primary"
              size="lg"
              className="w-full md:w-auto h-[52px] md:h-auto px-[30px] py-3.5 text-[15px] shadow-none hover:shadow-none"
            >
              Start a project
            </Button>
          </Magnetic>
          <p
            className={cn(
              'm-0 md:mt-1 text-[13px]',
              isDark ? 'text-[#7D8892]' : 'text-herb-slate/70',
            )}
          >
            Response within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
