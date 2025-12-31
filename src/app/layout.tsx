import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { Header, Footer } from '@/components/layout';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PhishGuard - Conscientização sobre Phishing',
  description: 'Plataforma interativa de conscientização sobre phishing em ambientes corporativos. Aprenda a identificar e se proteger contra ataques de engenharia social.',
  keywords: ['phishing', 'segurança', 'engenharia social', 'conscientização', 'corporativo'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}