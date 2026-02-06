import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full border-b border-[#E8E4DD] bg-[#FAF8F5] py-5">
            <div className="container mx-auto flex items-center justify-between px-8">
                <div className="flex items-center gap-12">
                    <Link href="/7" className="font-serif text-2xl font-medium tracking-wide text-[#111111]">
                        VERITY
                    </Link>
                    <div className="hidden items-center gap-8 lg:flex">
                        <Link href="#" className="text-xs font-medium tracking-widest text-[#6B6B6B] uppercase transition hover:text-[#B5915A]">Residences</Link>
                        <Link href="#" className="text-xs font-medium tracking-widest text-[#6B6B6B] uppercase transition hover:text-[#B5915A]">Estates</Link>
                        <Link href="#" className="text-xs font-medium tracking-widest text-[#6B6B6B] uppercase transition hover:text-[#B5915A]">Journal</Link>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <button className="text-xs font-medium tracking-widest text-[#6B6B6B] uppercase transition hover:text-[#111111]">
                        Sign In
                    </button>
                    <button className="border border-[#111111] bg-[#111111] px-6 py-2.5 text-xs font-medium tracking-widest text-white uppercase transition hover:bg-transparent hover:text-[#111111]">
                        Inquire
                    </button>
                </div>
            </div>
        </nav>
    );
}
