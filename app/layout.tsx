import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Phindile Sandi | Software Developer & Data Solutions Architect',
  description:
    'Portfolio of Phindile Sandi — Software Developer & Data Solutions Architect.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-indigo-950 via-slate-950 to-black text-white font-sans antialiased">
        {/* Persistent ribbon nav */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
