import type { Metadata } from 'next';
import { Urbanist, IBM_Plex_Sans } from 'next/font/google';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-urbanist' });
const ibmPlex = IBM_Plex_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-ibm' });

export const metadata: Metadata = {
    title: 'Verity | Metropolitan',
    description: 'Sophisticated city living, verified.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${urbanist.variable} ${ibmPlex.variable} min-h-screen bg-[#FFFFFF] text-[#1C1C1E] font-sans antialiased`}>
            {children}
        </div>
    );
}
