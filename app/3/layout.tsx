import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
    title: 'VERITY_PROTOCOL',
    description: 'Decentralized property verification.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${spaceGrotesk.variable} ${jetbrains.variable} min-h-screen bg-[#E0E0E0] text-black font-sans selection:bg-[#CCFF00] selection:text-black`}>
            {children}
        </div>
    );
}
