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
        <div className="w-full border-b border-[#E8E4DD] bg-[#FAF8F5] py-6">
            <div className="container mx-auto flex flex-col gap-6 px-8 lg:flex-row lg:items-center lg:justify-between">
                {/* Search - underline style */}
                <div className="relative max-w-sm flex-1">
                    <input
                        type="text"
                        placeholder="Search properties..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full border-b border-[#CCCCCC] bg-transparent py-2 pr-10 font-sans text-sm text-[#111111] outline-none placeholder:text-[#9CA3AF] focus:border-[#B5915A]"
                    />
                    <Search className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9CA3AF]" />
                </div>

                {/* Filters - refined dropdowns */}
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-medium tracking-wider text-[#6B6B6B] uppercase">Location</span>
                        <select
                            value={filters.location}
                            onChange={(e) => setLocationFilter(e.target.value)}
                            className="border-b border-[#CCCCCC] bg-transparent py-1 font-sans text-sm font-medium text-[#111111] outline-none focus:border-[#B5915A]"
                        >
                            <option value="All">All</option>
                            {validLocations.map((loc) => (
                                <option key={loc} value={loc}>{loc}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-xs font-medium tracking-wider text-[#6B6B6B] uppercase">Type</span>
                        <select
                            value={filters.type}
                            onChange={(e) => setTypeFilter(e.target.value as PropertyType | 'All')}
                            className="border-b border-[#CCCCCC] bg-transparent py-1 font-sans text-sm font-medium text-[#111111] outline-none focus:border-[#B5915A]"
                        >
                            <option value="All">All</option>
                            <option value="Apartment">Apartments</option>
                            <option value="House">Houses</option>
                            <option value="Land">Land</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-xs font-medium tracking-wider text-[#6B6B6B] uppercase">Sort</span>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as SortOption)}
                            className="border-b border-[#CCCCCC] bg-transparent py-1 font-sans text-sm font-medium text-[#111111] outline-none focus:border-[#B5915A]"
                        >
                            <option value="newest">Newest</option>
                            <option value="price-desc">Price ↓</option>
                            <option value="price-asc">Price ↑</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
