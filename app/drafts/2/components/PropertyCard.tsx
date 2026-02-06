/* eslint-disable @next/next/no-img-element */
import { Property } from '@/lib/types';
import { Leaf } from 'lucide-react';

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">

            {/* Image with overlay */}
            <div className="relative aspect-[4/5] w-full overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40"></div>
                <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {property.isVerified && (
                    <div className="absolute top-6 right-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm">
                        <Leaf className="h-5 w-5 text-[#2C3E2C]" />
                    </div>
                )}
            </div>

            {/* Floating Info Card */}
            <div className="absolute bottom-4 left-4 right-4 z-20 rounded-3xl bg-white/95 p-5 shadow-sm backdrop-blur-md">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="font-serif text-lg text-[#2C3E2C]">
                            {property.location}
                        </h3>
                        <p className="font-sans text-xs tracking-wide text-[#7A8C7A] uppercase">
                            {property.type} • {property.bedrooms} Beds
                        </p>
                    </div>
                    <div className="text-right">
                        <span className="block font-serif text-lg text-[#C17C5F]">
                            {(property.price / 1_000_000).toFixed(1)}M
                        </span>
                        <span className="text-[10px] text-[#7A8C7A]">NGN</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
