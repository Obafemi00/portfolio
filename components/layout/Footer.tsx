import Link from 'next/link';
import Button from '@/components/ui/Button';
import Magnetic from '@/components/ui/Magnetic';

const sitemap = [
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: 'mailto:obafemi00@gmail.com' },
];

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/femi-herbert/' },
  { label: 'GitHub', href: 'https://github.com/Obafemi00' },
];

const columnLabel = 'font-bebas text-sm tracking-[0.28em] text-herb-cyan mb-1';

export default function Footer() {
  return (
    <footer className="bg-herb-ink text-white border-t border-[#1A232C]">
      <div className="container-content pt-16 md:pt-[88px] grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
        <div className="md:col-span-5 flex flex-col gap-[22px]">
          <div className="flex items-center gap-3">
            <span
              className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center flex-shrink-0"
              aria-hidden="true"
            >
              <span className="w-3.5 h-3.5 rounded-full bg-herb-cyan" />
            </span>
            <span className="font-hammersmith text-[19px] tracking-[0.02em]">HERBCODES</span>
          </div>
          <p className="m-0 font-hammersmith text-[22px] text-white">
            Clean. Reliable. Engineered.
          </p>
          <div className="flex gap-2.5">
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-11 md:h-auto px-[18px] md:px-4 md:py-[7px] rounded-full border border-[#2A343E] text-[13px] font-medium text-white whitespace-nowrap hover:border-herb-cyan hover:text-herb-cyan transition-colors duration-200"
              >
                {social.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-start-7 md:col-span-2 flex flex-col gap-3.5">
          <h4 className={columnLabel}>SITEMAP</h4>
          <ul className="flex flex-col gap-3.5">
            {sitemap.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[15px] text-[#C9D0D6] hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-start-10 md:col-span-3 flex flex-col items-start gap-3.5">
          <h4 className={columnLabel}>CONTACT</h4>
          <a
            href="mailto:obafemi00@gmail.com"
            className="text-[15px] text-herb-cyan hover:text-herb-mint transition-colors duration-200"
          >
            obafemi00@gmail.com
          </a>
          <Magnetic className="mt-2.5">
            <Button
              href="mailto:obafemi00@gmail.com"
              variant="secondary"
              className="border-0 px-[22px] py-[11px] text-sm"
            >
              Start a project
            </Button>
          </Magnetic>
        </div>
      </div>

      <div className="container-content pt-12 md:pt-[72px] pb-8 md:pb-9">
        <div className="h-px bg-[rgba(5,171,196,0.45)] mb-5 md:mb-6" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs md:text-[13px] text-[#7D8892]">
          <p className="m-0">© {new Date().getFullYear()} HerbCodes Technology. All rights reserved.</p>
          <div className="flex gap-5 md:gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-200">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
