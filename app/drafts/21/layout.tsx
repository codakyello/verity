import type { Metadata } from 'next';
import { Libre_Baskerville, Inter } from 'next/font/google';
import './styles.css';

const libreBaskerville = Libre_Baskerville({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    variable: '--font-display'
});

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-body'
});

export const metadata: Metadata = {
    title: 'Verity | Deep Navy',
    description: 'Premium property discovery platform.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${libreBaskerville.variable} ${inter.variable} design-21`}>
            {children}
        </div>
    );
}
