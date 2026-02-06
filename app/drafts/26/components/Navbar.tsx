import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full border-b border-[#E5E7EB] bg-white sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between px-6 py-5">
                {/* Left Links */}
                <div className="hidden items-center gap-10 md:flex">
                    <Link
                        href="#"
                        className="text-sm text-[#1A1A2E] hover:text-[#B8860B] transition-colors"
                    >
                        Residential
                    </Link>
                    <Link
                        href="#"
                        className="text-sm text-[#1A1A2E] hover:text-[#B8860B] transition-colors"
                    >
                        Commercial
                    </Link>
                </div>

                {/* Logo */}
                <Link href="/26" className="font-display text-2xl text-[#1A1A2E]">
                    Verity<span className="text-[#B8860B]">.</span>
                </Link>

                {/* Right Links */}
                <div className="flex items-center gap-6">
                    <button className="text-sm text-[#1A1A2E] hover:text-[#B8860B] transition-colors">
                        Sign In
                    </button>
                    <button className="border border-[#1E3A5F] text-[#1E3A5F] px-5 py-2 text-sm hover:bg-[#1E3A5F] hover:text-white transition-all">
                        Connect
                    </button>
                </div>
            </div>
        </nav>
    );
}
