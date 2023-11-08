import { Footer, Navbar } from './components';
import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nehemie Mombanga',
  description:
    "Hi, I'm Nehemie, a Full-Stack Developer weaving robust back-end and intuitive design to craft impactful web apps, aiming to innovate and elevate user experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`main-layout ${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
