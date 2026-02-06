'use client';

import Image from 'next/image';
import Link from 'next/link';

const features = [
    {
        title: 'Buy a home',
        description: 'Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.',
        buttonText: 'Browse homes',
        buttonLink: '/browse?type=buy',
        image: '/images/features/buy.png'
    },
    {
        title: 'Rent a home',
        description: 'We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.',
        buttonText: 'Find rentals',
        buttonLink: '/browse?type=rent',
        image: '/images/features/rent.png'
    },
    {
        title: 'Sell a home',
        description: 'No matter what path you take to sell your home, we can help you navigate a successful sale.',
        buttonText: 'See your options',
        buttonLink: '/sell',
        image: '/images/features/sell.png'
    },
    {
        title: 'Shortlets',
        description: 'Discover the perfect home away from home directly. Book short stays for vacation or work with ease.',
        buttonText: 'Find shortlets',
        buttonLink: '/browse?type=shortlet',
        image: '/images/features/shortlet.png'
    }
];

export default function FeatureSection() {
    return (
        <section className="py-16 bg-[#f9f9fb]">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div key={feature.title} className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="relative w-40 h-40 mb-6">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-[#1a1816] mb-3">{feature.title}</h3>
                            <p className="text-gray-600 mb-8 flex-1 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                            <Link
                                href={feature.buttonLink}
                                className="px-6 py-2.5 rounded-full border border-[#1F3A5F] text-[#1F3A5F] font-bold hover:bg-[#1F3A5F]/5 transition-colors"
                            >
                                {feature.buttonText}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
