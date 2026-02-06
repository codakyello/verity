import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full border-b border-[#27272A] bg-[#0F0F11] py-4">
            <div className="container mx-auto flex items-center justify-between px-6">
                <div className="flex items-center gap-10">
                    <Link href="/11" className="font-serif text-xl tracking-wide text-[#FAFAFA]">
                        Verity<span className="text-[#D4AF37]">.</span>
                    </Link>

                    <div className="hidden items-center gap-6 lg:flex">
                        <Link href="#" className="text-sm font-medium text-[#71717A] transition hover:text-[#D4AF37]">Properties</Link>
                        <Link href="#" className="text-sm font-medium text-[#71717A] transition hover:text-[#D4AF37]">Collections</Link>
                        <Link href="#" className="text-sm font-medium text-[#71717A] transition hover:text-[#D4AF37]">About</Link>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="text-sm font-medium text-[#71717A] transition hover:text-[#FAFAFA]">Sign in</button>
                    <button className="rounded border border-[#D4AF37] px-4 py-2 text-sm font-medium text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#0F0F11]">
                        List Property
                    </button>
                </div>
            </div>
        </nav>
    );
}
