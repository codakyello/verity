'use client';

import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

interface HeroProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export default function Hero({ searchQuery, setSearchQuery }: HeroProps) {
    const router = useRouter();

    const handleSearch = () => {
        if (searchQuery.trim()) {
            router.push(`/browse?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <section className="relative h-[50vh] w-full">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/hero-realtor-ref.webp"
                    alt="Luxury home"
                    className="h-full w-full object-cover brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
            </div>

            {/* Content Container */}
            <div className="relative flex h-full flex-col justify-center px-6 md:px-12 lg:px-24">
                <div className="w-full max-w-4xl mx-auto lg:mx-0">
                    <h1 className="mb-8 font-display text-5xl font-bold leading-tight text-white drop-shadow-xl lg:text-7xl text-center lg:text-left">
                        Rentals. Homes. <br /> Agents. Loans.
                    </h1>
                    <p className="mb-8 text-xl text-white font-medium drop-shadow-md text-center lg:text-left max-w-2xl">
                        Let’s find a home that’s perfect for you.
                    </p>

                    {/* Search Bar */}
                    <div className="relative flex w-full max-w-[600px] items-center rounded-full bg-white px-2 py-2 shadow-2xl mx-auto lg:mx-0 transition-transform hover:scale-[1.01]">
                        <input
                            type="text"
                            placeholder="Address, School, City, Zip or Neighborhood"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                            className="flex-1 bg-transparent px-6 py-3 text-lg text-[#1A1A2E] placeholder:text-gray-400 focus:outline-none"
                        />
                        <button
                            onClick={handleSearch}
                            className="ml-2 bg-[#1F3A5F] hover:bg-[#162942] p-4 rounded-full transition-colors group"
                        >
                            <Search className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
