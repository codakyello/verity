import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full border-b border-neutral-100 bg-white py-6">
            <div className="container mx-auto flex items-center justify-between px-6">
                <div className="flex items-center gap-12">
                    <Link href="/1" className="text-2xl font-bold tracking-tighter text-blue-600">
                        VERITY.
                    </Link>
                    <div className="hidden space-x-8 md:flex">
                        <Link href="#" className="text-sm font-medium text-neutral-500 transition hover:text-black">Buy</Link>
                        <Link href="#" className="text-sm font-medium text-neutral-500 transition hover:text-black">Rent</Link>
                        <Link href="#" className="text-sm font-medium text-neutral-500 transition hover:text-black">Sell</Link>
                        <Link href="#" className="text-sm font-medium text-neutral-500 transition hover:text-black">Verify</Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className="text-sm font-medium text-neutral-900">Sign In</button>
                    <button className="bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
}
