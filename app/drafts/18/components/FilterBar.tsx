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
        <section className="border-y border-[#E5E5E5] bg-[#FAFAFA]">
            <div className="container mx-auto px-6 py-6">
                {/* Search */}
                <div className="max-w-2xl mx-auto">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search properties..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full border-2 border-[#0A0A0A] bg-white px-5 py-4 pr-14 text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:border-[#FF3D00] focus:outline-none transition-colors"
                        />
                        <button className="absolute right-0 top-0 bottom-0 bg-[#0A0A0A] px-5 text-white hover:bg-[#FF3D00] transition-colors">
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
                            className={`px-5 py-2 text-sm font-medium transition-all border-2 ${(type === 'All' && !filters.type) || filters.type === type
                                    ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                                    : 'bg-white text-[#0A0A0A] border-[#E5E5E5] hover:border-[#0A0A0A]'
                                }`}
                        >
                            {type}
                        </button>
                    ))}

                    <div className="w-px h-8 bg-[#E5E5E5] mx-3 hidden sm:block" />

                    <select
                        value={filters.location}
                        onChange={(e) => setLocationFilter(e.target.value)}
                        className="border-2 border-[#E5E5E5] bg-white px-4 py-2 text-sm font-medium text-[#0A0A0A] focus:border-[#0A0A0A] focus:outline-none cursor-pointer"
                    >
                        <option value="">Location</option>
                        {validLocations.map((loc) => (
                            <option key={loc} value={loc}>{loc}</option>
                        ))}
                    </select>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border-2 border-[#E5E5E5] bg-white px-4 py-2 text-sm font-medium text-[#0A0A0A] focus:border-[#0A0A0A] focus:outline-none cursor-pointer"
                    >
                        <option value="newest">Newest</option>
                        <option value="price-asc">Price ↑</option>
                        <option value="price-desc">Price ↓</option>
                    </select>
                </div>
            </div>
        </section>
    );
}
