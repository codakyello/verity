import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });

export const metadata: Metadata = {
    title: 'Verity | Modernist',
    description: 'A precise, architectural property marketplace.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${inter.className} min-h-screen bg-white text-neutral-900 antialiased selection:bg-blue-600 selection:text-white`}>
            {children}
        </div>
    );
}
