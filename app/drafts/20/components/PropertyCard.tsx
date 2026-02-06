/* eslint-disable @next/next/no-img-element */
import { Property } from '@/lib/types';
import { CheckCircle, ArrowUpRight } from 'lucide-react';

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="group flex flex-col rounded-2xl bg-[#12121A] border border-[#1F1F2E] overflow-hidden hover:border-[#3B82F6]/50 transition-all duration-300">
            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {property.isVerified && (
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] px-3 py-1.5 text-xs font-medium text-white">
                        <CheckCircle className="h-3.5 w-3.5" />
                        Verified
                    </div>
                )}

                {/* Glass overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
                <div className="flex-1">
                    <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
                        <span className="rounded-md bg-[#1F1F2E] px-2 py-1 font-medium">{property.type}</span>
                        <span>•</span>
                        <span>{property.location}</span>
                    </div>

                    <h3 className="mt-3 font-display text-lg font-semibold text-white leading-snug">
                        {property.title}
                    </h3>

                    <div className="mt-4 flex items-center gap-4 text-sm text-[#9CA3AF]">
                        <span>{property.bedrooms} beds</span>
                        <span className="text-[#1F1F2E]">|</span>
                        <span>{property.bathrooms} baths</span>
                        <span className="text-[#1F1F2E]">|</span>
                        <span>{property.sizeSqft.toLocaleString()} sqft</span>
                    </div>
                </div>

                <div className="mt-5 pt-5 border-t border-[#1F1F2E] flex items-center justify-between">
                    <span className="font-display text-2xl font-bold gradient-text">
                        ₦{(property.price / 1_000_000).toLocaleString()}M
                    </span>
                    <button className="flex items-center gap-1 rounded-lg bg-[#1F1F2E] px-4 py-2 text-sm font-medium text-white hover:bg-gradient-to-r hover:from-[#3B82F6] hover:to-[#06B6D4] transition-all group/btn">
                        View
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
