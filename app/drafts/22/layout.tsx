import type { Metadata } from 'next';
import { Crimson_Pro, Work_Sans } from 'next/font/google';
import './styles.css';

const crimsonPro = Crimson_Pro({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'],
    variable: '--font-display'
});

const workSans = Work_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-body'
});

export const metadata: Metadata = {
    title: 'Verity | Forest Green',
    description: 'Premium property discovery platform.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${crimsonPro.variable} ${workSans.variable} design-22`}>
            {children}
        </div>
    );
}
