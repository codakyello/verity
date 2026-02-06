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
        <div className="w-full border-y border-[#D1DDD4] bg-white py-5">
            <div className="container mx-auto flex flex-col gap-5 px-6 md:flex-row md:items-center md:justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9CA3AF]" />
                    <input
                        type="text"
                        placeholder="Search properties..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full border border-[#D1DDD4] bg-[#F4F7F4] py-3 pl-11 pr-4 text-sm text-[#0D2818] outline-none placeholder:text-[#9CA3AF] focus:border-[#0D5C5C] focus:ring-1 focus:ring-[#0D5C5C]"
                    />
                </div>

                {/* Filters */}
                <div className="flex items-center gap-3">
                    <select
                        value={filters.location}
                        onChange={(e) => setLocationFilter(e.target.value)}
                        className="border border-[#D1DDD4] bg-white px-4 py-3 text-sm font-medium text-[#0D2818] outline-none focus:border-[#0D5C5C] cursor-pointer"
                    >
                        <option value="All">All Locations</option>
                        {validLocations.map((loc) => (
                            <option key={loc} value={loc}>{loc}</option>
                        ))}
                    </select>

                    <select
                        value={filters.type}
                        onChange={(e) => setTypeFilter(e.target.value as PropertyType | 'All')}
                        className="border border-[#D1DDD4] bg-white px-4 py-3 text-sm font-medium text-[#0D2818] outline-none focus:border-[#0D5C5C] cursor-pointer"
                    >
                        <option value="All">All Types</option>
                        <option value="Apartment">Apartments</option>
                        <option value="House">Houses</option>
                        <option value="Land">Land</option>
                    </select>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as SortOption)}
                        className="border border-[#D1DDD4] bg-white px-4 py-3 text-sm font-medium text-[#0D2818] outline-none focus:border-[#0D5C5C] cursor-pointer"
                    >
                        <option value="newest">Newest</option>
                        <option value="price-asc">Price: Low → High</option>
                        <option value="price-desc">Price: High → Low</option>
                        <option value="rating">Top Rated</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
