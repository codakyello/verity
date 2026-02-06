/* eslint-disable @next/next/no-img-element */
import { Property } from '@/lib/types';
import { CheckCircle } from 'lucide-react';

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="group flex flex-col">
            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#E5E7EB] bg-[#F9FAFB]">
                <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {/* Verified tag - Design 16 style: top-left, CheckCircle, no border */}
                {property.isVerified && (
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-[#1E3A5F]">
                        <CheckCircle className="h-3.5 w-3.5" />
                        Verified
                    </div>
                )}
            </div>

            {/* Content - Design 24 card layout */}
            <div className="flex flex-col gap-1 pt-4">
                <div className="flex items-start justify-between">
                    <h3 className="font-display text-base text-[#1A1A2E]">
                        {property.location}
                    </h3>
                    <span className="text-base font-semibold text-[#1E3A5F]">
                        ₦{(property.price / 1_000_000).toLocaleString()}M
                    </span>
                </div>

                <p className="text-sm text-[#6B7280] line-clamp-1">
                    {property.title}
                </p>

                <div className="mt-1 flex items-center gap-3 text-xs text-[#9CA3AF]">
                    <span>{property.bedrooms} beds</span>
                    <span>•</span>
                    <span>{property.bathrooms} baths</span>
                    <span>•</span>
                    <span>{property.sizeSqft.toLocaleString()} sqft</span>
                </div>
            </div>
        </div>
    );
}
