import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-12">
                    <Link href="/4" className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded bg-[#0F172A] text-white">
                            <span className="font-bold">V</span>
                        </div>
                        <span className="text-lg font-bold tracking-tight text-[#0F172A]">Verity Financial</span>
                    </Link>

                    <div className="flex space-x-1 bg-slate-100 p-1 rounded-md">
                        <button className="rounded bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">Marketplace</button>
                        <button className="rounded px-4 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900">Analytics</button>
                        <button className="rounded px-4 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900">Portfolio</button>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex flex-col text-right">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Status</span>
                        <span className="flex items-center gap-1.5 text-xs font-bold text-green-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-600 animate-pulse"></span>
                            SYSTEM ONLINE
                        </span>
                    </div>
                    <div className="h-8 w-px bg-slate-200"></div>
                    <button className="text-sm font-semibold text-slate-600">Log In</button>
                    <button className="rounded bg-[#0EA5E9] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#0284C7]">
                        Open Account
                    </button>
                </div>
            </div>
        </nav>
    );
}
