'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, User, X, ChevronDown } from 'lucide-react';
import AuthModal from './AuthModal';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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
            className={`fixed top-0 z-50 w-full bg-white text-[#1a1816] transition-all duration-300 border-b ${scrolled
                ? 'border-gray-100 shadow-sm'
                : 'border-transparent'
                }`}
        >
            <div className="lg:container lg:mx-auto flex items-center justify-between px-6 py-4">
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
                <Link href="/" className="font-display text-2xl font-bold tracking-tight">
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

                {/* Mobile User Icon (Visible on small screens) */}
                <button
                    className="lg:hidden"
                    onClick={() => setIsAuthModalOpen(true)}
                >
                    <User className="h-6 w-6" />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <div
                className={`fixed top-0 left-0 z-[70] h-full w-full bg-white shadow-2xl transition-transform duration-300 ease-out md:w-[45%] md:max-w-[320px] lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
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

                    {/* Mobile Menu Footer - Auth Buttons */}
                    {/* <div className="border-t border-gray-100 px-6 py-6 bg-gray-50/50">
                        <div className="space-y-3">
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsAuthModalOpen(true);
                                }}
                                className="w-full rounded-full bg-[#1F3A5F] py-3.5 text-base font-bold text-white transition-colors hover:bg-[#162942]"
                            >
                                Sign up
                            </button>
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsAuthModalOpen(true);
                                }}
                                className="w-full rounded-full border border-gray-300 bg-white py-3.5 text-base font-bold text-[#1a1816] transition-colors hover:bg-gray-50"
                            >
                                Log in
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>

            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
            />
        </nav>
    );
}
