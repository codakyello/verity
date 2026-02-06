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

const propertyTypes = ['All', 'Apartment', 'House', 'Land'];

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
                        placeholder="Search for your sanctuary..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full rounded-full border border-[#E8E0D5] bg-white px-6 py-4 pr-14 text-[#2D2A26] placeholder:text-[#A89F94] focus:border-[#6B7B5E] focus:outline-none focus:ring-2 focus:ring-[#6B7B5E]/20 transition-all"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#6B7B5E] p-3 text-white hover:bg-[#5a6a4f] transition-colors">
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
                        className={`rounded-full px-5 py-2.5 text-sm transition-all ${(type === 'All' && !filters.type) || filters.type === type
                                ? 'bg-[#2D2A26] text-white'
                                : 'bg-[#F5EDE4] text-[#2D2A26] hover:bg-[#E8E0D5]'
                            }`}
                    >
                        {type}
                    </button>
                ))}

                <div className="w-px h-6 bg-[#E8E0D5] mx-2 hidden sm:block" />

                <select
                    value={filters.location}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="rounded-full border border-[#E8E0D5] bg-white px-5 py-2.5 text-sm text-[#2D2A26] focus:border-[#6B7B5E] focus:outline-none cursor-pointer"
                >
                    <option value="">All Locations</option>
                    {validLocations.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                    ))}
                </select>

                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="rounded-full border border-[#E8E0D5] bg-white px-5 py-2.5 text-sm text-[#2D2A26] focus:border-[#6B7B5E] focus:outline-none cursor-pointer"
                >
                    <option value="newest">Newest</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                </select>
            </div>
        </section>
    );
}
