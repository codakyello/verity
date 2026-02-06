import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="border-b-4 border-black bg-[#CCFF00] px-6 py-6 font-mono">
            <div className="flex flex-col items-start justify-between gap-4 border-l-4 border-black pl-4 md:flex-row md:items-center">
                <Link href="/3" className="text-4xl font-black uppercase tracking-tighter hover:underline">
                    VERITY_PROTOCOL
                </Link>
                <div className="flex gap-4">
                    <button className="border-2 border-black bg-white px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
                        CONNECT_WALLET
                    </button>
                </div>
            </div>
        </nav>
    );
}
