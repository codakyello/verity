/* eslint-disable @next/next/no-img-element */
import { Property } from '@/lib/types';
import { Heart, Sparkles } from 'lucide-react';

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="group relative overflow-hidden rounded-3xl bg-white p-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(167,139,250,0.15)] hover:-translate-y-1">
            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#F3F4F6]">
                <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Floating Actions */}
                <button className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[#9CA3AF] shadow-sm backdrop-blur-sm transition hover:bg-white hover:text-[#F472B6]">
                    <Heart className="h-4 w-4" />
                </button>

                {property.isVerified && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#A78BFA] to-[#F472B6] px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
                        <Sparkles className="h-3 w-3" /> Verified
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="mt-4 space-y-2 px-1">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="font-semibold text-[#1F2937] line-clamp-1">{property.title}</h3>
                        <p className="text-sm text-[#9CA3AF]">{property.location}</p>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-4 text-xs text-[#6B7280]">
                        <span className="rounded-lg bg-[#F3F4F6] px-2 py-1">{property.bedrooms} beds</span>
                        <span className="rounded-lg bg-[#F3F4F6] px-2 py-1">{property.bathrooms} baths</span>
                    </div>
                    <span className="text-lg font-bold text-[#A78BFA]">
                        ₦{(property.price / 1_000_000).toLocaleString()}M
                    </span>
                </div>
            </div>
        </div>
    );
}
