import type { Metadata } from 'next';
import type { ReactNode } from 'react';

// The Work page is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: 'Work | HerbCodes Technology',
  description: 'Selected projects by HerbCodes Technology.',
};

export default function WorkLayout({ children }: { children: ReactNode }) {
  return children;
}
