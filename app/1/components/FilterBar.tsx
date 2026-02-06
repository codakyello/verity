import { Search, SlidersHorizontal } from 'lucide-react';
import { PropertyType } from '@/lib/types';

interface FilterBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    filters: {
        location: string;
        type: PropertyType | 'All';
        minPrice: number | null;
        maxPrice: number | null;
    };
    setLocationFilter: (location: string) => void;
    setTypeFilter: (type: PropertyType | 'All') => void;
    validLocations: string[];
}

export default function FilterBar({
    searchQuery,
    setSearchQuery,
    filters,
    setLocationFilter,
    setTypeFilter,
    validLocations,
}: FilterBarProps) {
    return (
        <div className="sticky top-0 z-10 w-full border-b border-neutral-100 bg-white/95 backdrop-blur-sm">
            <div className="container mx-auto flex flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
                {/* Search */}
                <div className="relative w-full md:w-96">
                    <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                    <input
                        type="text"
                        placeholder="Search by location or name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full border-b border-neutral-200 bg-transparent py-2.5 pl-10 text-sm outline-none placeholder:text-neutral-400 focus:border-blue-600 focus:ring-0"
                    />
                </div>

                {/* Filters */}
                <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-0">
                    <select
                        value={filters.location}
                        onChange={(e) => setLocationFilter(e.target.value)}
                        className="appearance-none border-b border-neutral-200 bg-transparent py-2 pr-8 text-sm font-medium text-neutral-900 outline-none focus:border-blue-600"
                    >
                        <option value="All">All Locations</option>
                        {validLocations.map((loc) => (
                            <option key={loc} value={loc}>
                                {loc}
                            </option>
                        ))}
                    </select>

                    <select
                        value={filters.type}
                        onChange={(e) => setTypeFilter(e.target.value as PropertyType | 'All')}
                        className="appearance-none border-b border-neutral-200 bg-transparent py-2 pr-8 text-sm font-medium text-neutral-900 outline-none focus:border-blue-600"
                    >
                        <option value="All">All Types</option>
                        <option value="Apartment">Apartment</option>
                        <option value="House">House</option>
                        <option value="Office">Office</option>
                        <option value="Land">Land</option>
                    </select>

                    <button className="flex items-center gap-2 border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600 transition hover:border-black hover:text-black">
                        <SlidersHorizontal className="h-4 w-4" />
                        More Filters
                    </button>
                </div>
            </div>
        </div>
    );
}
