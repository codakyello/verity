import type { Metadata } from 'next';
import { Manrope, Work_Sans } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const workSans = Work_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-work' });

export const metadata: Metadata = {
    title: 'Verity | Find Your Calm',
    description: 'Properties designed for peaceful living.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${manrope.variable} ${workSans.variable} min-h-screen bg-[#FAFAFA] text-[#1A1A1A] font-sans antialiased`}>
            {children}
        </div>
    );
}
