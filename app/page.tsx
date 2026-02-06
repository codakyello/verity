'use client';

import { useState } from 'react';
import { useMarketplace } from '@/hooks/useMarketplace';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DesignNav from '@/components/DesignNav';


export default function PremiumPage() {
    // Local state for the Hero input if needed, though Hero has its own logic now?
    // Actually Hero asks for props. We can manage a simple state here just for the input binding
    // even though the submit action redirects away.
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <main className="min-h-screen bg-white pt-[72px]">
            <Navbar />

            <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            {/* Value Props / Marketing Content could go here */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-display font-bold text-[#1a1816] mb-4">Trusted by over 100 million people</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">Verity is the most trusted property marketplace in Nigeria. We verify every listing so you don't have to.</p>
                </div>
            </section>

            <DesignNav />
        </main>
    );
}
