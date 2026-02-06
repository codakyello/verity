'use client';

import { useMarketplace } from '@/hooks/useMarketplace';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import PropertyCard from './components/PropertyCard';

export default function ModernistPage() {
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
        <main className="min-h-screen pb-20">
            <Navbar />
            <FilterBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                filters={filters}
                setLocationFilter={setLocationFilter}
                setTypeFilter={setTypeFilter}
                validLocations={validLocations}
            />

            <section className="container mx-auto mt-12 px-6">
                <div className="mb-8 flex items-baseline justify-between">
                    <h1 className="text-4xl font-bold tracking-tighter text-neutral-900">
                        Curated Listings
                    </h1>
                    <span className="text-sm font-medium text-neutral-400">
                        {properties.length} Properties
                    </span>
                </div>

                <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {properties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>

                {properties.length === 0 && (
                    <div className="flex h-64 flex-col items-center justify-center text-neutral-400">
                        <p className="text-lg">No properties match your criteria.</p>
                        <button
                            onClick={() => {
                                setLocationFilter('All');
                                setTypeFilter('All');
                                setSearchQuery('');
                            }}
                            className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </section>
        </main>
    );
}
