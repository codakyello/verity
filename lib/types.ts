export type PropertyType = 'Apartment' | 'House' | 'Office' | 'Land';

export type PropertyStatus = 'Verified' | 'Pending' | 'Rejected';

export interface Property {
  id: string;
  title: string;
  address: string;
  location: string;
  price: number;
  currency: string;
  type: PropertyType;
  bedrooms: number;
  bathrooms: number;
  sizeSqft: number;
  imageUrl: string;
  images: string[];
  isVerified: boolean;
  status: PropertyStatus;
  rating: number;
  amenities: string[];
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  addedAt: string; // ISO date
  developer: {
    name: string;
    isVerified: boolean;
  };
  tags?: string[];
}

export type SortOption = 'price-asc' | 'price-desc' | 'newest' | 'rating' | 'popularity';
