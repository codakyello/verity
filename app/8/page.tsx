'use client';

import { useMarketplace } from '@/hooks/useMarketplace';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import PropertyCard from './components/PropertyCard';

export default function SoftCloudPage() {
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
        <main className="min-h-screen pb-24">
            <Navbar />

            {/* Hero */}
            <section className="container mx-auto px-6 pt-12 pb-8 text-center">
                <h1 className="text-4xl font-bold text-[#1F2937] md:text-5xl">
                    Find your <span className="bg-gradient-to-r from-[#A78BFA] to-[#F472B6] bg-clip-text text-transparent">dream home</span>
                </h1>
                <p className="mx-auto mt-4 max-w-md text-[#6B7280]">
                    Browse verified properties and discover where your next chapter begins.
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

            <section className="container mx-auto px-6 pt-8">
                <p className="mb-6 text-sm text-[#9CA3AF]">{properties.length} properties found</p>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {properties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            </section>
        </main>
    );
}
