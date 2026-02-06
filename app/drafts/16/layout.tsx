import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './styles.css';

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-display'
});

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-body'
});

export const metadata: Metadata = {
    title: 'Verity | Elegant Serif',
    description: 'Refined property discovery for discerning buyers.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${cormorant.variable} ${dmSans.variable} design-16`}>
            {children}
        </div>
    );
}
