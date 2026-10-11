'use client';

import { useState, type FormEvent } from 'react';
import Magnetic from '@/components/ui/Magnetic';
import CtaBand from '@/components/layout/CtaBand';

const EMAIL = 'obafemi00@gmail.com';

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/femi-herbert/' },
  { label: 'GitHub', href: 'https://github.com/Obafemi00' },
];

const labelText = 'font-bebas text-sm tracking-[0.24em] text-herb-cyan';
const fieldBase =
  'w-full bg-transparent border-0 border-b border-[#C9D0D6] rounded-none px-0 pt-2.5 pb-3 font-inter text-lg md:text-xl text-herb-ink placeholder:text-[#A9B2BA] outline-none focus-visible:outline-none focus:border-herb-cyan transition-colors duration-200';
const asideLabel = 'font-bebas text-sm tracking-[0.26em] text-herb-slate';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSend = () => {
    const subject = `New project enquiry${name ? ' from ' + name : ''}`;
    const parts = [msg, '', name && `Name: ${name}`, email && `Email: ${email}`].filter(Boolean);
    const body = parts.join('\n').trim();
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // The form never posts anywhere: submit is intercepted so native `required` validation runs, then mailto opens.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSend();
  };

  return (
    <>
      <section className="bg-white pt-[72px] pb-16 md:pt-40 md:pb-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="max-w-[800px] flex flex-col gap-[18px] md:gap-6">
            <div className="font-bebas text-herb-cyan text-[13px] tracking-[0.24em] md:text-sm md:tracking-[0.28em]">
              GET IN TOUCH
            </div>
            <h1 className="m-0 font-hammersmith font-normal text-herb-ink text-[40px] md:text-[52px] leading-[1.1] tracking-[-0.01em]">
              <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
                <span className="mask-reveal-line block">Let&apos;s talk.</span>
              </span>
            </h1>
            <p className="m-0 font-inter text-base md:text-lg leading-[1.6] text-herb-slate">
              Tell us what you need built. We respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 md:pb-36">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6 md:items-start">
          <form className="md:col-span-7 flex flex-col gap-10 md:gap-12" onSubmit={onSubmit}>
            <label className="flex flex-col gap-2.5">
              <span className={labelText}>YOUR NAME</span>
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={fieldBase}
              />
            </label>

            <label className="flex flex-col gap-2.5">
              <span className={labelText}>YOUR EMAIL</span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={fieldBase}
              />
            </label>

            <label className="flex flex-col gap-2.5">
              <span className={labelText}>WHAT CAN WE BUILD FOR YOU</span>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="A short description of the project, timeline, and budget range."
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className={`${fieldBase} leading-[1.55] resize-y min-h-[8.4em]`}
              />
            </label>

            <div className="flex flex-wrap items-center gap-5">
              <Magnetic>
                <button
                  type="submit"
                  className="font-inter text-[15px] font-medium text-white bg-herb-cyan hover:bg-herb-mint rounded-full px-[30px] py-3.5 border-0 cursor-pointer whitespace-nowrap transition-colors duration-200"
                >
                  Send message
                </button>
              </Magnetic>
              <span className="font-inter text-[13px] text-herb-slate">
                Opens your mail client with these details filled in.
              </span>
            </div>
          </form>

          <aside className="md:col-start-9 md:col-span-4 bg-herb-fog rounded px-6 py-7 md:px-7 md:py-9 flex flex-col">
            <span className={asideLabel}>DIRECT</span>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-2.5 font-inter text-base font-medium text-herb-cyan break-all"
            >
              {EMAIL}
            </a>
            <span className="mt-1.5 font-inter text-sm text-herb-slate">Response within 24 hours.</span>

            <div className="h-px bg-[rgba(5,171,196,0.45)] my-8" aria-hidden="true" />

            <span className={asideLabel}>SOCIAL</span>
            <div className="mt-2 flex flex-col gap-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center h-10 font-inter text-base text-herb-ink hover:text-herb-cyan transition-colors duration-200"
                >
                  {s.label}
                  <span className="ml-1.5 text-herb-cyan" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <CtaBand variant="dark" />
    </>
  );
}
