'use client';

import { useMarketplace } from '@/hooks/useMarketplace';
import Navbar from '../_components/Navbar';
import PropertyCard from '../_components/PropertyCard';
import FilterBar from '../_components/FilterBar';
import SearchHeader from '../_components/SearchHeader';

export default function BrowsePage() {
    const {
        properties,
        totalCount,
        searchQuery,
        setSearchQuery,
        filters,
        setPriceRange,
        setTypeFilter,
        setBedroomsFilter,
        sortBy,
        setSortBy
    } = useMarketplace();

    return (
        <main className="min-h-screen bg-white pt-[72px]">
            <Navbar />

            {/* Top Row: Search Header */}
            <SearchHeader
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                totalCount={totalCount}
            />

            {/* Second Row: Filter Bar */}
            <FilterBar
                filters={filters}
                onPriceChange={setPriceRange}
                onTypeChange={setTypeFilter}
                onBedroomsChange={setBedroomsFilter}
                sortBy={sortBy}
                onSortChange={setSortBy}
                totalCount={totalCount}
            />

            {/* Listings Grid */}
            <section className="container mx-auto px-4 lg:px-6 py-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold tracking-[-0.24px] text-[#1a1816]">
                        {searchQuery ? `Real Estate & Homes For Sale in ${searchQuery}` : 'Real Estate & Homes For Sale in Lagos, NG'}
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        {totalCount} Homes
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {properties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>

                {properties.length === 0 && (
                    <div className="py-20 text-center">
                        <h3 className="text-xl font-bold text-[#1a1816]">No homes found</h3>
                        <p className="mt-2 text-gray-500">Try adjusting your filters or search query.</p>
                    </div>
                )}
            </section>
        </main>
    );
}
