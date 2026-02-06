import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full bg-[#F4F7F4] py-6">
            <div className="container mx-auto flex flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
                {/* Left Links */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link href="#" className="text-sm font-medium tracking-wide text-[#4A6455] hover:text-[#0D5C5C]">Residential</Link>
                    <Link href="#" className="text-sm font-medium tracking-wide text-[#4A6455] hover:text-[#0D5C5C]">Commercial</Link>
                </div>

                {/* Logo */}
                <Link href="/13" className="font-serif text-2xl font-medium tracking-wide text-[#0D2818]">
                    VERITY
                </Link>

                {/* Right Links */}
                <div className="flex items-center gap-6">
                    <button className="text-sm font-medium text-[#4A6455] hover:text-[#0D2818]">Sign In</button>
                    <button className="bg-[#0D5C5C] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#0A4A4A]">
                        List Property
                    </button>
                </div>
            </div>
        </nav>
    );
}
