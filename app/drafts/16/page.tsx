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

            {/* Hero */}
            <section className="container mx-auto px-6 pt-20 pb-16 text-center">
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#B8860B] mb-4">
                    Curated Excellence
                </p>
                <h1 className="text-5xl md:text-7xl font-light tracking-tight text-[#1A1A2E] leading-[1.1]">
                    Discover Refined
                    <br />
                    <span className="italic font-normal">Living Spaces</span>
                </h1>
                <p className="mt-6 text-lg text-[#6B7280] max-w-xl mx-auto font-light">
                    A curated collection of {totalCount} verified properties for those who appreciate the finer details.
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

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}
