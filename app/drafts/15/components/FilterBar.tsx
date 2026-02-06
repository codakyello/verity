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
        <div className="w-full bg-white py-5 border-y border-[#E8E2DB]">
            <div className="container mx-auto flex flex-col gap-6 px-8 md:flex-row md:items-center md:justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#B8A898]" />
                    <input
                        type="text"
                        placeholder="Search locations..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full rounded border border-[#E8E2DB] bg-[#FAF8F5] py-3 pl-11 pr-4 text-sm text-[#2D2926] outline-none placeholder:text-[#B8A898] focus:border-[#C65D3B] focus:ring-1 focus:ring-[#C65D3B]/20"
                    />
                </div>

                {/* Filters */}
                <div className="flex items-center gap-3">
                    <select
                        value={filters.location}
                        onChange={(e) => setLocationFilter(e.target.value)}
                        className="rounded border border-[#E8E2DB] bg-white px-4 py-2.5 text-sm font-medium text-[#2D2926] outline-none focus:border-[#C65D3B] cursor-pointer"
                    >
                        <option value="All">All locations</option>
                        {validLocations.map((loc) => (
                            <option key={loc} value={loc}>{loc}</option>
                        ))}
                    </select>

                    <select
                        value={filters.type}
                        onChange={(e) => setTypeFilter(e.target.value as PropertyType | 'All')}
                        className="rounded border border-[#E8E2DB] bg-white px-4 py-2.5 text-sm font-medium text-[#2D2926] outline-none focus:border-[#C65D3B] cursor-pointer"
                    >
                        <option value="All">All types</option>
                        <option value="Apartment">Apartments</option>
                        <option value="House">Houses</option>
                        <option value="Land">Land</option>
                    </select>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as SortOption)}
                        className="rounded border border-[#E8E2DB] bg-white px-4 py-2.5 text-sm font-medium text-[#2D2926] outline-none focus:border-[#C65D3B] cursor-pointer"
                    >
                        <option value="newest">Newest</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="rating">Top Rated</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
