import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'accent';
type Size = 'sm' | 'md' | 'lg';

const variants: Record<Variant, string> = {
  primary:
    'bg-herb-cyan text-white hover:bg-herb-mint shadow-sm hover:shadow-md',
  secondary:
    'bg-white text-herb-cyan border border-herb-cyan hover:bg-herb-fog',
  ghost:
    'bg-transparent text-herb-ink hover:text-herb-cyan',
  accent:
    'bg-herb-purple text-white hover:opacity-90',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-herb focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-herb-cyan';

type Common = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type LinkButton = Common & {
  href: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, 'href' | 'className'>;

type NativeButton = Common & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<'button'>, 'className'>;

type ButtonProps = LinkButton | NativeButton;

export default function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', children, className } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ('href' in props && typeof props.href === 'string') {
    const { href, ...rest } = props as LinkButton;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
