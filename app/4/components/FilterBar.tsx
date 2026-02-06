import { Search, ListFilter } from 'lucide-react';
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
        <div className="border-b border-slate-200 bg-white">
            <div className="flex items-center divide-x divide-slate-200">
                {/* Search */}
                <div className="flex flex-1 items-center px-4 py-3">
                    <Search className="h-4 w-4 text-slate-400 mr-3" />
                    <input
                        type="text"
                        placeholder="Filter by asset name, ID or location..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none"
                    />
                </div>

                {/* Location */}
                <div className="flex items-center px-4 py-3">
                    <span className="mr-3 text-xs font-bold text-slate-500 uppercase">Region:</span>
                    <select
                        value={filters.location}
                        onChange={(e) => setLocationFilter(e.target.value)}
                        className="text-sm font-semibold text-slate-900 outline-none bg-transparent cursor-pointer"
                    >
                        <option value="All">Global</option>
                        {validLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                    </select>
                </div>

                {/* Type */}
                <div className="flex items-center px-4 py-3">
                    <span className="mr-3 text-xs font-bold text-slate-500 uppercase">Asset Class:</span>
                    <select
                        value={filters.type}
                        onChange={(e) => setTypeFilter(e.target.value as PropertyType | 'All')}
                        className="text-sm font-semibold text-slate-900 outline-none bg-transparent cursor-pointer"
                    >
                        <option value="All">All Assets</option>
                        <option value="Apartment">Residential (Multi)</option>
                        <option value="House">Residential (Single)</option>
                        <option value="Office">Commercial</option>
                        <option value="Land">Land</option>
                    </select>
                </div>

                {/* Advanced */}
                <button className="flex items-center px-6 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50">
                    <ListFilter className="h-4 w-4 mr-2" /> Parameters
                </button>
            </div>
        </div>
    );
}
