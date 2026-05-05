import '@/styles/globals.css';
import type { Metadata } from 'next';
import { inter } from '@/styles/fonts';

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
    <html lang="en" className={`${inter.variable}`}>
      <body className="sans">{children}</body>
    </html>
  );
}
