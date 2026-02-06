import { Search, ChevronDown } from 'lucide-react';
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
        <div className="w-full bg-[#F9FAFB] py-5">
            <div className="container mx-auto flex flex-col gap-4 px-6 lg:flex-row lg:items-center lg:justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9CA3AF]" />
                    <input
                        type="text"
                        placeholder="Search by location or property..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full rounded-lg border border-[#E5E5E5] bg-white py-3 pl-11 pr-4 text-sm text-[#1C1C1E] outline-none placeholder:text-[#9CA3AF] focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981]"
                    />
                </div>

                {/* Filters */}
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <select
                            value={filters.location}
                            onChange={(e) => setLocationFilter(e.target.value)}
                            className="appearance-none rounded-lg border border-[#E5E5E5] bg-white px-4 py-3 pr-10 text-sm font-medium text-[#1C1C1E] outline-none focus:border-[#10B981]"
                        >
                            <option value="All">All Locations</option>
                            {validLocations.map((loc) => (
                                <option key={loc} value={loc}>{loc}</option>
                            ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7280]" />
                    </div>

                    <div className="relative">
                        <select
                            value={filters.type}
                            onChange={(e) => setTypeFilter(e.target.value as PropertyType | 'All')}
                            className="appearance-none rounded-lg border border-[#E5E5E5] bg-white px-4 py-3 pr-10 text-sm font-medium text-[#1C1C1E] outline-none focus:border-[#10B981]"
                        >
                            <option value="All">All Types</option>
                            <option value="Apartment">Apartments</option>
                            <option value="House">Houses</option>
                            <option value="Office">Offices</option>
                            <option value="Land">Land</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7280]" />
                    </div>

                    <div className="relative">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as SortOption)}
                            className="appearance-none rounded-lg border border-[#E5E5E5] bg-white px-4 py-3 pr-10 text-sm font-medium text-[#1C1C1E] outline-none focus:border-[#10B981]"
                        >
                            <option value="newest">Newest First</option>
                            <option value="price-asc">Price: Low → High</option>
                            <option value="price-desc">Price: High → Low</option>
                            <option value="rating">Top Rated</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7280]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
