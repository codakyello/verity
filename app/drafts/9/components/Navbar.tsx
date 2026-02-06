import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full border-b border-[#E5E5E5] bg-white py-4">
            <div className="container mx-auto flex items-center justify-between px-6">
                <div className="flex items-center gap-10">
                    <Link href="/9" className="text-xl font-bold tracking-tight text-[#1C1C1E]">
                        Verity<span className="text-[#10B981]">.</span>
                    </Link>

                    <div className="hidden items-center gap-6 lg:flex">
                        <Link href="#" className="text-sm font-medium text-[#6B7280] transition hover:text-[#1C1C1E]">Properties</Link>
                        <Link href="#" className="text-sm font-medium text-[#6B7280] transition hover:text-[#1C1C1E]">Neighborhoods</Link>
                        <Link href="#" className="text-sm font-medium text-[#6B7280] transition hover:text-[#1C1C1E]">Insights</Link>
                        <Link href="#" className="text-sm font-medium text-[#6B7280] transition hover:text-[#1C1C1E]">About</Link>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="text-sm font-medium text-[#6B7280] transition hover:text-[#1C1C1E]">Sign in</button>
                    <button className="rounded-lg bg-[#1C1C1E] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#374151]">
                        List Property
                    </button>
                </div>
            </div>
        </nav>
    );
}
