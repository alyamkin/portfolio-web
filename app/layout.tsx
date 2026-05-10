import '@/styles/globals.css';
import type { Metadata } from 'next';
import { inter } from '@/styles/fonts';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Andrey Lyamkin | Portfolio',
  description: 'Andrey Lyamkin portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="sans bg-surfaces-base">
        <div className="flex flex-col h-screen gap-6 tablet:gap-12">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
