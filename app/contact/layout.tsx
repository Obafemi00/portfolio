import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | HerbCodes Technology',
  description: 'Tell us what you need built. We respond within 24 hours.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
