import { Search } from 'lucide-react';
import { PropertyType } from '@/lib/types';

interface FilterBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    filters: {
        location: string;
        type: PropertyType | 'All';
    };
    setLocationFilter: (location: string) => void;
    setTypeFilter: (type: PropertyType | 'All') => void;
    validLocations: string[];
}

export default function FilterBar({
    searchQuery,
    setSearchQuery,
    filters,
    setLocationFilter,
    setTypeFilter,
    validLocations,
}: FilterBarProps) {
    return (
        <div className="mt-20 px-6">
            {/* Search - Glowy */}
            <div className="relative mx-auto max-w-2xl">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF8906] to-[#F25F4C] opacity-20 blur-lg transition duration-500 group-hover:opacity-40"></div>
                <div className="relative flex items-center rounded-2xl border border-white/10 bg-[#16161a] p-2 shadow-xl">
                    <Search className="ml-3 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by city, vibe, or keywords..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1 bg-transparent px-3 py-2 text-white placeholder-gray-500 outline-none"
                    />
                </div>
            </div>

            {/* Categories - Horizontal Scroll */}
            <div className="no-scrollbar mt-8 flex gap-4 overflow-x-auto pb-4">
                {['All', 'Apartment', 'House', 'Land'].map((type) => (
                    <button
                        key={type}
                        onClick={() => setTypeFilter(type === 'All' ? 'All' : type as PropertyType)}
                        className={`whitespace-nowrap rounded-2xl px-6 py-3 text-sm font-bold transition-all duration-300 ${filters.type === type
                                ? 'bg-gradient-to-r from-[#FF8906] to-[#F25F4C] text-white shadow-lg shadow-orange-500/20'
                                : 'bg-[#23222b] text-gray-400 hover:bg-[#2a2933] hover:text-white'
                            }`}
                    >
                        {type === 'All' ? '🔥 All' : type === 'Apartment' ? '🏢 Apartments' : type === 'House' ? '🏡 Houses' : '🌳 Land'}
                    </button>
                ))}
            </div>
        </div>
    );
}
