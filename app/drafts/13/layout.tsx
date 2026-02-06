import type { Metadata } from 'next';
import { Fraunces, DM_Sans } from 'next/font/google';

const fraunces = Fraunces({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-fraunces' });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-dm-sans' });

export const metadata: Metadata = {
    title: 'Verity | Forest Nordic',
    description: 'Sophisticated spaces, naturally curated.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${fraunces.variable} ${dmSans.variable} min-h-screen bg-[#F4F7F4] text-[#0D2818] font-sans antialiased`}>
            {children}
        </div>
    );
}
