import type { Metadata } from 'next';
import { Lora, Source_Sans_3 } from 'next/font/google';
import './styles.css';

const lora = Lora({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'],
    variable: '--font-display'
});

const sourceSans = Source_Sans_3({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-body'
});

export const metadata: Metadata = {
    title: 'Verity | Burgundy',
    description: 'Premium property discovery platform.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${lora.variable} ${sourceSans.variable} design-23`}>
            {children}
        </div>
    );
}
