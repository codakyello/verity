/* eslint-disable @next/next/no-img-element */
import { Property } from '@/lib/types';
import { Leaf, ArrowUpRight } from 'lucide-react';

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="group flex flex-col rounded-3xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {property.isVerified && (
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-[#6B7B5E]">
                        <Leaf className="h-3.5 w-3.5" />
                        Verified
                    </div>
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6 bg-white">
                <div className="flex-1">
                    <div className="flex items-center gap-2 text-xs text-[#C17F59] font-medium">
                        <span className="uppercase tracking-wide">{property.type}</span>
                        <span>•</span>
                        <span>{property.location}</span>
                    </div>

                    <h3 className="mt-3 font-display text-xl text-[#2D2A26] leading-snug">
                        {property.title}
                    </h3>

                    <div className="mt-4 flex items-center gap-4 text-sm text-[#7A7067]">
                        <span>{property.bedrooms} beds</span>
                        <span className="text-[#E8E0D5]">|</span>
                        <span>{property.bathrooms} baths</span>
                        <span className="text-[#E8E0D5]">|</span>
                        <span>{property.sizeSqft.toLocaleString()} sqft</span>
                    </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#F5EDE4] flex items-center justify-between">
                    <span className="font-display text-2xl text-[#2D2A26]">
                        ₦{(property.price / 1_000_000).toLocaleString()}M
                    </span>
                    <button className="flex items-center gap-1 rounded-full bg-[#F5EDE4] px-4 py-2 text-sm font-medium text-[#2D2A26] hover:bg-[#C17F59] hover:text-white transition-all group/btn">
                        Explore
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
