import type { Metadata } from 'next';
import { Hammersmith_One, Bebas_Neue, Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider';
import './globals.css';

const hammersmith = Hammersmith_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-hammersmith',
  display: 'swap',
});

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HerbCodes Technology | Web Design, Development, Management',
  description: 'HerbCodes Technology. Web design, development, and management.',
  openGraph: {
    title: 'HerbCodes Technology',
    description: 'HerbCodes Technology. Web design, development, and management.',
    url: 'https://herbcodes.com',
    siteName: 'HerbCodes Technology',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HerbCodes Technology. Clean. Reliable. Engineered.',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HerbCodes Technology',
    description: 'HerbCodes Technology. Web design, development, and management.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${hammersmith.variable} ${bebas.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <SmoothScrollProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
