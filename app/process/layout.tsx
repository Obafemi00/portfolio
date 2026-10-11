import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process | HerbCodes Technology',
  description: 'How HerbCodes Technology approaches every engagement, from discovery to ongoing management.',
};

export default function ProcessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
