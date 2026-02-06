/* eslint-disable @next/next/no-img-element */
import { Property } from '@/lib/types';
import { Check } from 'lucide-react';

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="group flex flex-col gap-4">
            {/* Image with generous rounded corners */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#E5E7EB]">
                <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                {property.isVerified && (
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-[#1A1A1A] shadow-sm backdrop-blur-sm">
                        <Check className="h-3.5 w-3.5 text-[#7C9DB3]" /> Verified
                    </div>
                )}
            </div>

            {/* Content - Airy spacing */}
            <div className="flex flex-col gap-1.5 px-1">
                <div className="flex items-start justify-between">
                    <h3 className="text-base font-semibold text-[#1A1A1A] leading-snug">
                        {property.location}
                    </h3>
                    <span className="text-sm font-semibold text-[#7C9DB3]">
                        ₦{(property.price / 1_000_000).toLocaleString()}M
                    </span>
                </div>

                <p className="text-sm text-[#6B7280] line-clamp-1">
                    {property.title}
                </p>

                <div className="mt-1 flex items-center gap-3 text-xs text-[#9CA3AF]">
                    <span>{property.bedrooms} beds</span>
                    <span className="h-1 w-1 rounded-full bg-[#D1D5DB]"></span>
                    <span>{property.bathrooms} baths</span>
                    <span className="h-1 w-1 rounded-full bg-[#D1D5DB]"></span>
                    <span>{property.sizeSqft.toLocaleString()} sqft</span>
                </div>
            </div>
        </div>
    );
}
