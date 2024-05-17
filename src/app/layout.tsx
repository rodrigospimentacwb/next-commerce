import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next E-Commerce 14',
  description: 'Next E-Commerce utilizando a versão 14',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Navbar />
      <body className={inter.className}>
        <main className='bg-slate-700 h-screen p-16'>{children}</main>
      </body>
    </html>
  );
}
