import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0F0E17]/80 px-6 py-5 backdrop-blur-xl">
            <div className="flex items-center justify-between">
                <Link href="/5" className="bg-gradient-to-r from-[#FF8906] to-[#F25F4C] bg-clip-text text-3xl font-bold tracking-tight text-transparent">
                    verity.
                </Link>

                <div className="flex items-center gap-4">
                    <button className="h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10">
                        {/* User Avatar Placeholder */}
                        <div className="h-full w-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
                    </button>
                </div>
            </div>
        </nav>
    );
}
