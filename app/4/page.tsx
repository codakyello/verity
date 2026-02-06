'use client';
import { Suspense } from "react";

import { useMarketplace } from '@/hooks/useMarketplace';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import PropertyCard from './components/PropertyCard';
import { Download, Share2 } from 'lucide-react';

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
        <main className="min-h-screen bg-[#F1F5F9]">
            <Navbar />

            {/* Page Header */}
            <div className="bg-white px-6 py-8 border-b border-slate-200">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">Marketplace Overview</h1>
                        <p className="text-sm text-slate-500 mt-1">Real-time valuation and verification data.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 rounded border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
                            <Share2 className="h-4 w-4" /> Share Report
                        </button>
                        <button className="flex items-center gap-2 rounded bg-[#0F172A] px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#1E293B]">
                            <Download className="h-4 w-4" /> Export Data
                        </button>
                    </div>
                </div>
            </div>

            <FilterBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                filters={filters}
                setLocationFilter={setLocationFilter}
                setTypeFilter={setTypeFilter}
                validLocations={validLocations}
            />

            <section className="p-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
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
