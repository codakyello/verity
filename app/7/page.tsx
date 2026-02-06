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
        sortBy,
        setSortBy,
        validLocations,
    } = useMarketplace();

    return (
        <main className="min-h-screen bg-[#FAF8F5]">
            <Navbar />

            {/* Hero Section */}
            <section className="container mx-auto px-8 py-20 text-center">
                <p className="font-sans text-xs font-medium tracking-[0.3em] text-[#B5915A] uppercase mb-4">
                    The Art of Living
                </p>
                <h1 className="font-serif text-5xl font-medium leading-tight text-[#111111] md:text-6xl">
                    Curated Residences
                </h1>
                <p className="mx-auto mt-6 max-w-xl font-sans text-base text-[#6B6B6B] leading-relaxed">
                    A carefully selected collection of verified properties, each chosen for its exceptional character and enduring value.
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

            <section className="container mx-auto px-8 py-16">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
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
