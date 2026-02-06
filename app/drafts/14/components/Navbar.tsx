import Link from 'next/link';
import { Zap } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="w-full border-b border-[#E5E7EB] bg-white/80 backdrop-blur-md py-4">
            <div className="container mx-auto flex items-center justify-between px-6">
                <div className="flex items-center gap-10">
                    <Link href="/14" className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#EC4899]">
                            <Zap className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-lg font-bold text-[#1A1A2E]">Verity</span>
                    </Link>

                    <div className="hidden items-center gap-6 lg:flex">
                        <Link href="#" className="text-sm font-medium text-[#64748B] transition hover:text-[#7C3AED]">Properties</Link>
                        <Link href="#" className="text-sm font-medium text-[#64748B] transition hover:text-[#7C3AED]">Pricing</Link>
                        <Link href="#" className="text-sm font-medium text-[#64748B] transition hover:text-[#7C3AED]">Developers</Link>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="text-sm font-medium text-[#64748B] transition hover:text-[#1A1A2E]">Sign in</button>
                    <button className="rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#EC4899] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#7C3AED]/25 transition hover:shadow-xl hover:shadow-[#7C3AED]/30">
                        Get started →
                    </button>
                </div>
            </div>
        </nav>
    );
}
