import { Search } from 'lucide-react';
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
        <div className="w-full bg-white py-5 shadow-[0_2px_8px_rgba(255,107,107,0.08)]">
            <div className="container mx-auto flex flex-col gap-5 px-6 md:flex-row md:items-center md:justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9CA3AF]" />
                    <input
                        type="text"
                        placeholder="Search for your dream home..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full rounded-full border border-[#FFE4DE] bg-[#FFF9F5] py-3 pl-11 pr-4 text-sm text-[#1F2937] outline-none placeholder:text-[#9CA3AF] focus:border-[#FF6B6B] focus:ring-2 focus:ring-[#FF6B6B]/20"
                    />
                </div>

                {/* Filters */}
                <div className="flex items-center gap-3">
                    <select
                        value={filters.location}
                        onChange={(e) => setLocationFilter(e.target.value)}
                        className="rounded-full border border-[#FFE4DE] bg-white px-4 py-2.5 text-sm font-medium text-[#374151] outline-none focus:border-[#FF6B6B] cursor-pointer"
                    >
                        <option value="All">All locations</option>
                        {validLocations.map((loc) => (
                            <option key={loc} value={loc}>{loc}</option>
                        ))}
                    </select>

                    <select
                        value={filters.type}
                        onChange={(e) => setTypeFilter(e.target.value as PropertyType | 'All')}
                        className="rounded-full border border-[#FFE4DE] bg-white px-4 py-2.5 text-sm font-medium text-[#374151] outline-none focus:border-[#FF6B6B] cursor-pointer"
                    >
                        <option value="All">All types</option>
                        <option value="Apartment">Apartments</option>
                        <option value="House">Houses</option>
                        <option value="Land">Land</option>
                    </select>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as SortOption)}
                        className="rounded-full border border-[#FFE4DE] bg-white px-4 py-2.5 text-sm font-medium text-[#374151] outline-none focus:border-[#FF6B6B] cursor-pointer"
                    >
                        <option value="newest">Newest</option>
                        <option value="price-asc">Price ↑</option>
                        <option value="price-desc">Price ↓</option>
                        <option value="rating">Top Rated</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
