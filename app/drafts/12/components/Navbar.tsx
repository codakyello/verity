import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full bg-[#FFF9F5] py-5">
            <div className="container mx-auto flex items-center justify-between px-6">
                <Link href="/12" className="text-xl font-extrabold tracking-tight text-[#1F2937]">
                    verity<span className="text-[#FF6B6B]">♥</span>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    <Link href="#" className="text-sm font-semibold text-[#6B7280] transition hover:text-[#FF6B6B]">Explore</Link>
                    <Link href="#" className="text-sm font-semibold text-[#6B7280] transition hover:text-[#FF6B6B]">About</Link>
                    <Link href="#" className="text-sm font-semibold text-[#6B7280] transition hover:text-[#FF6B6B]">Contact</Link>
                </div>

                <div className="flex items-center gap-4">
                    <button className="text-sm font-semibold text-[#6B7280] transition hover:text-[#1F2937]">Sign in</button>
                    <button className="rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#FF6B6B]/25 transition hover:shadow-xl hover:shadow-[#FF6B6B]/30">
                        Get started
                    </button>
                </div>
            </div>
        </nav>
    );
}
