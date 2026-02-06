/* eslint-disable @next/next/no-img-element */
import { Property } from '@/lib/types';

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="group relative border-4 border-black bg-white p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">

            {/* Label Badge */}
            <div className="absolute top-0 left-0 z-10 border-b-4 border-r-4 border-black bg-[#CCFF00] px-2 py-1 font-mono text-xs font-bold uppercase">
                {property.type}
            </div>

            <div className="aspect-square w-full border-4 border-black grayscale filter transition-all duration-300 group-hover:grayscale-0">
                <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="mt-4 flex flex-col gap-2 font-mono">
                <div className="flex items-start justify-between border-b-2 border-black pb-2">
                    <h3 className="text-lg font-bold leading-tight uppercase">{property.title}</h3>
                </div>

                <div className="flex justify-between text-sm font-bold">
                    <span>LOC: {property.location.toUpperCase()}</span>
                    <span>ID: #{property.id.padStart(4, '0')}</span>
                </div>

                <div className="mt-2 bg-black text-center text-xl font-bold text-white py-2">
                    ₦{(property.price / 1_000_000).toLocaleString()}M
                </div>

                {property.isVerified && (
                    <div className="mt-1 border-2 border-dashed border-black py-1 text-center text-xs font-bold uppercase tracking-widest text-[#00AA00]">
                        Verified Authenticity
                    </div>
                )}
            </div>
        </div>
    );
}
