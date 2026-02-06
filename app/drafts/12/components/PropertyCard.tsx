/* eslint-disable @next/next/no-img-element */
import { Property } from '@/lib/types';
import { Heart, ArrowUpRight } from 'lucide-react';

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="group flex flex-col rounded-2xl bg-white shadow-[0_4px_20px_rgba(255,107,107,0.08)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(255,107,107,0.15)] hover:-translate-y-1">
            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl bg-[#FFE4DE]">
                <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {property.isVerified && (
                    <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-bold text-[#FF6B6B] shadow-sm">
                        <Heart className="h-3 w-3 fill-[#FF6B6B]" /> Verified
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
                <div className="flex-1">
                    <p className="text-xs font-bold text-[#FF6B6B] uppercase tracking-wide">
                        {property.type} • {property.location}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-[#1F2937] leading-snug line-clamp-2">
                        {property.title}
                    </h3>

                    <div className="mt-3 flex items-center gap-4 text-sm text-[#6B7280]">
                        <span>{property.bedrooms} beds</span>
                        <span>•</span>
                        <span>{property.bathrooms} baths</span>
                        <span>•</span>
                        <span>{property.sizeSqft.toLocaleString()} sqft</span>
                    </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-[#FFE4DE] pt-5">
                    <span className="text-xl font-extrabold text-[#1F2937]">
                        ₦{(property.price / 1_000_000).toLocaleString()}M
                    </span>
                    <button className="flex items-center gap-1 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] px-4 py-2 text-sm font-bold text-white shadow-md shadow-[#FF6B6B]/20 transition hover:shadow-lg hover:shadow-[#FF6B6B]/30">
                        View <ArrowUpRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
