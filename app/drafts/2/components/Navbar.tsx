import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full bg-[#F9F8F4] py-8">
            <div className="container mx-auto flex flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
                {/* Left Links */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link href="#" className="font-sans text-sm tracking-wide text-[#2C3E2C] hover:text-[#C17C5F]">Residential</Link>
                    <Link href="#" className="font-sans text-sm tracking-wide text-[#2C3E2C] hover:text-[#C17C5F]">Commercial</Link>
                </div>

                {/* Logo */}
                <Link href="/2" className="font-serif text-3xl font-medium tracking-wide text-[#2C3E2C]">
                    Verity<span className="text-[#C17C5F]">.</span>
                </Link>

                {/* Right Links */}
                <div className="flex items-center gap-6">
                    <button className="font-sans text-sm tracking-wide text-[#2C3E2C] hover:text-[#C17C5F]">Sign In</button>
                    <button className="rounded-full bg-[#2C3E2C] px-6 py-2.5 font-sans text-sm tracking-wide text-white transition hover:bg-[#1a261a] hover:shadow-lg">
                        Connect
                    </button>
                </div>
            </div>
        </nav>
    );
}
