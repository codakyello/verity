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
        <div className="w-full bg-[#F9FAFB] py-5 border-b border-[#E5E7EB]">
            <div className="container mx-auto flex flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-lg">
                    <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9CA3AF]" />
                    <input
                        type="text"
                        placeholder="Search properties..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full rounded-xl border border-[#E5E7EB] bg-white py-3 pl-11 pr-4 text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF] focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/20"
                    />
                </div>

                {/* Filters */}
                <div className="flex items-center gap-2">
                    <select
                        value={filters.location}
                        onChange={(e) => setLocationFilter(e.target.value)}
                        className="rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-medium text-[#374151] outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/20"
                    >
                        <option value="All">All Locations</option>
                        {validLocations.map((loc) => (
                            <option key={loc} value={loc}>{loc}</option>
                        ))}
                    </select>

                    <select
                        value={filters.type}
                        onChange={(e) => setTypeFilter(e.target.value as PropertyType | 'All')}
                        className="rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-medium text-[#374151] outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/20"
                    >
                        <option value="All">All Types</option>
                        <option value="Apartment">Apartment</option>
                        <option value="House">House</option>
                        <option value="Office">Office</option>
                        <option value="Land">Land</option>
                    </select>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as SortOption)}
                        className="rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-medium text-[#374151] outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/20"
                    >
                        <option value="newest">Newest</option>
                        <option value="price-asc">Price ↑</option>
                        <option value="price-desc">Price ↓</option>
                        <option value="rating">Top Rated</option>
                    </select>

                    <button className="flex items-center gap-2 rounded-xl border border-[#6366F1] bg-[#6366F1]/10 px-4 py-3 text-sm font-semibold text-[#6366F1] transition hover:bg-[#6366F1] hover:text-white">
                        <SlidersHorizontal className="h-4 w-4" /> More
                    </button>
                </div>
            </div>
        </div>
    );
}
