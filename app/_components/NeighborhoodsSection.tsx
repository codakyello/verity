'use client';

import Image from 'next/image';

const NEIGHBORHOODS = [
    { name: 'Ikoyi', image: '/images/featured/featured-1.png' }, // Placeholder reuse
    { name: 'Lekki Phase 1', image: '/images/featured/featured-2.png' }, // Placeholder reuse
    { name: 'Victoria Island', image: '/images/featured/featured-1.png' }, // Placeholder reuse
    { name: 'Banana Island', image: '/images/featured/featured-2.png' }, // Placeholder reuse
    { name: 'Ikeja GRA', image: '/images/featured/featured-1.png' } // Placeholder reuse
];

export default function NeighborhoodsSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="px-6 md:px-12 lg:px-24">
                <h2 className="text-3xl font-display font-bold text-[#1a1816] mb-10">Explore Neighborhoods</h2>

                <div className="flex overflow-x-auto gap-6 pb-8 snap-x">
                    {NEIGHBORHOODS.map((hood) => (
                        <div key={hood.name} className="flex-shrink-0 relative w-[280px] h-[360px] rounded-2xl overflow-hidden cursor-pointer group snap-center">
                            <Image
                                src={hood.image}
                                alt={hood.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            <div className="absolute bottom-6 left-6">
                                <h3 className="text-xl font-bold text-white mb-1">{hood.name}</h3>
                                <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">View Homes &rarr;</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
