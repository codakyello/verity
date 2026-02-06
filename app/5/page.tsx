'use client';
import { Suspense } from "react";

import { useMarketplace } from '@/hooks/useMarketplace';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import PropertyCard from './components/PropertyCard';

function PageContent() {
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
        <main className="min-h-screen pb-24">
            <Navbar />

            <FilterBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                filters={filters}
                setLocationFilter={setLocationFilter}
                setTypeFilter={setTypeFilter}
                validLocations={validLocations}
            />

            <section className="mt-8 px-6">
                <h2 className="mb-6 text-2xl font-bold text-white">Trending Now 🚀</h2>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                    {properties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}
