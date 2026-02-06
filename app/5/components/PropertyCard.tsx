/* eslint-disable @next/next/no-img-element */
import { Property } from '@/lib/types';
import { Heart, Star } from 'lucide-react';

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-neutral-800">

            {/* Full Bleed Image */}
            <img
                src={property.imageUrl}
                alt={property.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            {/* Top Overlay */}
            <div className="absolute top-4 right-4 z-20">
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition hover:bg-[#F25F4C] hover:text-white">
                    <Heart className="h-5 w-5 text-white" />
                </button>
            </div>

            {/* Verified Badge - Holographic */}
            {property.isVerified && (
                <div className="absolute top-4 left-4 z-20 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[1px]">
                    <div className="rounded-full bg-black/40 backdrop-blur-md px-3 py-1">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">Verified</span>
                    </div>
                </div>
            )}

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="flex-1 truncate text-lg font-bold text-white pr-2">{property.location}</h3>
                    <div className="flex items-center gap-1 rounded-lg bg-[#FF8906] px-2 py-1 text-xs font-bold text-white">
                        <Star className="h-3 w-3 fill-current" /> {property.rating}
                    </div>
                </div>

                <p className="text-sm font-medium text-gray-300 line-clamp-1 mb-3">{property.title}</p>

                <div className="flex items-center justify-between border-t border-white/20 pt-3">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400">Price</span>
                        <span className="text-xl font-bold text-white">₦{(property.price / 1_000_000).toLocaleString()}M</span>
                    </div>
                    <button className="rounded-xl bg-white text-black px-4 py-2 text-sm font-bold hover:bg-[#FF8906] hover:text-white transition-colors">
                        View
                    </button>
                </div>
            </div>
        </div>
    );
}
