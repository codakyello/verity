import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full border-b border-[#E7E5E4] bg-white sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between px-6 py-5">
                {/* Left Links */}
                <div className="hidden items-center gap-10 md:flex">
                    <Link
                        href="#"
                        className="text-sm text-[#1C1917] hover:text-[#B45309] transition-colors"
                    >
                        Residential
                    </Link>
                    <Link
                        href="#"
                        className="text-sm text-[#1C1917] hover:text-[#B45309] transition-colors"
                    >
                        Commercial
                    </Link>
                </div>

                {/* Logo */}
                <Link href="/25" className="font-display text-2xl text-[#1C1917]">
                    Verity<span className="text-[#B45309]">.</span>
                </Link>

                {/* Right Links */}
                <div className="flex items-center gap-6">
                    <button className="text-sm text-[#1C1917] hover:text-[#B45309] transition-colors">
                        Sign In
                    </button>
                    <button className="border border-[#B45309] text-[#B45309] px-5 py-2 text-sm hover:bg-[#B45309] hover:text-white transition-all">
                        Connect
                    </button>
                </div>
            </div>
        </nav>
    );
}
