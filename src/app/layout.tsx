import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header, Footer } from '@/components/layout';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PhishGuard - Conscientização sobre Phishing',
  description: 'Plataforma interativa de conscientização sobre phishing em ambientes corporativos. Aprenda a identificar e se proteger contra ataques de engenharia social.',
  keywords: ['phishing', 'segurança da informação', 'engenharia social', 'conscientização', 'treinamento'],
  authors: [{ name: 'Gabriel Carvalho Santos' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-50 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
