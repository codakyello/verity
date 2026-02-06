import { Search } from 'lucide-react';
import { PropertyType } from '@/lib/types';

interface FilterBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    filters: {
        location: string;
        type: PropertyType | 'All';
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
        <div className="border-b-4 border-black bg-white p-6 font-mono">
            <div className="flex flex-col gap-6 md:flex-row">

                {/* Search */}
                <div className="flex-1">
                    <label className="mb-2 block text-xs font-bold uppercase">Search Query</label>
                    <div className="flex border-4 border-black">
                        <input
                            type="text"
                            placeholder="ENTER KEYWORDS..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-transparent p-3 font-bold uppercase text-black outline-none placeholder:text-neutral-400"
                        />
                        <button className="flex items-center justify-center bg-black px-6 text-white hover:bg-[#CCFF00] hover:text-black">
                            <Search className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex gap-4">
                    <div>
                        <label className="mb-2 block text-xs font-bold uppercase">Location_Select</label>
                        <select
                            value={filters.location}
                            onChange={(e) => setLocationFilter(e.target.value)}
                            className="h-[52px] border-4 border-black bg-[#E0E0E0] px-4 font-bold uppercase outline-none focus:bg-[#CCFF00]"
                        >
                            <option value="All">ALL_ZONES</option>
                            {validLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-xs font-bold uppercase">Asset_Type</label>
                        <select
                            value={filters.type}
                            onChange={(e) => setTypeFilter(e.target.value as PropertyType | 'All')}
                            className="h-[52px] border-4 border-black bg-[#E0E0E0] px-4 font-bold uppercase outline-none focus:bg-[#CCFF00]"
                        >
                            <option value="All">ALL_TYPES</option>
                            <option value="Apartment">APT</option>
                            <option value="House">RES</option>
                            <option value="Office">COM</option>
                            <option value="Land">LND</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
