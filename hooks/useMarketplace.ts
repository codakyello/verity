import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Property, PropertyType, SortOption } from '../lib/types';
import { PROPERTIES } from '../lib/mockData';

interface FilterState {
    location: string;
    minPrice: number | null;
    maxPrice: number | null;
    type: PropertyType | 'All';
    bedrooms: number | 'Any';
}

export const useMarketplace = () => {
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get('q') || '';

    const [searchQuery, setSearchQuery] = useState(initialQuery);
    const [filters, setFilters] = useState<FilterState>({
        location: 'All',
        minPrice: null,
        maxPrice: null,
        type: 'All',
        bedrooms: 'Any',
    });
    const [sortBy, setSortBy] = useState<SortOption>('newest');

    const filteredProperties = useMemo(() => {
        return PROPERTIES.filter((property) => {
            // Search
            const matchesSearch =
                property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                property.address.toLowerCase().includes(searchQuery.toLowerCase());

            if (!matchesSearch) return false;

            // Location
            if (filters.location !== 'All' && !property.location.includes(filters.location)) {
                return false;
            }

            // Price
            if (filters.minPrice !== null && property.price < filters.minPrice) return false;
            if (filters.maxPrice !== null && property.price > filters.maxPrice) return false;

            // Type
            if (filters.type !== 'All' && property.type !== filters.type) return false;

            // Bedrooms
            if (filters.bedrooms !== 'Any' && property.bedrooms < filters.bedrooms) return false;

            return true;
        });
    }, [searchQuery, filters]);

    const sortedProperties = useMemo(() => {
        return [...filteredProperties].sort((a, b) => {
            switch (sortBy) {
                case 'price-asc':
                    return a.price - b.price;
                case 'price-desc':
                    return b.price - a.price;
                case 'rating':
                    return b.rating - a.rating;
                case 'popularity':
                    return b.rating - a.rating; // Mock popularity using rating for now
                case 'newest':
                default:
                    return new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime();
            }
        });
    }, [filteredProperties, sortBy]);

    const setLocationFilter = (location: string) => setFilters(prev => ({ ...prev, location }));
    const setPriceRange = (min: number | null, max: number | null) => setFilters(prev => ({ ...prev, minPrice: min, maxPrice: max }));
    const setTypeFilter = (type: PropertyType | 'All') => setFilters(prev => ({ ...prev, type }));
    const setBedroomsFilter = (bedrooms: number | 'Any') => setFilters(prev => ({ ...prev, bedrooms }));

    const validLocations = Array.from(new Set(PROPERTIES.map(p => p.location)));

    return {
        properties: sortedProperties,
        totalCount: sortedProperties.length,
        searchQuery,
        setSearchQuery,
        filters,
        setLocationFilter,
        setPriceRange,
        setTypeFilter,
        setBedroomsFilter,
        sortBy,
        setSortBy,
        validLocations
    };
};
