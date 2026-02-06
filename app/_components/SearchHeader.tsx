'use client';

import { useRouter } from 'next/navigation';
import { Search, Heart } from 'lucide-react';

interface SearchHeaderProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    totalCount: number;
}

export default function SearchHeader({ searchQuery, setSearchQuery, totalCount }: SearchHeaderProps) {
    const router = useRouter();

    const handleSearch = () => {
        router.push(`/browse?q=${encodeURIComponent(searchQuery)}`);
    };

    return (
        <div className="sticky top-[72px] z-40 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4 lg:px-6 py-4">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    {/* Search Input */}
                    <div className="relative flex-1 max-w-2xl">
                        <input
                            type="text"
                            placeholder="Address, City, Zip, Neighborhood"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                            className="w-full rounded-full border border-gray-300 py-3 pl-6 pr-12 text-[#1a1816] placeholder:text-gray-400 focus:border-[#1F3A5F] focus:outline-none focus:ring-1 focus:ring-[#1F3A5F] shadow-sm transition-all"
                        />
                        <button
                            onClick={handleSearch}
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#1F3A5F] p-2 text-white hover:bg-[#162942] transition-colors"
                        >
                            <Search className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-bold text-[#1F3A5F] hover:bg-gray-50 transition-colors">
                            <Heart className="h-4 w-4" />
                            <span>Save Search</span>
                        </button>

                        {/* Map Toggle (Visual only for now) */}
                        <button className="hidden md:flex items-center gap-2 rounded-full bg-gray-100 px-1 py-1 text-sm font-bold">
                            <span className="rounded-full bg-white text-[#1F3A5F] shadow-sm px-4 py-1.5">List</span>
                            <span className="px-4 py-1.5 text-gray-500 hover:text-[#1a1816] transition-colors">Map</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
