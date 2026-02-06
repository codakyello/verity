'use client';
import { Suspense } from "react";

export const dynamic = 'force-dynamic';

import { useMarketplace } from '@/hooks/useMarketplace';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import PropertyCard from './components/PropertyCard';
import DesignNav from '@/components/DesignNav';

function PageContent() {
    const {
        properties,
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

            {/* Hero - Editorial style */}
            <section className="mt-10 mb-14 text-center">
                <h1 className="font-serif text-5xl font-medium text-[#0D2818] md:text-6xl">
                    Curated Living
                </h1>
                <p className="mt-4 text-lg text-[#4A6455]">
                    Properties selected for those who appreciate the finer details.
                </p>
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

            <section className="container mx-auto px-6 mt-14">
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                    {properties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            </section>

            <DesignNav />
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
