import type { Metadata } from 'next';
import { Fraunces, Outfit } from 'next/font/google';
import './styles.css';

const fraunces = Fraunces({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-display'
});

const outfit = Outfit({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-body'
});

export const metadata: Metadata = {
    title: 'Verity | Warm Organic',
    description: 'Properties for conscious, natural living.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${fraunces.variable} ${outfit.variable} design-17`}>
            {children}
        </div>
    );
}
