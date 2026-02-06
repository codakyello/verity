import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full bg-[#FAFAFA] py-6">
            <div className="container mx-auto flex items-center justify-between px-8">
                <Link href="/6" className="font-sans text-xl font-semibold tracking-tight text-[#1A1A1A]">
                    verity
                </Link>

                <div className="hidden items-center gap-10 md:flex">
                    <Link href="#" className="text-sm font-medium text-[#6B7280] transition hover:text-[#1A1A1A]">Explore</Link>
                    <Link href="#" className="text-sm font-medium text-[#6B7280] transition hover:text-[#1A1A1A]">About</Link>
                    <Link href="#" className="text-sm font-medium text-[#6B7280] transition hover:text-[#1A1A1A]">Contact</Link>
                </div>

                <div className="flex items-center gap-4">
                    <button className="text-sm font-medium text-[#6B7280] transition hover:text-[#1A1A1A]">Sign in</button>
                    <button className="rounded-full bg-[#1A1A1A] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#374151]">
                        Get started
                    </button>
                </div>
            </div>
        </nav>
    );
}
