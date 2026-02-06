import type { Metadata } from 'next';
import { Cormorant_Garamond, Karla } from 'next/font/google';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-cormorant' });
const karla = Karla({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-karla' });

export const metadata: Metadata = {
    title: 'Verity | Warm Minimal',
    description: 'Artisanal properties, thoughtfully presented.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${cormorant.variable} ${karla.variable} min-h-screen bg-[#FAF8F5] text-[#2D2926] font-sans antialiased`}>
            {children}
        </div>
    );
}
