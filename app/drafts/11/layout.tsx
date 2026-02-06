import type { Metadata } from 'next';
import { DM_Serif_Display, Outfit } from 'next/font/google';

const dmSerif = DM_Serif_Display({ subsets: ['latin'], weight: ['400'], variable: '--font-dm-serif' });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-outfit' });

export const metadata: Metadata = {
    title: 'Verity | Midnight Luxe',
    description: 'Exclusive properties for discerning tastes.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${dmSerif.variable} ${outfit.variable} min-h-screen bg-[#0F0F11] text-[#FAFAFA] font-sans antialiased`}>
            {children}
        </div>
    );
}
