'use client';

import PropertyCard from './PropertyCard';
import { Property } from '@/lib/types';

const FEATURED_PROPERTIES: Property[] = [
    {
        id: '1',
        title: 'Modern Luxury Villa',
        price: 850000000,
        address: '5 Banana Island Road',
        location: 'Ikoyi, Lagos',
        bedrooms: 5,
        bathrooms: 6,
        sizeSqft: 6500,
        imageUrl: '/images/featured/featured-1.png',
        tags: ['New Construction', 'Waterfront'],
        currency: 'NGN',
        type: 'House',
        images: ['/images/featured/featured-1.png'],
        isVerified: true,
        amenities: ['Pool', 'Gym'],
        description: 'Luxury villa',
        agent: { name: 'Verity Agent', phone: '08000000000', email: 'agent@verity.ng', image: '/images/agent.jpg' },
        createdAt: '2023-01-01',
        updatedAt: '2023-01-01',
        features: ['Smart Home'],
        listedDate: '2023-01-01'
    },
    {
        id: '2',
        title: 'Skyline Penthouse',
        price: 450000000,
        address: '1004 Victoria Island',
        location: 'Victoria Island, Lagos',
        bedrooms: 3,
        bathrooms: 3.5,
        sizeSqft: 3200,
        imageUrl: '/images/featured/featured-2.png',
        tags: ['City View', 'Smart Home'],
        currency: 'NGN',
        type: 'House',
        images: ['/images/featured/featured-2.png'],
        isVerified: true,
        amenities: ['Pool', 'Gym'],
        description: 'Penthouse with view',
        agent: { name: 'Verity Agent', phone: '08000000000', email: 'agent@verity.ng', image: '/images/agent.jpg' },
        createdAt: '2023-01-01',
        updatedAt: '2023-01-01',
        features: ['View'],
        listedDate: '2023-01-01'
    },
    {
        id: '3',
        title: 'Royal Gardens Estate',
        price: 120000000,
        address: 'Plot 4, Lekki-Epe Expressway',
        location: 'Lekki, Lagos',
        bedrooms: 4,
        bathrooms: 4,
        sizeSqft: 4000,
        imageUrl: '/images/featured/featured-1.png',
        tags: ['Gated Community'],
        currency: 'NGN',
        type: 'House',
        images: ['/images/featured/featured-1.png'],
        isVerified: true,
        amenities: ['Garden'],
        description: 'Family home',
        agent: { name: 'Verity Agent', phone: '08000000000', email: 'agent@verity.ng', image: '/images/agent.jpg' },
        createdAt: '2023-01-01',
        updatedAt: '2023-01-01',
        features: ['Garden'],
        listedDate: '2023-01-01'
    },
    {
        id: '4',
        title: 'Contemporary Duplex',
        price: 280000000,
        address: 'Chevron Drive',
        location: 'Lekki, Lagos',
        bedrooms: 5,
        bathrooms: 5,
        sizeSqft: 4500,
        imageUrl: '/images/featured/featured-2.png',
        tags: ['Modern Finish'],
        currency: 'NGN',
        type: 'House',
        images: ['/images/featured/featured-2.png'],
        isVerified: true,
        amenities: ['Parking'],
        description: 'Modern duplex',
        agent: { name: 'Verity Agent', phone: '08000000000', email: 'agent@verity.ng', image: '/images/agent.jpg' },
        createdAt: '2023-01-01',
        updatedAt: '2023-01-01',
        features: ['Modern'],
        listedDate: '2023-01-01'
    }
];

export default function FeaturedSection() {
    return (
        <section className="py-20 bg-white">
            <div className="px-6 md:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                    <div>
                        <h2 className="text-3xl font-display font-bold text-[#1a1816] mb-2">Featured Listings</h2>
                        <p className="text-gray-500">Curated premium properties just for you.</p>
                    </div>
                    <button className="hidden md:block text-[#1F3A5F] font-bold hover:underline mt-4 md:mt-0">
                        View all listings &rarr;
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATURED_PROPERTIES.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <button className="text-[#1F3A5F] font-bold hover:underline">
                        View all listings &rarr;
                    </button>
                </div>
            </div>
        </section>
    );
}
