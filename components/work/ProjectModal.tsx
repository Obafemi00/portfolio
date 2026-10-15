'use client';

import { useEffect, useRef, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from 'react';
import Image from 'next/image';
import type { Project } from '@/data/projects';

type Props = {
  project: Project;
  onClose: () => void;
  onNext: () => void;
};

const stripes = 'repeating-linear-gradient(135deg, #E9EDF0 0 12px, #E2E7EB 12px 13px)';
const gallery = ['01', '02', '03', '04'] as const;

const focusableSelector =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function displayUrl(url: string) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

function MetaItem({ label, children, divided }: { label: string; children: ReactNode; divided?: boolean }) {
  return (
    <div className={`flex flex-col gap-1 py-4 ${divided ? 'border-t border-[#EEF1F4]' : ''}`}>
      <span className="font-bebas text-sm tracking-[0.2em] text-herb-slate">{label}</span>
      <span className="text-base font-medium text-herb-ink">{children}</span>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-3 py-9 border-t border-[#E4E8EC] sm:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] sm:gap-6 sm:py-12">
      <h2 className="m-0 font-hammersmith font-normal text-[26px] sm:text-[32px] leading-[1.15] tracking-normal text-herb-ink">
        {title}
      </h2>
      <div className="flex flex-col gap-3 items-start">{children}</div>
    </div>
  );
}

function Body({ text }: { text: string }) {
  return (
    <p className="m-0 text-base sm:text-lg leading-[1.65] text-herb-ink [text-wrap:pretty]">{text}</p>
  );
}

function PendingBadge() {
  return (
    <span className="font-mono text-xs text-herb-slate border border-dashed border-[#C9D0D6] rounded px-2.5 py-1.5">
      placeholder: write-up pending
    </span>
  );
}

export default function ProjectModal({ project, onClose, onNext }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll while open; restore the previous value and focus on unmount.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Reset scroll whenever a new project is shown (open or Next).
  useEffect(() => {
    if (dialogRef.current) dialogRef.current.scrollTop = 0;
  }, [project.slug]);

  function trapFocus(e: ReactKeyboardEvent<HTMLDivElement>) {
    if (e.key !== 'Tab' || !dialogRef.current) return;
    const nodes = dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector);
    if (nodes.length === 0) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  const hasRight = project.stack.length > 0 || project.liveUrl !== '';

  return (
    <div
      onClick={onClose}
      data-lenis-prevent
      className="fixed inset-0 z-[100] flex items-end justify-center bg-[rgba(10,15,20,0.8)] backdrop-blur-[8px] sm:items-center"
    >
      <div
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={trapFocus}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} case study`}
        className="relative w-full h-[calc(100%-24px)] max-w-[430px] bg-white rounded-t-xl shadow-[0_30px_80px_rgba(10,15,20,0.35)] overflow-y-auto overscroll-contain sm:w-[90vw] sm:h-[90vh] sm:max-w-[1400px] sm:rounded-lg"
      >
        <div className="sticky top-0 z-[2] h-0 flex justify-end">
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="mt-3 mr-3 sm:mt-5 sm:mr-5 w-11 h-11 rounded-full border-0 bg-white/[0.92] backdrop-blur-[8px] text-herb-slate text-[22px] leading-none cursor-pointer flex items-center justify-center transition-colors duration-[250ms] hover:text-herb-cyan"
          >
            ✕
          </button>
        </div>

        <div className="h-[38vh] sm:h-[60vh] flex items-center justify-center bg-[#E9EDF0]">
          <Image
            src={project.coverImage}
            alt={`${project.name} cover`}
            width={1600}
            height={1000}
            priority
            sizes="90vw"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-[1080px] mx-auto px-6 pt-9 pb-8 sm:px-16 sm:pt-16 sm:pb-14">
          <h1 className="m-0 font-hammersmith font-normal text-[36px] sm:text-[48px] leading-[1.1] tracking-normal text-herb-ink">
            {project.name}
          </h1>
          <div className="flex flex-wrap items-center gap-3.5 mt-[18px]">
            <span className="font-bebas text-sm tracking-[0.2em] leading-none text-herb-cyan bg-herb-fog rounded-full px-3.5 pt-2 pb-1.5 uppercase">
              {project.category}
            </span>
            <span className="text-sm text-herb-slate">{project.year}</span>
          </div>

          <div className="grid grid-cols-1 mt-9 border-y border-[#E4E8EC] sm:grid-cols-2 sm:mt-12">
            <div className="flex flex-col py-1 border-b border-[#E4E8EC] sm:py-2 sm:pr-8 sm:border-b-0 sm:border-r">
              <MetaItem label="CLIENT">{project.client}</MetaItem>
              {project.role && (
                <MetaItem label="ROLE" divided>
                  {project.role}
                </MetaItem>
              )}
            </div>
            {hasRight && (
              <div className="flex flex-col py-1 sm:py-2 sm:pl-8">
                {project.stack.length > 0 && (
                  <MetaItem label="STACK">{project.stack.join(', ')}</MetaItem>
                )}
                {project.liveUrl && (
                  <MetaItem label="LIVE URL" divided={project.stack.length > 0}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-herb-cyan hover:text-herb-mint"
                    >
                      {displayUrl(project.liveUrl)} ↗
                    </a>
                  </MetaItem>
                )}
              </div>
            )}
          </div>

          <div className="mt-6 sm:mt-8">
            <Section title="Overview">
              <Body text={project.overview} />
            </Section>

            {project.problem && (
              <Section title="The problem">
                <Body text={project.problem} />
              </Section>
            )}

            <Section title="Approach">
              {project.approach ? <Body text={project.approach} /> : <PendingBadge />}
            </Section>

            {project.stats.length > 0 && (
              <div className="flex flex-col gap-6 py-9 border-t border-[#E4E8EC] sm:gap-9 sm:py-12">
                <h2 className="m-0 font-hammersmith font-normal text-[26px] sm:text-[32px] leading-[1.15] tracking-normal text-herb-ink">
                  Outcome
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
                  {project.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col gap-2 pt-4 border-t-2 border-herb-cyan sm:pt-5"
                    >
                      <span className="font-hammersmith text-[44px] sm:text-[56px] leading-none text-herb-cyan">
                        {stat.value}
                      </span>
                      <span className="text-sm text-herb-slate">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 sm:gap-6 sm:mt-6">
            {gallery.map((n) => (
              <div
                key={n}
                className="aspect-[16/10] rounded flex items-center justify-center"
                style={{ background: stripes }}
              >
                <span className="font-mono text-[11px] text-herb-slate bg-[rgba(244,246,248,0.9)] px-2.5 py-1">
                  screenshot {n}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4 mt-10 pt-6 border-t border-[#E4E8EC] sm:mt-14 sm:pt-8">
            <button
              type="button"
              onClick={onClose}
              className="h-11 px-6 text-sm font-medium text-herb-cyan bg-white border-[1.5px] border-herb-cyan rounded-full cursor-pointer whitespace-nowrap transition-colors duration-[250ms] hover:bg-herb-fog"
            >
              Close
            </button>
            <button
              type="button"
              onClick={onNext}
              className="group h-11 flex items-center gap-2.5 text-[15px] font-medium text-herb-cyan bg-transparent border-0 p-0 cursor-pointer whitespace-nowrap"
            >
              Next project
              <span
                className="transition-transform duration-300 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
