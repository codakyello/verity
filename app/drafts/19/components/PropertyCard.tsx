/* eslint-disable @next/next/no-img-element */
import { Property } from '@/lib/types';
import { Shield, ArrowRight } from 'lucide-react';

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="group flex flex-col bg-white border border-[#E8E0D5] overflow-hidden hover:shadow-2xl transition-all duration-500">
            {/* Image */}
            <div className="relative aspect-[3/2] w-full overflow-hidden">
                <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {property.isVerified && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#C9A962] px-3 py-1.5 text-xs font-medium text-white">
                        <Shield className="h-3.5 w-3.5" />
                        Verified
                    </div>
                )}

                {/* Price on image */}
                <div className="absolute bottom-4 left-4">
                    <span className="font-display text-3xl text-white">
                        ₦{(property.price / 1_000_000).toLocaleString()}M
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6 bg-[#FAF5ED]">
                <div className="flex-1">
                    <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#C9A962]">
                        {property.type} • {property.location}
                    </p>
                    <h3 className="mt-3 font-display text-xl text-[#1A1A1A] leading-snug">
                        {property.title}
                    </h3>

                    <div className="mt-4 flex items-center gap-6 text-sm text-[#7A7A7A]">
                        <div>
                            <span className="block font-display text-lg text-[#1A1A1A]">{property.bedrooms}</span>
                            <span className="text-xs">Bedrooms</span>
                        </div>
                        <div className="h-8 w-px bg-[#E8E0D5]" />
                        <div>
                            <span className="block font-display text-lg text-[#1A1A1A]">{property.bathrooms}</span>
                            <span className="text-xs">Bathrooms</span>
                        </div>
                        <div className="h-8 w-px bg-[#E8E0D5]" />
                        <div>
                            <span className="block font-display text-lg text-[#1A1A1A]">{property.sizeSqft.toLocaleString()}</span>
                            <span className="text-xs">Sq. Ft.</span>
                        </div>
                    </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E8E0D5]">
                    <button className="flex items-center gap-2 text-sm font-medium text-[#8B2635] hover:text-[#C9A962] transition-colors group/btn">
                        View Residence
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                </div>
            </div>
        </div>
    );
}
