import type { Metadata } from 'next';
import { Outfit, DM_Sans } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm' });

export const metadata: Metadata = {
    title: 'Verity | Live Loud',
    description: 'Find the crib that matches your energy.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${outfit.variable} ${dmSans.variable} min-h-screen bg-[#0F0E17] text-white font-sans selection:bg-[#FF8906] selection:text-white`}>
            {children}
        </div>
    );
}
