import type { Metadata } from 'next';
import { Space_Grotesk, Figtree } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-space' });
const figtree = Figtree({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-figtree' });

export const metadata: Metadata = {
    title: 'Verity | Electric Violet',
    description: 'The future of property discovery.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${spaceGrotesk.variable} ${figtree.variable} min-h-screen bg-[#FAFBFF] text-[#1A1A2E] font-sans antialiased`}>
            {children}
        </div>
    );
}
