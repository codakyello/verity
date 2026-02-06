/* eslint-disable @next/next/no-img-element */
import { Property } from '@/lib/types';
import { ShieldCheck, TrendingUp } from 'lucide-react';

export default function PropertyCard({ property }: { property: Property }) {
    return (
        <div className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md hover:border-slate-300">

            {/* Top Section: Compact Image & Key Data */}
            <div className="flex h-40">
                <div className="relative w-48 shrink-0">
                    <img src={property.imageUrl} alt={property.title} className="h-full w-full object-cover" />
                    {property.isVerified && (
                        <div className="absolute top-2 left-2 rounded bg-green-50 px-2 py-0.5 text-[10px] font-bold text-green-700 border border-green-200 flex items-center gap-1">
                            <ShieldCheck className="h-3 w-3" /> VERIFIED
                        </div>
                    )}
                </div>

                <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                        <h3 className="font-bold text-slate-900 line-clamp-1">{property.title}</h3>
                        <p className="text-xs text-slate-500 mt-1">{property.address}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-3">
                        <div>
                            <span className="block text-[10px] font-medium text-slate-400 uppercase">Valuation</span>
                            <span className="block text-sm font-bold text-slate-900">₦{(property.price / 1_000_000).toLocaleString()}M</span>
                        </div>
                        <div>
                            <span className="block text-[10px] font-medium text-slate-400 uppercase">Yield (Est.)</span>
                            <span className="flex items-center gap-1 text-sm font-bold text-green-600">
                                <TrendingUp className="h-3 w-3" /> 12.5%
                            </span>
                        </div>
                        <div>
                            <span className="block text-[10px] font-medium text-slate-400 uppercase">Risk Score</span>
                            <span className="block text-sm font-bold text-slate-900">A+</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Details Table Row style */}
            <div className="bg-slate-50 px-4 py-2 flex items-center justify-between border-t border-slate-200">
                <div className="flex gap-4 text-xs font-medium text-slate-500">
                    <span>ID: {property.id}</span>
                    <span>Type: {property.type}</span>
                    <span>{property.sizeSqft.toLocaleString()} SQFT</span>
                </div>
                <button className="text-xs font-bold text-[#0EA5E9] hover:text-[#0284C7] hover:underline">
                    View Analysis &rarr;
                </button>
            </div>
        </div>
    );
}
