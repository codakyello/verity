/* eslint-disable @next/next/no-img-element */
import { Property } from '@/lib/types';
import { Check } from 'lucide-react';

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="group flex flex-col">
            {/* Image with thick left border accent */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#D1DDD4]">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0D5C5C] z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {property.isVerified && (
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-white px-3 py-1.5 text-xs font-semibold text-[#0D5C5C]">
                        <Check className="h-3.5 w-3.5" /> Verified
                    </div>
                )}
            </div>

            {/* Content - Editorial spacing */}
            <div className="flex flex-col gap-2 pt-5">
                <div className="flex items-start justify-between">
                    <h3 className="font-serif text-lg font-medium text-[#0D2818] leading-snug">
                        {property.location}
                    </h3>
                    <span className="text-sm font-semibold text-[#0D5C5C]">
                        ₦{(property.price / 1_000_000).toLocaleString()}M
                    </span>
                </div>

                <p className="text-sm text-[#4A6455] line-clamp-1">
                    {property.title}
                </p>

                <div className="mt-1 flex items-center gap-4 text-xs text-[#6B7F72] uppercase tracking-wider">
                    <span>{property.bedrooms} Beds</span>
                    <span className="h-1 w-1 rounded-full bg-[#6B7F72]"></span>
                    <span>{property.bathrooms} Baths</span>
                    <span className="h-1 w-1 rounded-full bg-[#6B7F72]"></span>
                    <span>{property.sizeSqft.toLocaleString()} Sqft</span>
                </div>
            </div>
        </div>
    );
}
