import type { Metadata } from 'next';
import { Bebas_Neue, Inter } from 'next/font/google';
import './styles.css';

const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-display'
});

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-body'
});

export const metadata: Metadata = {
    title: 'Verity | Bold Editorial',
    description: 'Property discovery with impact.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${bebas.variable} ${inter.variable} design-18`}>
            {children}
        </div>
    );
}
