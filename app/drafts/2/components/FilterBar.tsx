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
        <div className="w-full py-8">
            <div className="container mx-auto flex flex-col items-center gap-8 px-6">

                {/* Search Input - Totally rounded */}
                <div className="relative w-full max-w-lg">
                    <input
                        type="text"
                        placeholder="Search for your sanctuary..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full rounded-full border-0 bg-white py-4 pl-8 pr-14 font-sans text-[#2C3E2C] shadow-[0_4px_20px_rgba(0,0,0,0.03)] outline-none ring-1 ring-neutral-100 placeholder:text-[#A0AFA0] focus:ring-[#C17C5F]"
                    />
                    <button className="absolute top-1/2 right-3 h-10 w-10 -translate-y-1/2 rounded-full bg-[#2C3E2C] flex items-center justify-center text-white transition hover:bg-[#C17C5F]">
                        <Search className="h-4 w-4" />
                    </button>
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap justify-center gap-3">
                    <button
                        onClick={() => setTypeFilter('All')}
                        className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${filters.type === 'All' ? 'bg-[#2C3E2C] text-white shadow-md' : 'bg-white text-[#7A8C7A] hover:bg-white/80'}`}
                    >
                        All
                    </button>
                    {['Apartment', 'House', 'Land'].map((type) => (
                        <button
                            key={type}
                            onClick={() => setTypeFilter(type as PropertyType)}
                            className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${filters.type === type ? 'bg-[#2C3E2C] text-white shadow-md' : 'bg-white text-[#7A8C7A] hover:bg-white/80'}`}
                        >
                            {type}
                        </button>
                    ))}
                    <div className="h-6 w-px bg-neutral-200 mx-2 self-center"></div>
                    <select
                        value={filters.location}
                        onChange={(e) => setLocationFilter(e.target.value)}
                        className="rounded-full bg-white px-6 py-2 text-sm font-medium text-[#7A8C7A] outline-none hover:bg-white/80 cursor-pointer appearance-none"
                    >
                        <option value="All">Anywhere</option>
                        {validLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                    </select>
                </div>
            </div>
        </div>
    );
}
