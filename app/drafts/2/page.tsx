'use client';

import { useMarketplace } from '@/hooks/useMarketplace';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import PropertyCard from './components/PropertyCard';
import DesignNav from '@/components/DesignNav';

export default function EcoLuxePage() {
    const {
        properties,
        searchQuery,
        setSearchQuery,
        filters,
        setLocationFilter,
        setTypeFilter,
        validLocations,
    } = useMarketplace();

    return (
        <main className="min-h-screen pb-32">
            <Navbar />

            <section className="mt-8 mb-12 text-center">
                <h1 className="font-serif text-5xl text-[#2C3E2C] md:text-6xl">
                    Live Naturally
                </h1>
                <p className="mt-4 font-sans text-[#7A8C7A]">
                    Curated properties for the conscious living.
                </p>
            </section>

            <FilterBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                filters={filters}
                setLocationFilter={setLocationFilter}
                setTypeFilter={setTypeFilter}
                validLocations={validLocations}
            />

            <section className="container mx-auto px-6 mt-16">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {properties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>

                {/* Decorative Element */}
                <div className="mt-32 flex justify-center">
                    <div className="h-24 w-px bg-gradient-to-b from-[#2C3E2C]/20 to-transparent"></div>
                </div>
            </section>

            <DesignNav />
        </main>
    );
}
