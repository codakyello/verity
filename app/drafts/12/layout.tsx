import type { Metadata } from 'next';
import { Nunito_Sans, Source_Sans_3 } from 'next/font/google';

const nunitoSans = Nunito_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-nunito' });
const sourceSans = Source_Sans_3({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-source' });

export const metadata: Metadata = {
    title: 'Verity | Coral Sunrise',
    description: 'Find your dream home with warmth and care.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${nunitoSans.variable} ${sourceSans.variable} min-h-screen bg-[#FFF9F5] text-[#1F2937] font-sans antialiased`}>
            {children}
        </div>
    );
}
