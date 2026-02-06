/* eslint-disable @next/next/no-img-element */
import { Property } from '@/lib/types';
import { BadgeCheck } from 'lucide-react';

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="group relative flex flex-col gap-3 transition-opacity hover:opacity-90">
            {/* Image Container - Sharp Edges */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {property.isVerified && (
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-blue-600 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase backdrop-blur-md">
                        <BadgeCheck className="h-3 w-3" /> VERIFIED
                    </div>
                )}
                <div className="absolute right-4 bottom-4 bg-white px-3 py-1 text-sm font-semibold text-neutral-900">
                    ₦{(property.price / 1_000_000).toLocaleString()}M
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1">
                <h3 className="line-clamp-1 text-lg font-medium tracking-tight text-neutral-900">
                    {property.title}
                </h3>
                <p className="line-clamp-1 text-sm text-neutral-500">
                    {property.address}
                </p>

                <div className="mt-2 flex items-center gap-4 border-t border-neutral-100 pt-3 text-xs font-medium tracking-wide text-neutral-400 uppercase">
                    <span>{property.bedrooms} Beds</span>
                    <span>{property.bathrooms} Baths</span>
                    <span>{property.sizeSqft.toLocaleString()} sqft</span>
                </div>
            </div>
        </div>
    );
}
