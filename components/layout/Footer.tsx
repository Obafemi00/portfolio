import Link from 'next/link';

const sitemap = [
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: 'mailto:obafemi00@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="bg-herb-ink text-white">
      <div className="container-content py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span
                className="inline-block w-9 h-9 rounded-full bg-herb-cyan"
                aria-hidden="true"
              />
              <span className="flex flex-col leading-none">
                <span className="font-hammersmith text-xl">HERBCODES</span>
                <span className="font-bebas text-[10px] tracking-[0.3em] text-white/60 mt-0.5">
                  TECHNOLOGY
                </span>
              </span>
            </div>
            <p className="font-inter text-sm text-white/80">
              Clean. Reliable. Engineered.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/femi-herbert/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-herb-cyan transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/Obafemi00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-herb-cyan transition-colors"
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bebas text-herb-cyan tracking-widest text-sm">SITEMAP</h4>
            <ul className="flex flex-col gap-3">
              {sitemap.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bebas text-herb-cyan tracking-widest text-sm">CONTACT</h4>
            <a
              href="mailto:obafemi00@gmail.com"
              className="text-white hover:text-herb-cyan transition-colors text-sm"
            >
              obafemi00@gmail.com
            </a>
            <a
              href="mailto:obafemi00@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-herb-cyan text-sm font-medium hover:bg-herb-fog transition-colors self-start mt-2"
            >
              Start a project
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} HerbCodes Technology. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white/80 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/80 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
