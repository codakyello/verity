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

            {/* Hero with gradient text */}
            <section className="container mx-auto px-6 pt-16 pb-12 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED]/10 to-[#EC4899]/10 px-4 py-1.5 text-sm font-semibold text-[#7C3AED] mb-6">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] animate-pulse"></span>
                    {totalCount} properties live now
                </div>
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                    <span className="bg-gradient-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent">
                        Discover
                    </span>{' '}
                    your next home
                </h1>
                <p className="mx-auto mt-4 max-w-lg text-[#64748B]">
                    Verified properties. Real data. Zero friction.
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

            <section className="container mx-auto px-6 pt-10">
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

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}
