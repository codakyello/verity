import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-inter' });

export const metadata: Metadata = {
    title: 'Verity | Find Your Place',
    description: 'The modern way to discover verified property.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${inter.variable} min-h-screen bg-white text-[#111827] font-sans antialiased`}>
            {children}
        </div>
    );
}
