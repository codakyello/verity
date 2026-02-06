'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, User, X, ChevronDown, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import AuthModal from './AuthModal';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [showSearchNav, setShowSearchNav] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [navSearchQuery, setNavSearchQuery] = useState('');
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        // Intersection Observer to track the Hero Search Bar
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                // If the hero search bar is NOT intersecting (out of view)
                // AND its top position is negative (meaning it went UP off the screen, not down)
                // then show the navbar search.
                if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
                    setShowSearchNav(true);
                } else {
                    setShowSearchNav(false);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            root: null, // viewport
            threshold: 0, // trigger as soon as one pixel is out
            rootMargin: "-20px 0px 0px 0px" // slightly offset
        });

        const heroSearch = document.getElementById('hero-search');
        if (heroSearch) {
            observer.observe(heroSearch);
        }

        window.addEventListener('scroll', handleScroll);

        // Retry observing in case of late mount
        const timeoutId = setTimeout(() => {
            const el = document.getElementById('hero-search');
            if (el) observer.observe(el);
        }, 1000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
            clearTimeout(timeoutId);
        };
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNavSearch = () => {
        if (navSearchQuery.trim()) {
            router.push(`/browse?q=${encodeURIComponent(navSearchQuery)}`);
        }
    };

    const mobileNavItems = [
        { label: 'Buy', hasDropdown: true },
        { label: 'Rent', hasDropdown: true },
        { label: 'Sell', hasDropdown: true },
        { label: 'Get a mortgage', hasDropdown: true },
        { label: 'Find an agent', hasDropdown: true },
        { label: 'Manage rentals', hasDropdown: true },
    ];

    const mobileSecondaryItems = [
        { label: 'Advertise', hasDropdown: false },
        { label: 'Get help', hasDropdown: false },
    ];

    return (
        <nav
            className={`fixed top-0 z-50 w-full bg-white text-[#1a1816] transition-all duration-300 border-b ${scrolled || showSearchNav
                ? 'border-gray-100 shadow-sm'
                : 'border-transparent'
                }`}
        >
            <div className={`lg:container lg:mx-auto w-full transition-all duration-300 ${showSearchNav ? 'p-2' : 'px-6 py-4'}`}>

                {showSearchNav ? (
                    /* --- SCROLLED STATE: SEARCH BAR ONLY --- */
                    <div className="flex items-center justify-center w-full animate-in fade-in zoom-in-95 duration-300">
                        <div className="relative w-full max-w-[600px] flex items-center border-[1px] border-[#726a60] focus:border-[var(--color)] rounded-full">
                            <input
                                type="text"
                                placeholder="Address, School, City, Zip or Neighborhood"
                                value={navSearchQuery}
                                onChange={(e) => setNavSearchQuery(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleNavSearch()}
                                className="w-full bg-gray-100  placeholder:text-[16px] hover:bg-gray-50 focus:bg-white rounded-full py-3 pl-6 pr-14 text-base text-[#1a1816] placeholder:text-gray-500 transition-all border border-transparent focus-visible:outline-[#1F3A5F]"
                                autoFocus
                            />
                            <button
                                onClick={handleNavSearch}
                                className="absolute right-2 top-1.5 bottom-1.5 aspect-square bg-[#1F3A5F] rounded-full text-white hover:bg-[#162942] transition-transform hover:scale-105 flex items-center justify-center shadow-md"
                            >
                                <Search className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                ) : (
                    /* --- DEFAULT STATE: FULL NAVBAR --- */
                    <div className="flex items-center justify-between w-full animate-in fade-in slide-in-from-top-2 duration-300">
                        {/* Mobile Menu Icon (Visible on small screens) */}
                        <button
                            className="lg:hidden"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu className="h-6 w-6" />
                        </button>

                        {/* Left Navigation (Desktop) */}
                        <div className="hidden items-center gap-6 lg:flex">
                            <Link href="#" className="text-sm font-medium hover:underline">Buy</Link>
                            <Link href="#" className="text-sm font-medium hover:underline">Rent</Link>
                            <Link href="#" className="text-sm font-medium hover:underline">Sell</Link>
                            <Link href="#" className="text-sm font-medium hover:underline">Get a mortgage</Link>
                            <Link href="#" className="text-sm font-medium hover:underline">Find an agent</Link>
                        </div>

                        {/* Logo (Centered) */}
                        <Link href="/" className="font-display text-2xl font-bold tracking-tight absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:translate-x-0 lg:translate-y-0">
                            Verity<span className="text-[#B8860B]">.</span>
                        </Link>

                        {/* Right Navigation (Desktop) */}
                        <div className="hidden items-center gap-6 lg:flex">
                            <Link href="#" className="text-sm font-medium hover:underline">Manage rentals</Link>
                            <Link href="#" className="text-sm font-medium hover:underline">Advertise</Link>
                            <Link href="#" className="text-sm font-medium hover:underline">Get help</Link>
                            <div className="flex items-center gap-4 ml-2">
                                <button
                                    onClick={() => setIsAuthModalOpen(true)}
                                    className="text-base font-bold text-[#1F3A5F] hover:underline"
                                >
                                    Log in
                                </button>
                                <button
                                    onClick={() => setIsAuthModalOpen(true)}
                                    className="rounded-full bg-[#1F3A5F] px-6 py-2.5 text-base font-bold text-white transition-colors hover:bg-[#162942]"
                                >
                                    Sign up
                                </button>
                            </div>
                        </div>

                        {/* Mobile User Icon */}
                        <button
                            className="lg:hidden"
                            onClick={() => setIsAuthModalOpen(true)}
                        >
                            <User className="h-6 w-6" />
                        </button>
                    </div>
                )}
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-60 bg-black/50 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <div
                className={`fixed top-0 left-0 z-70 h-full w-full bg-white shadow-2xl transition-transform duration-300 ease-out md:w-[45%] md:max-w-[320px] lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Mobile Menu Header */}
                <div className="relative flex items-center md:justify-between border-b border-gray-100 px-6 h-[72px]">
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="transition-colors hover:text-gray-600 md:order-2"
                    >
                        <X className="h-6 w-6 text-[#1F3A5F]" />
                    </button>

                    <Link
                        href="/"
                        className="font-display text-2xl font-bold tracking-tight absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0 md:order-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Verity<span className="text-[#B8860B]">.</span>
                    </Link>
                </div>

                {/* Mobile Menu Content */}
                <div className="flex flex-col h-[calc(100%-72px)] overflow-hidden">
                    {/* Navigation Links */}
                    <div className="flex-1 overflow-y-auto">
                        <div className="flex flex-col">
                            {mobileNavItems.map((item) => (
                                <button
                                    key={item.label}
                                    className="flex items-center justify-between px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors text-left group"
                                    onClick={() => {
                                        // Placeholder for accordion toggle or navigation
                                    }}
                                >
                                    <span className="text-[16px] font-medium text-[#1a1816] group-hover:text-[#1F3A5F]">{item.label}</span>
                                    {item.hasDropdown && (
                                        <ChevronDown className="h-5 w-5 text-[#1F3A5F]" />
                                    )}
                                </button>
                            ))}

                            {mobileSecondaryItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href="#"
                                    className="flex items-center justify-between px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors text-left group"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <span className="text-[16px] font-medium text-[#1a1816] group-hover:text-[#1F3A5F]">{item.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
            />
        </nav>
    );
}
