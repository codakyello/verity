'use client';

import Image from 'next/image';
import Link from 'next/link';

const categories = [
    { title: 'New listings', count: '6,509', image: '/images/browse/new-listings.png' },
    { title: 'Price reduced', count: '5,869', image: '/images/browse/price-reduced.png' },
    { title: 'Open houses', count: '915', image: '/images/browse/open-houses.png' },
    { title: 'Recently sold', count: '40,292', image: '/images/browse/recently-sold.png' },
    { title: 'New construction', count: '8,223', image: '/images/browse/new-construction.png' },
    { title: 'New home communities', count: '384', image: '/images/browse/new-home-communities.png' },
    { title: 'Land', count: '11,105', image: '/images/browse/land.png' },
    { title: 'Foreclosures', count: '380', image: '/images/browse/foreclosures.png' },
];

export default function BrowseSection() {
    return (
        <section className="py-12">
            <div className=" md:px-12 lg:px-24">
                <h2 className="text-2xl font-bold text-[#1a1816] mb-6">Browse homes</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <Link
                            key={category.title}
                            href={`/browse?category=${encodeURIComponent(category.title)}`}
                            className="group relative h-[200px] w-full overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <Image
                                src={category.image}
                                alt={category.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110 brightness-[0.85] group-hover:brightness-100"
                            />

                            {/* Overlay Gradient for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />

                            <div className="absolute top-4 left-4 z-10">
                                <h3 className="text-lg font-bold text-white drop-shadow-md">{category.title}</h3>
                            </div>

                            <div className="absolute top-4 right-4 z-10">
                                <span className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-[#1a1816] shadow-sm">
                                    {category.count}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
