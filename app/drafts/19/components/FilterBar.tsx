import { Search } from 'lucide-react';

interface FilterBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    filters: { location: string; type: string };
    setLocationFilter: (location: string) => void;
    setTypeFilter: (type: string) => void;
    sortBy: string;
    setSortBy: (sort: string) => void;
    validLocations: string[];
}

const propertyTypes = ['All', 'Residence', 'Estate', 'Penthouse', 'Land'];

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
        <section className="container mx-auto px-6">
            {/* Search */}
            <div className="max-w-xl mx-auto">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search residences..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full border border-[#E8E0D5] bg-white px-6 py-4 pr-14 text-[#1A1A1A] placeholder:text-[#B5B5B5] focus:border-[#C9A962] focus:outline-none focus:ring-1 focus:ring-[#C9A962] transition-all"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#8B2635] p-3 text-white hover:bg-[#722029] transition-colors">
                        <Search className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {propertyTypes.map((type) => (
                    <button
                        key={type}
                        onClick={() => setTypeFilter(type === 'All' ? '' : type)}
                        className={`px-5 py-2.5 text-sm transition-all border ${(type === 'All' && !filters.type) || filters.type === type
                                ? 'bg-[#8B2635] text-white border-[#8B2635]'
                                : 'bg-white text-[#1A1A1A] border-[#E8E0D5] hover:border-[#C9A962]'
                            }`}
                    >
                        {type}
                    </button>
                ))}

                <div className="w-px h-6 bg-[#E8E0D5] mx-2 hidden sm:block" />

                <select
                    value={filters.location}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="border border-[#E8E0D5] bg-white px-4 py-2.5 text-sm text-[#1A1A1A] focus:border-[#C9A962] focus:outline-none cursor-pointer"
                >
                    <option value="">All Locations</option>
                    {validLocations.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                    ))}
                </select>

                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-[#E8E0D5] bg-white px-4 py-2.5 text-sm text-[#1A1A1A] focus:border-[#C9A962] focus:outline-none cursor-pointer"
                >
                    <option value="newest">Recently Listed</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                </select>
            </div>
        </section>
    );
}
