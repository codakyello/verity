'use client';

import { useMarketplace } from '@/hooks/useMarketplace';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import PropertyCard from './components/PropertyCard';
import DesignNav from '@/components/DesignNav';

export default function WarmOrganicPage() {
    const {
        properties,
        totalCount,
        searchQuery,
        setSearchQuery,
        filters,
        setLocationFilter,
        setTypeFilter,
        sortBy,
        setSortBy,
        validLocations,
    } = useMarketplace();

    return (
        <main className="min-h-screen pb-32">
            <Navbar />

            {/* Hero with organic feel */}
            <section className="container mx-auto px-6 pt-16 pb-12">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#6B7B5E]/10 px-4 py-2 text-sm text-[#6B7B5E] mb-6">
                        <span className="h-2 w-2 rounded-full bg-[#6B7B5E]"></span>
                        {totalCount} sanctuaries available
                    </div>
                    <h1 className="text-5xl md:text-6xl font-normal text-[#2D2A26] leading-[1.15] tracking-tight">
                        Find your
                        <span className="block italic text-[#C17F59]">natural haven</span>
                    </h1>
                    <p className="mt-6 text-lg text-[#7A7067] max-w-lg leading-relaxed">
                        Spaces designed with intention, verified with care.
                        For those who seek harmony in how they live.
                    </p>
                </div>
            </section>

            <FilterBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                filters={filters}
                setLocationFilter={setLocationFilter}
                setTypeFilter={setTypeFilter}
                sortBy={sortBy}
                setSortBy={setSortBy}
                validLocations={validLocations}
            />

            <section className="container mx-auto px-6 pt-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {properties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            </section>

            <DesignNav />
        </main>
    );
}
