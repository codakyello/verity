import Link from 'next/link';
import { Zap } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="w-full border-b border-[#1F1F2E] bg-[#0A0A0F]/80 backdrop-blur-xl sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/20" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#06B6D4]">
                        <Zap className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-display text-xl font-bold text-white">verity</span>
                </Link>

                {/* Center Links */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link
                        href="#"
                        className="text-sm text-[#9CA3AF] hover:text-white transition-colors"
                    >
                        Properties
                    </Link>
                    <Link
                        href="#"
                        className="text-sm text-[#9CA3AF] hover:text-white transition-colors"
                    >
                        Analytics
                    </Link>
                    <Link
                        href="#"
                        className="text-sm text-[#9CA3AF] hover:text-white transition-colors"
                    >
                        Pricing
                    </Link>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4">
                    <button className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                        Sign In
                    </button>
                    <button className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] px-5 py-2 text-sm font-medium text-white rounded-lg hover:opacity-90 transition-opacity">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
}
