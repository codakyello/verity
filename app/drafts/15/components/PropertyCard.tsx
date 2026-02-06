/* eslint-disable @next/next/no-img-element */
import { Property } from '@/lib/types';
import { Check } from 'lucide-react';

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="group flex flex-col gap-4">
            {/* Image with subtle border */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded border border-[#E8E2DB] bg-[#E8E2DB]">
                <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                {property.isVerified && (
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 border border-[#E8E2DB] bg-white/95 px-3 py-1.5 text-xs font-medium text-[#2D2926] backdrop-blur-sm">
                        <Check className="h-3.5 w-3.5 text-[#C65D3B]" /> Verified
                    </div>
                )}
            </div>

            {/* Content - Refined spacing */}
            <div className="flex flex-col gap-1.5 px-1">
                <div className="flex items-start justify-between">
                    <h3 className="font-serif text-base font-medium text-[#2D2926] leading-snug">
                        {property.location}
                    </h3>
                    <span className="text-sm font-semibold text-[#C65D3B]">
                        ₦{(property.price / 1_000_000).toLocaleString()}M
                    </span>
                </div>

                <p className="text-sm text-[#8B7355] line-clamp-1">
                    {property.title}
                </p>

                <div className="mt-1 flex items-center gap-3 text-xs text-[#B8A898]">
                    <span>{property.bedrooms} beds</span>
                    <span className="h-1 w-1 rounded-full bg-[#D1C9BE]"></span>
                    <span>{property.bathrooms} baths</span>
                    <span className="h-1 w-1 rounded-full bg-[#D1C9BE]"></span>
                    <span>{property.sizeSqft.toLocaleString()} sqft</span>
                </div>
            </div>
        </div>
    );
}
