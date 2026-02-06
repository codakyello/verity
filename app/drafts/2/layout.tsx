import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const lato = Lato({ subsets: ['latin'], weight: ['300', '400', '700'], variable: '--font-lato' });

export const metadata: Metadata = {
    title: 'Verity | Eco-Luxe',
    description: 'A sustainable, organic marketplace experience.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${playfair.variable} ${lato.variable} min-h-screen bg-[#F9F8F4] text-[#2C3E2C] font-sans selection:bg-[#C17C5F] selection:text-white`}>
            {children}
        </div>
    );
}
