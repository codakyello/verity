/* eslint-disable @next/next/no-img-element */
import { Property } from '@/lib/types';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="group flex flex-col bg-white border border-[#E8E6E3] transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5F5F5]">
                <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {property.isVerified && (
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-[#1E3A5F]">
                        <CheckCircle className="h-3.5 w-3.5" />
                        Verified
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
                <div className="flex-1">
                    <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#B8860B]">
                        {property.type}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-normal text-[#1A1A2E] leading-snug">
                        {property.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#6B7280]">
                        {property.location}
                    </p>

                    <div className="mt-4 flex items-center gap-4 text-sm text-[#6B7280]">
                        <span>{property.bedrooms} Beds</span>
                        <span className="text-[#E8E6E3]">|</span>
                        <span>{property.bathrooms} Baths</span>
                        <span className="text-[#E8E6E3]">|</span>
                        <span>{property.sizeSqft.toLocaleString()} sqft</span>
                    </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[#E8E6E3] flex items-center justify-between">
                    <div>
                        <span className="font-display text-2xl text-[#1A1A2E]">
                            ₦{(property.price / 1_000_000).toLocaleString()}M
                        </span>
                    </div>
                    <button className="flex items-center gap-2 text-sm font-medium text-[#1E3A5F] hover:text-[#B8860B] transition-colors group/btn">
                        View Details
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                </div>
            </div>
        </div>
    );
}
