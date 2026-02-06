import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full bg-[#FAF8F5] py-6">
            <div className="container mx-auto flex items-center justify-between px-8">
                <Link href="/15" className="font-serif text-xl font-medium tracking-wide text-[#2D2926]">
                    verity
                </Link>

                <div className="hidden items-center gap-10 md:flex">
                    <Link href="#" className="text-sm font-medium text-[#8B7355] transition hover:text-[#C65D3B]">Explore</Link>
                    <Link href="#" className="text-sm font-medium text-[#8B7355] transition hover:text-[#C65D3B]">About</Link>
                    <Link href="#" className="text-sm font-medium text-[#8B7355] transition hover:text-[#C65D3B]">Contact</Link>
                </div>

                <div className="flex items-center gap-4">
                    <button className="text-sm font-medium text-[#8B7355] transition hover:text-[#2D2926]">Sign in</button>
                    <button className="bg-[#C65D3B] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#A84D2F]">
                        Get started
                    </button>
                </div>
            </div>
        </nav>
    );
}
