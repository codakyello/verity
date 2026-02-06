import type { Metadata } from 'next';
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';
import './styles.css';

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-display'
});

const sourceSans = Source_Sans_3({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-body'
});

export const metadata: Metadata = {
    title: 'Verity | Classic Luxury',
    description: 'Timeless elegance in property discovery.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${playfair.variable} ${sourceSans.variable} design-19`}>
            {children}
        </div>
    );
}
