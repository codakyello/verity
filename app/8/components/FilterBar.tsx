import { Search, SlidersHorizontal } from 'lucide-react';
import { PropertyType, SortOption } from '@/lib/types';

interface FilterBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    filters: { location: string; type: PropertyType | 'All' };
    setLocationFilter: (location: string) => void;
    setTypeFilter: (type: PropertyType | 'All') => void;
    sortBy: SortOption;
    setSortBy: (sort: SortOption) => void;
    validLocations: string[];
}

export default function FilterBar({
    searchQuery,
    setSearchQuery,
    filters,
    setLocationFilter,
    setTypeFilter,
    sortBy,
    setSortBy,
    validLocations,
}: FilterBarProps) {
    return (
        <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                {/* Search - Pill shaped */}
                <div className="relative flex-1 max-w-lg">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#A78BFA]/20 to-[#F472B6]/20 blur-xl"></div>
                    <div className="relative flex items-center rounded-2xl bg-white px-5 py-3 shadow-sm">
                        <Search className="h-5 w-5 text-[#9CA3AF]" />
                        <input
                            type="text"
                            placeholder="Search your dream home..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="ml-3 flex-1 bg-transparent text-sm text-[#374151] outline-none placeholder:text-[#9CA3AF]"
                        />
                    </div>
                </div>

                {/* Filter Chips */}
                <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0">
                    <select
                        value={filters.type}
                        onChange={(e) => setTypeFilter(e.target.value as PropertyType | 'All')}
                        className="rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm font-medium text-[#374151] outline-none focus:border-[#A78BFA] focus:ring-2 focus:ring-[#A78BFA]/20"
                    >
                        <option value="All">All Types</option>
                        <option value="Apartment">🏢 Apartments</option>
                        <option value="House">🏡 Houses</option>
                        <option value="Land">🌳 Land</option>
                    </select>

                    <select
                        value={filters.location}
                        onChange={(e) => setLocationFilter(e.target.value)}
                        className="rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm font-medium text-[#374151] outline-none focus:border-[#A78BFA] focus:ring-2 focus:ring-[#A78BFA]/20"
                    >
                        <option value="All">📍 Anywhere</option>
                        {validLocations.map((loc) => (
                            <option key={loc} value={loc}>{loc}</option>
                        ))}
                    </select>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as SortOption)}
                        className="rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm font-medium text-[#374151] outline-none focus:border-[#A78BFA] focus:ring-2 focus:ring-[#A78BFA]/20"
                    >
                        <option value="newest">✨ Newest</option>
                        <option value="price-asc">💰 Low to High</option>
                        <option value="price-desc">💎 High to Low</option>
                        <option value="rating">⭐ Top Rated</option>
                    </select>

                    <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#A78BFA] to-[#F472B6] px-4 py-2.5 text-sm font-semibold text-white shadow-sm">
                        <SlidersHorizontal className="h-4 w-4" /> Filters
                    </button>
                </div>
            </div>
        </div>
    );
}
