'use client';

import { useState } from 'react';
import { ChevronDown, SlidersHorizontal, Check } from 'lucide-react';
import { PropertyType, SortOption } from '@/lib/types';

interface FilterBarProps {
    filters: {
        minPrice: number | null;
        maxPrice: number | null;
        type: PropertyType | 'All';
        bedrooms: number | 'Any';
    };
    onPriceChange: (min: number | null, max: number | null) => void;
    onTypeChange: (type: PropertyType | 'All') => void;
    onBedroomsChange: (bedrooms: number | 'Any') => void;
    sortBy: SortOption;
    onSortChange: (sort: SortOption) => void;
    totalCount: number;
}

export default function FilterBar({
    filters,
    onPriceChange,
    onTypeChange,
    onBedroomsChange,
    sortBy,
    onSortChange,
    totalCount
}: FilterBarProps) {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleDropdown = (name: string) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    const closeDropdown = () => setActiveDropdown(null);

    // Overlay to close dropdowns when clicking outside
    const Overlay = () => (
        <div
            className="fixed inset-0 z-40 bg-transparent"
            onClick={closeDropdown}
        />
    );

    return (
        <div className="sticky top-[72px] z-30 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
            {activeDropdown && <Overlay />}

            <div className="container mx-auto px-4 lg:px-6">
                <div className="flex h-[72px] items-center justify-between gap-4">

                    {/* Left: Filter Pills */}
                    <div className="flex items-center gap-3 overflow-x-auto pb-4 pt-4 scrollbar-hide lg:pb-0 lg:pt-0">
                        {/* Main Filters Button (Mobile/Tablet usually, but here distinct) */}
                        <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-bold text-[#1a1816] transition-all hover:border-[#1F3A5F] hover:text-[#1F3A5F] active:scale-95">
                            <SlidersHorizontal className="h-4 w-4" />
                            <span>Filters</span>
                        </button>

                        <div className="h-6 w-[1px] bg-gray-200 mx-1 hidden lg:block" />

                        {/* Price Filter */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown('price')}
                                className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition-all
                                    ${activeDropdown === 'price' || filters.minPrice || filters.maxPrice
                                        ? 'border-[#1F3A5F] bg-[#F8FAFC] text-[#1F3A5F]'
                                        : 'border-gray-200 bg-white text-[#1a1816] hover:border-gray-300'
                                    }`}
                            >
                                <span>Price</span>
                                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'price' ? 'rotate-180' : ''}`} />
                            </button>

                            {activeDropdown === 'price' && (
                                <div className="absolute top-[calc(100%+8px)] left-0 z-50 w-[300px] rounded-2xl border border-gray-100 bg-white p-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
                                    <h3 className="mb-4 text-sm font-bold text-gray-500 uppercase tracking-wider">Price Range (NGN)</h3>
                                    <div className="flex items-center gap-3">
                                        <div className="relative flex-1">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">₦</span>
                                            <input
                                                type="number"
                                                placeholder="Min"
                                                className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-7 pr-3 text-sm font-medium focus:border-[#1F3A5F] focus:outline-none"
                                                value={filters.minPrice || ''}
                                                onChange={(e) => onPriceChange(e.target.value ? Number(e.target.value) : null, filters.maxPrice)}
                                            />
                                        </div>
                                        <span className="text-gray-300">-</span>
                                        <div className="relative flex-1">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">₦</span>
                                            <input
                                                type="number"
                                                placeholder="Max"
                                                className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-7 pr-3 text-sm font-medium focus:border-[#1F3A5F] focus:outline-none"
                                                value={filters.maxPrice || ''}
                                                onChange={(e) => onPriceChange(filters.minPrice, e.target.value ? Number(e.target.value) : null)}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-end">
                                        <button
                                            onClick={closeDropdown}
                                            className="rounded-lg bg-[#1F3A5F] px-4 py-2 text-sm font-bold text-white hover:bg-[#162942]"
                                        >
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Property Type Filter */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown('type')}
                                className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition-all
                                    ${activeDropdown === 'type' || filters.type !== 'All'
                                        ? 'border-[#1F3A5F] bg-[#F8FAFC] text-[#1F3A5F]'
                                        : 'border-gray-200 bg-white text-[#1a1816] hover:border-gray-300'
                                    }`}
                            >
                                <span>{filters.type === 'All' ? 'Property Type' : filters.type}</span>
                                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'type' ? 'rotate-180' : ''}`} />
                            </button>

                            {activeDropdown === 'type' && (
                                <div className="absolute top-[calc(100%+8px)] left-0 z-50 w-[240px] rounded-2xl border border-gray-100 bg-white p-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
                                    {['All', 'House', 'Apartment', 'Land', 'Office'].map((type) => (
                                        <button
                                            key={type}
                                            className="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-left text-sm font-medium hover:bg-gray-50 transition-colors"
                                            onClick={() => {
                                                onTypeChange(type as PropertyType | 'All');
                                                closeDropdown();
                                            }}
                                        >
                                            <span className={filters.type === type ? 'text-[#1F3A5F] font-bold' : 'text-[#1a1816]'}>
                                                {type === 'All' ? 'All Types' : type}
                                            </span>
                                            {filters.type === type && <Check className="h-4 w-4 text-[#1F3A5F]" />}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Bedrooms Filter */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown('bedrooms')}
                                className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition-all
                                    ${activeDropdown === 'bedrooms' || filters.bedrooms !== 'Any'
                                        ? 'border-[#1F3A5F] bg-[#F8FAFC] text-[#1F3A5F]'
                                        : 'border-gray-200 bg-white text-[#1a1816] hover:border-gray-300'
                                    }`}
                            >
                                <span>{filters.bedrooms === 'Any' ? 'Bedrooms' : `${filters.bedrooms}+ Beds`}</span>
                                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'bedrooms' ? 'rotate-180' : ''}`} />
                            </button>

                            {activeDropdown === 'bedrooms' && (
                                <div className="absolute top-[calc(100%+8px)] left-0 z-50 w-[280px] rounded-2xl border border-gray-100 bg-white p-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
                                    <h3 className="mb-4 text-sm font-bold text-gray-500 uppercase tracking-wider">Bedrooms</h3>
                                    <div className="flex gap-2">
                                        {['Any', 1, 2, 3, 4].map((num) => (
                                            <button
                                                key={num}
                                                onClick={() => {
                                                    onBedroomsChange(num as number | 'Any');
                                                    closeDropdown();
                                                }}
                                                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all
                                                    ${filters.bedrooms === num
                                                        ? 'bg-[#1F3A5F] text-white shadow-md'
                                                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                                    }`}
                                            >
                                                {num === 'Any' ? 'Any' : `${num}+`}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>

                    {/* Right: Sort & Count */}
                    <div className="hidden items-center gap-4 lg:flex">
                        <span className="text-sm text-gray-500 font-medium">
                            {totalCount} <span className="text-gray-400">Listings</span>
                        </span>

                        <div className="h-4 w-[1px] bg-gray-200" />

                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown('sort')}
                                className="flex items-center gap-1.5 text-sm font-bold text-[#1a1816] hover:text-[#1F3A5F]"
                            >
                                <span>Sort by: <span className="text-[#1F3A5F]">{sortBy === 'newest' ? 'Newest' : sortBy === 'price-asc' ? 'Price: Low to High' : 'Price: High to Low'}</span></span>
                                <ChevronDown className="h-3.5 w-3.5" />
                            </button>

                            {activeDropdown === 'sort' && (
                                <div className="absolute top-[calc(100%+8px)] right-0 z-50 w-[200px] rounded-xl border border-gray-100 bg-white p-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
                                    {[
                                        { label: 'Newest', value: 'newest' },
                                        { label: 'Price: Low to High', value: 'price-asc' },
                                        { label: 'Price: High to Low', value: 'price-desc' },
                                    ].map((option) => (
                                        <button
                                            key={option.value}
                                            className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-gray-50 transition-colors"
                                            onClick={() => {
                                                onSortChange(option.value as SortOption);
                                                closeDropdown();
                                            }}
                                        >
                                            <span className={sortBy === option.value ? 'text-[#1F3A5F] font-bold' : 'text-[#1a1816]'}>
                                                {option.label}
                                            </span>
                                            {sortBy === option.value && <Check className="h-3.5 w-3.5 text-[#1F3A5F]" />}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
