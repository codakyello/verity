/* eslint-disable @next/next/no-img-element */
import { CheckCircle, Heart } from 'lucide-react';
import { Property } from '@/lib/types';

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0px_1px_4px_rgba(0,0,0,0.16)] transition-all duration-300 hover:shadow-[0px_2px_8px_rgba(0,0,0,0.16)]">
            {/* Image Container - Flush with content, no bottom radius */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Tags Overlay - Top Left */}
                {property.tags && property.tags.length > 0 && (
                    <div className="absolute top-3 left-3 flex gap-2">
                        {property.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="rounded-full bg-[#1F3A5F] px-3 py-1 text-xs font-bold text-white shadow-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Favorite Icon - Top Right */}
                <button
                    className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition-transform hover:scale-110 active:scale-95"
                    aria-label="Add to favorites"
                >
                    <Heart className="h-4 w-4" />
                </button>
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
            </div>

            {/* Card Content - Anchored to image */}
            <div className="flex flex-col gap-1 p-5">
                {/* 2. Price (Dominant) */}
                <div className="mt-2">
                    <span className="font-display text-[20px] font-bold tracking-tight text-[#1a1816]">
                        ₦{(property.price).toLocaleString()}
                    </span>
                </div>

                {/* 3. Key Specs */}
                <div className="mt-2 flex items-baseline gap-[12px] text-base text-[#1a1816]">
                    <span className="font-bold">{property.bedrooms} <span className="font-normal ">bed</span></span>
                    <span className="font-bold">{property.bathrooms} <span className="font-normal ">bath</span></span>
                    <span className="font-bold">{property.sizeSqft.toLocaleString()} <span className="font-normal ">sqft lot</span></span>
                </div>

                {/* 4. Address */}
                <div className="mt-2 flex flex-col text-sm font-body">
                    <span>{property.address}</span>
                    <span>{property.location}</span>
                </div>
            </div>
        </div>
    );
}
