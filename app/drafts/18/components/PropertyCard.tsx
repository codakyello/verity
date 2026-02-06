/* eslint-disable @next/next/no-img-element */
import { Property } from '@/lib/types';
import { CheckCircle, ArrowUpRight } from 'lucide-react';

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="group flex flex-col bg-white border-2 border-[#E5E5E5] hover:border-[#0A0A0A] transition-all duration-300">
            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5F5F5]">
                <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {property.isVerified && (
                    <div className="absolute top-0 left-0 bg-[#0A0A0A] px-3 py-2 text-xs font-medium text-white flex items-center gap-1.5">
                        <CheckCircle className="h-3.5 w-3.5" />
                        VERIFIED
                    </div>
                )}

                {/* Price Tag */}
                <div className="absolute bottom-0 right-0 bg-[#FF3D00] px-4 py-2">
                    <span className="font-display text-2xl text-white">
                        ₦{(property.price / 1_000_000).toLocaleString()}M
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
                <div className="flex-1">
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF3D00]">
                        {property.type}
                    </p>
                    <h3 className="mt-2 font-display text-xl text-[#0A0A0A]">
                        {property.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#6B7280]">
                        {property.location}
                    </p>

                    <div className="mt-4 flex items-center gap-4 text-sm text-[#6B7280]">
                        <span className="font-medium">{property.bedrooms} BD</span>
                        <span>•</span>
                        <span className="font-medium">{property.bathrooms} BA</span>
                        <span>•</span>
                        <span className="font-medium">{property.sizeSqft.toLocaleString()} SF</span>
                    </div>
                </div>

                <div className="mt-5 pt-5 border-t border-[#E5E5E5]">
                    <button className="w-full flex items-center justify-center gap-2 bg-[#0A0A0A] py-3 text-sm font-medium text-white hover:bg-[#FF3D00] transition-colors group/btn">
                        VIEW PROPERTY
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
