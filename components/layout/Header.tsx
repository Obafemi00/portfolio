'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import Magnetic from '@/components/ui/Magnetic';

const navItems = [
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
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
          'sticky top-0 z-50 w-full border-b transition-colors duration-300 ease-herb',
          scrolled || mobileOpen
            ? 'bg-[rgba(255,255,255,0.82)] backdrop-blur-[14px] border-[#EEF1F4]'
            : 'bg-white border-transparent',
        )}
      >
        <div className="container-content h-[60px] md:h-[76px] flex items-center justify-between gap-14">
          <Link href="/" className="flex items-center gap-3 group" aria-label="HerbCodes home">
            <Image
              src="/logo-icon.png"
              alt="HerbCodes bug icon"
              width={30}
              height={30}
              priority
              className="w-[30px] h-[30px] flex-shrink-0"
            />
            <span className="hidden md:flex flex-col leading-none">
              <span className="font-hammersmith text-[19px] tracking-[0.02em] text-herb-ink">
                HERBCODES
              </span>
              <span className="font-bebas text-[10px] tracking-[0.42em] text-herb-slate mt-[3px]">
                TECHNOLOGY
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-herb-ink py-1.5 border-b-[1.5px] border-transparent hover:border-herb-cyan transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Magnetic>
              <Button
                href="/contact"
                variant="secondary"
                size="sm"
                className="px-5 py-[9px] text-sm border-[1.5px]"
              >
                Contact <span aria-hidden="true" className="text-[15px] leading-none">»</span>
              </Button>
            </Magnetic>
          </div>

          <button
            type="button"
            className="md:hidden flex items-center gap-2.5 h-11 pl-3 pr-1 font-inter text-sm font-medium text-herb-ink"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span aria-hidden="true">{mobileOpen ? 'Close' : 'Menu'}</span>
            <span className="flex flex-col gap-[5px] w-5" aria-hidden="true">
              <span className="h-[1.5px] bg-herb-ink" />
              <span className="h-[1.5px] w-3.5 ml-1.5 bg-herb-cyan" />
            </span>
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bottom-0 z-40 bg-white px-6 pt-10 pb-8 flex flex-col">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between py-[18px] border-b border-[#E4E8EC] font-hammersmith text-[32px] leading-[1.1] text-herb-ink"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
                <span className="text-xl text-herb-cyan" aria-hidden="true">→</span>
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-4">
            <Button
              href="mailto:obafemi00@gmail.com"
              variant="primary"
              className="h-[52px] text-[15px] shadow-none hover:shadow-none"
            >
              Start a project <span aria-hidden="true">»</span>
            </Button>
            <a
              href="mailto:obafemi00@gmail.com"
              className="text-center text-sm text-herb-cyan"
            >
              obafemi00@gmail.com
            </a>
          </div>
        </div>
      )}
    </>
  );
}
