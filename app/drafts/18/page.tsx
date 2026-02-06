'use client';

import { useMarketplace } from '@/hooks/useMarketplace';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import PropertyCard from './components/PropertyCard';
import DesignNav from '@/components/DesignNav';

export default function BoldEditorialPage() {
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
        <main className="min-h-screen pb-32 bg-white">
            <Navbar />

            {/* Hero - Editorial Style */}
            <section className="container mx-auto px-6 pt-20 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                    <div>
                        <h1 className="text-7xl md:text-9xl font-display text-[#0A0A0A] leading-[0.9]">
                            FIND
                            <br />
                            <span className="text-[#FF3D00]">YOUR</span>
                            <br />
                            SPACE
                        </h1>
                    </div>
                    <div className="lg:pb-4">
                        <p className="text-lg text-[#6B7280] max-w-md leading-relaxed">
                            {totalCount} curated properties. Every listing verified.
                            No compromises.
                        </p>
                        <div className="mt-6 flex items-center gap-4">
                            <div className="h-px flex-1 bg-[#0A0A0A]" />
                            <span className="text-xs tracking-[0.3em] uppercase text-[#6B7280]">Scroll to explore</span>
                        </div>
                    </div>
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
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {properties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            </section>

            <DesignNav />
        </main>
    );
}
