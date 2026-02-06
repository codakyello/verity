import type { Metadata } from 'next';
import { Syne, Space_Grotesk } from 'next/font/google';
import './styles.css';

const syne = Syne({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    variable: '--font-display'
});

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-body'
});

export const metadata: Metadata = {
    title: 'Verity | Modern Tech',
    description: 'The future of property discovery.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${syne.variable} ${spaceGrotesk.variable} design-20`}>
            {children}
        </div>
    );
}
