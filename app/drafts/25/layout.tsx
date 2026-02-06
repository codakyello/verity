import type { Metadata } from 'next';
import { Spectral, Public_Sans } from 'next/font/google';
import './styles.css';

const spectral = Spectral({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'],
    variable: '--font-display'
});

const publicSans = Public_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-body'
});

export const metadata: Metadata = {
    title: 'Verity | Bronze',
    description: 'Premium property discovery platform.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${spectral.variable} ${publicSans.variable} design-25`}>
            {children}
        </div>
    );
}
