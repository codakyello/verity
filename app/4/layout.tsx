import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Roboto } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });
const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700'], variable: '--font-roboto' });

export const metadata: Metadata = {
    title: 'Verity Financial',
    description: 'Verified real estate investment platform.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${plusJakarta.variable} ${roboto.variable} min-h-screen bg-[#F1F5F9] text-[#0F172A] font-sans`}>
            {children}
        </div>
    );
}
