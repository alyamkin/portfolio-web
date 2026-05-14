import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { inter } from '@/styles/fonts';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Andrey Lyamkin | Web Developer Portfolio',

  description:
    'Portfolio of Andrey Lyamkin, a web developer specializing in React, Next.js, TypeScript, and modern responsive web applications.',

  metadataBase: new URL('https://alyamkin.ca'),

  keywords: [
    'Andrey Lyamkin',
    'Web Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'JavaScript Developer',
    'Web Developer Portfolio',
    'Responsive Web Applications',
  ],

  authors: [{ name: 'Andrey Lyamkin' }],

  creator: 'Andrey Lyamkin',

  openGraph: {
    title: 'Andrey Lyamkin | Web Developer Portfolio',

    description:
      'Web developer portfolio featuring projects built with React, Next.js, TypeScript, and modern UI technologies.',

    url: 'https://alyamkin.ca',

    siteName: 'Andrey Lyamkin Portfolio',

    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Andrey Lyamkin | Web Developer Portfolio',

    description:
      'Web developer portfolio featuring modern web applications built with React, Next.js, and TypeScript.',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="sans bg-background-base">
        <div className="flex flex-col h-screen gap-6 tablet:gap-12">
          <Header />
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
