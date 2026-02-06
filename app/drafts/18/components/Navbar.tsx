import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full border-b border-[#E5E5E5] bg-white sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/18" className="font-display text-3xl tracking-wide text-[#0A0A0A]">
                    VERITY
                </Link>

                {/* Center Links */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link
                        href="#"
                        className="text-sm font-medium text-[#0A0A0A] hover:text-[#FF3D00] transition-colors"
                    >
                        Properties
                    </Link>
                    <Link
                        href="#"
                        className="text-sm font-medium text-[#0A0A0A] hover:text-[#FF3D00] transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        href="#"
                        className="text-sm font-medium text-[#0A0A0A] hover:text-[#FF3D00] transition-colors"
                    >
                        Contact
                    </Link>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4">
                    <button className="text-sm font-medium text-[#0A0A0A] hover:text-[#FF3D00] transition-colors">
                        Sign In
                    </button>
                    <button className="bg-[#0A0A0A] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#FF3D00] transition-colors">
                        List Property
                    </button>
                </div>
            </div>
        </nav>
    );
}
