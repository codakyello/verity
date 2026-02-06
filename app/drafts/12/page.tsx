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
            <section className="container mx-auto px-6 pt-14 pb-10 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6B6B]/10 to-[#FF8E53]/10 px-4 py-1.5 text-sm font-semibold text-[#FF6B6B] mb-5">
                    <span className="h-2 w-2 rounded-full bg-[#FF6B6B] animate-pulse"></span>
                    {totalCount} properties available
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-[#1F2937] md:text-5xl">
                    Find your happy place
                </h1>
                <p className="mx-auto mt-4 max-w-lg text-[#6B7280]">
                    Every home tells a story. Let us help you find yours.
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
