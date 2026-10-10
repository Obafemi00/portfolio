import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Eyebrow({ children, className }: Props) {
  return (
    <span
      className={cn(
        'font-bebas text-herb-cyan tracking-widest uppercase text-sm',
        className,
      )}
    >
      {children}
    </span>
  );
}
