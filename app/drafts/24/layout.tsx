import type { Metadata } from 'next';
import { EB_Garamond, Karla } from 'next/font/google';
import './styles.css';

const ebGaramond = EB_Garamond({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    style: ['normal', 'italic'],
    variable: '--font-display'
});

const karla = Karla({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-body'
});

export const metadata: Metadata = {
    title: 'Verity | Slate',
    description: 'Premium property discovery platform.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${ebGaramond.variable} ${karla.variable} design-24`}>
            {children}
        </div>
    );
}
