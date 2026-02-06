'use client';

import { useMarketplace } from '@/hooks/useMarketplace';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import PropertyCard from './components/PropertyCard';
import DesignNav from '@/components/DesignNav';

export default function ClassicLuxuryPage() {
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

            {/* Hero - Classic Elegance */}
            <section className="container mx-auto px-6 pt-20 pb-16 text-center">
                <div className="inline-block mb-6">
                    <div className="flex items-center gap-4">
                        <div className="h-px w-12 bg-[#C9A962]" />
                        <span className="text-xs tracking-[0.3em] uppercase text-[#C9A962] font-medium">Est. 2024</span>
                        <div className="h-px w-12 bg-[#C9A962]" />
                    </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-display text-[#1A1A1A] leading-[1.1]">
                    Exceptional Properties
                    <br />
                    <span className="italic text-[#8B2635]">Exceptional Living</span>
                </h1>
                <p className="mt-8 text-lg text-[#7A7A7A] max-w-xl mx-auto leading-relaxed">
                    A distinguished collection of {totalCount} verified residences
                    for those who appreciate timeless quality.
                </p>

                {/* Decorative element */}
                <div className="mt-10 flex justify-center">
                    <div className="w-px h-16 bg-gradient-to-b from-[#C9A962] to-transparent" />
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
