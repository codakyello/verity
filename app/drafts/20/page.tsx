'use client';

import { useMarketplace } from '@/hooks/useMarketplace';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import PropertyCard from './components/PropertyCard';
import DesignNav from '@/components/DesignNav';

export default function ModernTechPage() {
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
        <main className="min-h-screen pb-32 bg-[#0A0A0F]">
            <Navbar />

            {/* Hero - Tech Style */}
            <section className="container mx-auto px-6 pt-20 pb-16">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#1F1F2E] bg-[#12121A] px-4 py-2 text-sm text-[#9CA3AF] mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3B82F6]"></span>
                        </span>
                        {totalCount} verified properties live
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight">
                        Property discovery,
                        <br />
                        <span className="gradient-text">reimagined.</span>
                    </h1>

                    <p className="mt-6 text-lg text-[#9CA3AF] max-w-lg leading-relaxed">
                        Smart search. Verified listings. Real-time data.
                        The modern way to find your next space.
                    </p>

                    <div className="mt-10 flex items-center gap-4">
                        <button className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] px-8 py-3 text-sm font-medium text-white rounded-lg hover:opacity-90 transition-opacity">
                            Start Exploring
                        </button>
                        <button className="border border-[#1F1F2E] px-8 py-3 text-sm font-medium text-white rounded-lg hover:border-[#3B82F6] transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
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
