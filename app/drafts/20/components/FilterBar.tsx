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
                        placeholder="Search properties by location, type, or keyword..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full rounded-xl border border-[#1F1F2E] bg-[#12121A] px-5 py-4 pr-14 text-white placeholder:text-[#6B7280] focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6] transition-all"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] p-3 text-white hover:opacity-90 transition-opacity">
                        <Search className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                {propertyTypes.map((type) => (
                    <button
                        key={type}
                        onClick={() => setTypeFilter(type === 'All' ? '' : type)}
                        className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-all ${(type === 'All' && !filters.type) || filters.type === type
                                ? 'bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white'
                                : 'bg-[#12121A] text-[#9CA3AF] border border-[#1F1F2E] hover:border-[#3B82F6] hover:text-white'
                            }`}
                    >
                        {type}
                    </button>
                ))}

                <div className="w-px h-8 bg-[#1F1F2E] mx-3 hidden sm:block" />

                <select
                    value={filters.location}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="rounded-lg border border-[#1F1F2E] bg-[#12121A] px-4 py-2.5 text-sm text-[#9CA3AF] focus:border-[#3B82F6] focus:outline-none cursor-pointer"
                >
                    <option value="">All Locations</option>
                    {validLocations.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                    ))}
                </select>

                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="rounded-lg border border-[#1F1F2E] bg-[#12121A] px-4 py-2.5 text-sm text-[#9CA3AF] focus:border-[#3B82F6] focus:outline-none cursor-pointer"
                >
                    <option value="newest">Latest</option>
                    <option value="price-asc">Price ↑</option>
                    <option value="price-desc">Price ↓</option>
                </select>
            </div>
        </section>
    );
}
