'use client';

import { useState } from 'react';
import { useMarketplace } from '@/hooks/useMarketplace';
import Navbar from './_components/Navbar';
import Hero from './_components/Hero';
import DesignNav from '@/components/DesignNav';
import BrowseSection from './_components/BrowseSection';
import FeatureSection from './_components/FeatureSection';
import FeaturedSection from './_components/FeaturedSection';
import NeighborhoodsSection from './_components/NeighborhoodsSection';


export default function PremiumPage() {
    // Local state for the Hero input if needed, though Hero has its own logic now?
    // Actually Hero asks for props. We can manage a simple state here just for the input binding
    // even though the submit action redirects away.
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <main className="min-h-screen bg-white pt-[64px]">
            <Navbar />

            <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            <BrowseSection />
            {/* <FeaturedSection /> */}
            <NeighborhoodsSection />
            <FeatureSection />

            {/* Premium Social Proof / Stats */}
            <section className="py-24 bg-[#1a1816] text-white">
                <div className="container mx-auto px-6">
                    <div className="mb-16 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-6 leading-tight">
                            The most trusted name in <br />
                            <span className="text-[#B8860B] italic">Nigerian Real Estate.</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            We’re setting new standards for transparency and verification in the property market.
                            Join millions of users who trust Verity for their housing needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-white/10 pt-12">
                        <div className="group">
                            <p className="text-5xl md:text-6xl font-display font-light text-white mb-2 group-hover:text-[#B8860B] transition-colors">$10B+</p>
                            <p className="text-sm uppercase tracking-widest text-gray-500 font-medium">Property Volume Sold</p>
                        </div>
                        <div className="group">
                            <p className="text-5xl md:text-6xl font-display font-light text-white mb-2 group-hover:text-[#B8860B] transition-colors">100M+</p>
                            <p className="text-sm uppercase tracking-widest text-gray-500 font-medium">Monthly Visits</p>
                        </div>
                        <div className="group">
                            <p className="text-5xl md:text-6xl font-display font-light text-white mb-2 group-hover:text-[#B8860B] transition-colors">36</p>
                            <p className="text-sm uppercase tracking-widest text-gray-500 font-medium">States Covered</p>
                        </div>
                    </div>
                </div>
            </section>

            <DesignNav />
        </main>
    );
}
