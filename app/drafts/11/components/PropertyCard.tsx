/* eslint-disable @next/next/no-img-element */
import { Property } from '@/lib/types';
import { MapPin, Bed, Bath, Maximize, Crown } from 'lucide-react';

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="group rounded-lg border border-[#27272A] bg-[#18181B] transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
            {/* Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-lg bg-[#27272A]">
                <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {property.isVerified && (
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded bg-[#D4AF37] px-2.5 py-1 text-xs font-semibold text-[#0F0F11]">
                        <Crown className="h-3 w-3" /> Exclusive
                    </div>
                )}

                <div className="absolute bottom-3 right-3 rounded bg-[#0F0F11]/95 px-3 py-1.5 text-sm font-bold text-[#D4AF37] shadow-sm backdrop-blur-sm">
                    ₦{(property.price / 1_000_000).toLocaleString()}M
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="font-serif text-lg text-[#FAFAFA] line-clamp-1 group-hover:text-[#D4AF37] transition-colors">
                    {property.title}
                </h3>

                <div className="mt-2 flex items-center gap-1.5 text-sm text-[#71717A]">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{property.address}</span>
                </div>

                <div className="mt-4 flex items-center gap-5 border-t border-[#27272A] pt-4">
                    <div className="flex items-center gap-1.5 text-sm text-[#71717A]">
                        <Bed className="h-4 w-4" />
                        <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-[#71717A]">
                        <Bath className="h-4 w-4" />
                        <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-[#71717A]">
                        <Maximize className="h-4 w-4" />
                        <span>{property.sizeSqft.toLocaleString()} sqft</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
