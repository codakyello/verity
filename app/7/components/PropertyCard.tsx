/* eslint-disable @next/next/no-img-element */
import { Property } from '@/lib/types';

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="group cursor-pointer">
            {/* Large editorial image */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#E8E4DD]">
                <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10"></div>

                {/* Price tag - editorial style */}
                <div className="absolute bottom-6 left-6">
                    <span className="bg-[#FAF8F5] px-4 py-2 font-sans text-xs font-semibold tracking-wider text-[#111111] uppercase">
                        ₦{(property.price / 1_000_000).toLocaleString()}M
                    </span>
                </div>
            </div>

            {/* Content - Magazine layout */}
            <div className="mt-6 space-y-2">
                <p className="font-sans text-xs font-medium tracking-widest text-[#B5915A] uppercase">
                    {property.location} · {property.type}
                </p>
                <h3 className="font-serif text-xl font-medium leading-tight text-[#111111] group-hover:text-[#B5915A] transition-colors">
                    {property.title}
                </h3>
                <p className="font-sans text-sm text-[#6B6B6B] leading-relaxed line-clamp-2">
                    {property.description}
                </p>

                {property.isVerified && (
                    <p className="pt-2 font-sans text-xs font-medium tracking-wider text-[#111111] uppercase border-t border-[#E8E4DD] mt-4">
                        Verified by Verity
                    </p>
                )}
            </div>
        </div>
    );
}
