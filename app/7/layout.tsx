import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-cormorant' });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-montserrat' });

export const metadata: Metadata = {
    title: 'VERITY | Curated Living',
    description: 'The art of exceptional property.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${cormorant.variable} ${montserrat.variable} min-h-screen bg-[#FAF8F5] text-[#111111] antialiased`}>
            {children}
        </div>
    );
}
