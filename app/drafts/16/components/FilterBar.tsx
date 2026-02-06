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

const propertyTypes = ['All', 'Apartment', 'House', 'Land', 'Commercial'];

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
            <div className="max-w-2xl mx-auto">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search by location or property name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full border border-[#E8E6E3] bg-white px-6 py-4 pr-14 text-[#1A1A2E] placeholder:text-[#9CA3AF] focus:border-[#1E3A5F] focus:outline-none focus:ring-1 focus:ring-[#1E3A5F] transition-all"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1E3A5F] p-3 text-white hover:bg-[#152a45] transition-colors">
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
                        className={`px-5 py-2 text-sm tracking-wide transition-all border ${(type === 'All' && !filters.type) || filters.type === type
                                ? 'bg-[#1E3A5F] text-white border-[#1E3A5F]'
                                : 'bg-white text-[#1A1A2E] border-[#E8E6E3] hover:border-[#1E3A5F]'
                            }`}
                    >
                        {type}
                    </button>
                ))}

                <div className="w-px h-6 bg-[#E8E6E3] mx-2 hidden sm:block" />

                <select
                    value={filters.location}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="border border-[#E8E6E3] bg-white px-4 py-2 text-sm text-[#1A1A2E] focus:border-[#1E3A5F] focus:outline-none cursor-pointer"
                >
                    <option value="">All Locations</option>
                    {validLocations.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                    ))}
                </select>

                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-[#E8E6E3] bg-white px-4 py-2 text-sm text-[#1A1A2E] focus:border-[#1E3A5F] focus:outline-none cursor-pointer"
                >
                    <option value="newest">Newest First</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                </select>
            </div>
        </section>
    );
}
