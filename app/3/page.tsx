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
        <main className="min-h-screen bg-[#E0E0E0] pb-24">
            <Navbar />
            <FilterBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                filters={filters}
                setLocationFilter={setLocationFilter}
                setTypeFilter={setTypeFilter}
                validLocations={validLocations}
            />

            <section className="p-6">
                <div className="mb-6 border-l-4 border-black pl-4">
                    <h1 className="font-mono text-xl font-bold uppercase">
                        /DATABASE/listings ({properties.length})
                    </h1>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
