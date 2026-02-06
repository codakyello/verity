'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

const DESIGNS = [
    { id: '2', name: 'EcoLuxe' },
    { id: '6', name: 'Scandinavian' },
    { id: '9', name: 'Metropolitan' },
    { id: '10', name: 'FreshBright' },
    { id: '11', name: 'Midnight Luxe' },
    { id: '12', name: 'Coral Sunrise' },
    { id: '13', name: 'Forest Nordic' },
    { id: '14', name: 'Electric Violet' },
    { id: '15', name: 'Warm Minimal' },
    { id: '16', name: 'Elegant Serif' },
    { id: '17', name: 'Warm Organic' },
    { id: '18', name: 'Bold Editorial' },
    { id: '19', name: 'Classic Luxury' },
    { id: '20', name: 'Modern Tech' },
    { id: '21', name: 'Deep Navy' },
    { id: '22', name: 'Forest Green' },
    { id: '23', name: 'Burgundy' },
    { id: '24', name: 'Slate' },
    { id: '25', name: 'Bronze' },
    { id: '26', name: 'Premium' },
];

export default function DesignNav() {
    const pathname = usePathname();

    // Extract the design ID from the path (handles both /drafts/X and /X)
    const match = pathname.match(/\/drafts\/(\d+)|^\/(\d+)$/);
    const currentId = match ? (match[1] || match[2]) : null;

    // If on homepage or unknown route, show link to browse drafts
    if (!currentId) {
        return (
            <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-200 bg-white/95 backdrop-blur-md">
                <div className="container mx-auto flex items-center justify-center px-6 py-4">
                    <Link
                        href="/drafts/2"
                        className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900"
                    >
                        Browse Design Drafts
                        <ChevronRight className="h-4 w-4" />
                    </Link>
                </div>
            </nav>
        );
    }

    const currentIndex = DESIGNS.findIndex(d => d.id === currentId);
    if (currentIndex === -1) return null;

    const prevIndex = currentIndex === 0 ? DESIGNS.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === DESIGNS.length - 1 ? 0 : currentIndex + 1;

    const prev = DESIGNS[prevIndex];
    const next = DESIGNS[nextIndex];
    const current = DESIGNS[currentIndex];

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-200 bg-white/95 backdrop-blur-md">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                <Link
                    href={`/drafts/${prev.id}`}
                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900"
                >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="hidden sm:inline">{prev.name}</span>
                    <span className="sm:hidden">Prev</span>
                </Link>

                <div className="flex items-center gap-4">
                    <Link
                        href="/"
                        className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
                    >
                        <Home className="h-4 w-4" />
                    </Link>
                    <div className="text-center">
                        <p className="text-xs text-neutral-400">Draft #{current.id}</p>
                        <p className="text-sm font-semibold text-neutral-800">{current.name}</p>
                    </div>
                </div>

                <Link
                    href={`/drafts/${next.id}`}
                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900"
                >
                    <span className="hidden sm:inline">{next.name}</span>
                    <span className="sm:hidden">Next</span>
                    <ChevronRight className="h-4 w-4" />
                </Link>
            </div>
        </nav>
    );
}
