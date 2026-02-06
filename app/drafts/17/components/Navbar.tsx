import Link from 'next/link';
import { Leaf } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="w-full bg-[#FBF8F3] py-6">
            <div className="container mx-auto flex items-center justify-between px-6">
                {/* Left Links */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link
                        href="#"
                        className="text-sm text-[#2D2A26] hover:text-[#C17F59] transition-colors"
                    >
                        Homes
                    </Link>
                    <Link
                        href="#"
                        className="text-sm text-[#2D2A26] hover:text-[#C17F59] transition-colors"
                    >
                        Land
                    </Link>
                    <Link
                        href="#"
                        className="text-sm text-[#2D2A26] hover:text-[#C17F59] transition-colors"
                    >
                        About
                    </Link>
                </div>

                {/* Logo */}
                <Link href="/17" className="flex items-center gap-2">
                    <Leaf className="h-6 w-6 text-[#6B7B5E]" />
                    <span className="font-display text-2xl text-[#2D2A26]">Verity</span>
                </Link>

                {/* Right Links */}
                <div className="flex items-center gap-5">
                    <button className="text-sm text-[#2D2A26] hover:text-[#C17F59] transition-colors">
                        Sign In
                    </button>
                    <button className="rounded-full bg-[#6B7B5E] px-6 py-2.5 text-sm text-white hover:bg-[#5a6a4f] transition-colors">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
}
