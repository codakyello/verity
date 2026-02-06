/* eslint-disable @next/next/no-img-element */
import { Property } from '@/lib/types';
import { MapPin, Bed, Bath, Maximize, Shield } from 'lucide-react';

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="group rounded-xl border border-[#E5E5E5] bg-white transition-all duration-300 hover:border-[#D1D5DB] hover:shadow-lg">
            {/* Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-xl bg-[#F3F4F6]">
                <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {property.isVerified && (
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-md bg-[#10B981] px-2.5 py-1 text-xs font-semibold text-white">
                        <Shield className="h-3 w-3" /> Verified
                    </div>
                )}

                <div className="absolute bottom-3 right-3 rounded-md bg-white/95 px-3 py-1.5 text-sm font-bold text-[#1C1C1E] shadow-sm backdrop-blur-sm">
                    ₦{(property.price / 1_000_000).toLocaleString()}M
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-lg font-semibold text-[#1C1C1E] line-clamp-1 group-hover:text-[#10B981] transition-colors">
                    {property.title}
                </h3>

                <div className="mt-2 flex items-center gap-1.5 text-sm text-[#6B7280]">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{property.address}</span>
                </div>

                <div className="mt-4 flex items-center gap-5 border-t border-[#F3F4F6] pt-4">
                    <div className="flex items-center gap-1.5 text-sm text-[#6B7280]">
                        <Bed className="h-4 w-4" />
                        <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-[#6B7280]">
                        <Bath className="h-4 w-4" />
                        <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-[#6B7280]">
                        <Maximize className="h-4 w-4" />
                        <span>{property.sizeSqft.toLocaleString()} sqft</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
