import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full py-5">
            <div className="container mx-auto flex items-center justify-between px-6">
                <Link href="/8" className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#A78BFA] to-[#F472B6] shadow-lg shadow-purple-200">
                        <span className="text-sm font-bold text-white">V</span>
                    </div>
                    <span className="text-lg font-semibold text-[#374151]">verity</span>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    <Link href="#" className="text-sm font-medium text-[#6B7280] transition hover:text-[#A78BFA]">Browse</Link>
                    <Link href="#" className="text-sm font-medium text-[#6B7280] transition hover:text-[#A78BFA]">Favorites</Link>
                    <Link href="#" className="text-sm font-medium text-[#6B7280] transition hover:text-[#A78BFA]">Help</Link>
                </div>

                <div className="flex items-center gap-3">
                    <button className="text-sm font-medium text-[#6B7280] transition hover:text-[#374151]">Log in</button>
                    <button className="rounded-xl bg-gradient-to-r from-[#A78BFA] to-[#F472B6] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:shadow-xl hover:shadow-purple-300">
                        Sign up
                    </button>
                </div>
            </div>
        </nav>
    );
}
