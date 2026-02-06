import type { Metadata } from 'next';
import { Poppins, Nunito } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-poppins' });
const nunito = Nunito({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-nunito' });

export const metadata: Metadata = {
    title: 'Verity | Dream Home',
    description: 'Where comfort meets possibility.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${poppins.variable} ${nunito.variable} min-h-screen bg-gradient-to-br from-[#F8F6FF] via-[#FFF8F6] to-[#F6FDFF] text-[#374151] font-sans antialiased`}>
            {children}
        </div>
    );
}
