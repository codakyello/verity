import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full border-b border-[#E5E7EB] bg-white py-4">
            <div className="container mx-auto flex items-center justify-between px-6">
                <div className="flex items-center gap-10">
                    <Link href="/10" className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6366F1]">
                            <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className="text-lg font-bold text-[#111827]">Verity</span>
                    </Link>

                    <div className="hidden items-center gap-6 lg:flex">
                        <Link href="#" className="text-sm font-medium text-[#6B7280] transition hover:text-[#6366F1]">Properties</Link>
                        <Link href="#" className="text-sm font-medium text-[#6B7280] transition hover:text-[#6366F1]">Pricing</Link>
                        <Link href="#" className="text-sm font-medium text-[#6B7280] transition hover:text-[#6366F1]">Developers</Link>
                        <Link href="#" className="text-sm font-medium text-[#6B7280] transition hover:text-[#6366F1]">Resources</Link>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="text-sm font-medium text-[#6B7280] transition hover:text-[#111827]">Sign in</button>
                    <button className="rounded-lg bg-[#6366F1] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4F46E5] shadow-sm shadow-indigo-200">
                        Get started →
                    </button>
                </div>
            </div>
        </nav>
    );
}
