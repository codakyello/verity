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

const propertyTypes: (PropertyType | 'All')[] = ['All', 'Apartment', 'House', 'Land', 'Office']; // Check available types

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
        <section className="border-b border-[#E8E6E3] bg-white py-6">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    {/* Search */}
                    <div className="relative max-w-md flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9CA3AF]" />
                        <input
                            type="text"
                            placeholder="Search locations..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full border border-[#E8E6E3] bg-[#FAFAF8] pl-11 pr-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] focus:border-[#722F37] focus:bg-white focus:outline-none transition-all"
                        />
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap items-center gap-3">
                        {propertyTypes.map((type) => (
                            <button
                                key={type}
                                onClick={() => setTypeFilter(type)}
                                className={`px-4 py-2 text-sm transition-all border ${filters.type === type
                                    ? 'bg-[#722F37] text-white border-[#722F37]'
                                    : 'bg-white text-[#1A1A1A] border-[#E8E6E3] hover:border-[#722F37]'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}

                        <div className="w-px h-6 bg-[#E8E6E3] mx-1 hidden lg:block" />

                        <select
                            value={filters.location}
                            onChange={(e) => setLocationFilter(e.target.value)}
                            className="border border-[#E8E6E3] bg-white px-3 py-2 text-sm text-[#1A1A1A] focus:border-[#722F37] focus:outline-none cursor-pointer"
                        >
                            <option value="">All locations</option>
                            {validLocations.map((loc) => (
                                <option key={loc} value={loc}>{loc}</option>
                            ))}
                        </select>

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as SortOption)}
                            className="border border-[#E8E6E3] bg-white px-3 py-2 text-sm text-[#1A1A1A] focus:border-[#722F37] focus:outline-none cursor-pointer"
                        >
                            <option value="newest">Newest</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    );
}
