'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import Magnetic from '@/components/ui/Magnetic';

const navItems = [
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300 ease-herb',
          scrolled
            ? 'bg-white/90 backdrop-blur-md py-3 border-b border-herb-fog'
            : 'bg-white py-5',
        )}
      >
        <div className="container-content flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 group" aria-label="HerbCodes home">
            <span
              className="inline-block w-8 h-8 rounded-full bg-herb-cyan"
              aria-hidden="true"
            />
            <span className="flex flex-col leading-none">
              <span className="font-hammersmith text-lg tracking-tight text-herb-ink">
                HERBCODES
              </span>
              <span className="font-bebas text-[10px] tracking-[0.3em] text-herb-slate mt-0.5">
                TECHNOLOGY
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-herb-ink hover:text-herb-cyan transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-herb-cyan transition-all duration-300 ease-herb group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Magnetic>
              <Button href="mailto:obafemi00@gmail.com" variant="secondary" size="sm">
                Contact <span aria-hidden="true">»</span>
              </Button>
            </Magnetic>
          </div>

          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={cn(
                'w-6 h-0.5 bg-herb-ink transition-all',
                mobileOpen && 'translate-y-2 rotate-45',
              )}
            />
            <span
              className={cn(
                'w-6 h-0.5 bg-herb-ink transition-all',
                mobileOpen && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'w-6 h-0.5 bg-herb-ink transition-all',
                mobileOpen && '-translate-y-2 -rotate-45',
              )}
            />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-white">
          <nav className="container-content flex flex-col gap-6 pt-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-hammersmith text-3xl text-herb-ink hover:text-herb-cyan transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              href="mailto:obafemi00@gmail.com"
              variant="primary"
              className="mt-6 self-start"
            >
              Contact
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
