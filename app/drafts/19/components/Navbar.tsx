import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full bg-[#FFFBF5] py-6 border-b border-[#E8E0D5]">
            <div className="container mx-auto flex items-center justify-between px-6">
                {/* Left Links */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link
                        href="#"
                        className="text-sm text-[#1A1A1A] hover:text-[#8B2635] transition-colors"
                    >
                        Residences
                    </Link>
                    <Link
                        href="#"
                        className="text-sm text-[#1A1A1A] hover:text-[#8B2635] transition-colors"
                    >
                        Estates
                    </Link>
                </div>

                {/* Logo */}
                <Link href="/19" className="text-center">
                    <span className="font-display text-3xl text-[#1A1A1A]">Verity</span>
                    <span className="block text-[10px] tracking-[0.4em] uppercase text-[#C9A962] mt-0.5">Properties</span>
                </Link>

                {/* Right Links */}
                <div className="flex items-center gap-6">
                    <button className="text-sm text-[#1A1A1A] hover:text-[#8B2635] transition-colors">
                        Sign In
                    </button>
                    <button className="border-2 border-[#8B2635] text-[#8B2635] px-6 py-2.5 text-sm font-medium hover:bg-[#8B2635] hover:text-white transition-all">
                        Inquire
                    </button>
                </div>
            </div>
        </nav>
    );
}
