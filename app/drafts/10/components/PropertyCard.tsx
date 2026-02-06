/* eslint-disable @next/next/no-img-element */
import { Property } from '@/lib/types';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="group flex flex-col rounded-2xl border border-[#E5E7EB] bg-white transition-all duration-300 hover:border-[#6366F1]/30 hover:shadow-xl hover:shadow-indigo-100/50">
            {/* Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl bg-[#F3F4F6]">
                <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {property.isVerified && (
                    <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-[#6366F1] shadow-sm">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Verified
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
                <div className="flex-1">
                    <p className="text-xs font-semibold text-[#6366F1] uppercase tracking-wide">
                        {property.type} • {property.location}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-[#111827] leading-snug line-clamp-2">
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

                <div className="mt-5 flex items-center justify-between border-t border-[#F3F4F6] pt-5">
                    <span className="text-xl font-bold text-[#111827]">
                        ₦{(property.price / 1_000_000).toLocaleString()}M
                    </span>
                    <button className="flex items-center gap-1 rounded-lg bg-[#F3F4F6] px-4 py-2 text-sm font-semibold text-[#374151] transition hover:bg-[#6366F1] hover:text-white group-hover:bg-[#6366F1] group-hover:text-white">
                        View <ArrowUpRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
