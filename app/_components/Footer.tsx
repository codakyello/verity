import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#1a1816] text-white pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-20">
                    {/* Brand Section - Span 4 cols */}
                    <div className="md:col-span-4">
                        <Link href="/" className="font-display text-4xl font-bold tracking-tight mb-8 block text-white hover:text-[#B8860B] transition-colors">
                            Verity.
                        </Link>
                        <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-sm font-light">
                            Elevating the Nigerian real estate experience through radical transparency and verified listings. We don't just list homes; we verify your future.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-gray-500 hover:text-white transition-all transform hover:scale-110"><Twitter size={22} strokeWidth={1.5} /></a>
                            <a href="#" className="text-gray-500 hover:text-white transition-all transform hover:scale-110"><Facebook size={22} strokeWidth={1.5} /></a>
                            <a href="#" className="text-gray-500 hover:text-white transition-all transform hover:scale-110"><Instagram size={22} strokeWidth={1.5} /></a>
                            <a href="#" className="text-gray-500 hover:text-white transition-all transform hover:scale-110"><Linkedin size={22} strokeWidth={1.5} /></a>
                        </div>
                    </div>

                    {/* Links Section - Span 8 cols (Divided into 3 lists) */}
                    <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12">
                        <div>
                            <h4 className="text-white font-medium text-lg mb-8">Real Estate</h4>
                            <ul className="space-y-5 text-gray-400">
                                <li><Link href="/browse?type=buy" className="hover:text-[#B8860B] transition-colors text-sm tracking-wide">Buy a Home</Link></li>
                                <li><Link href="/browse?type=rent" className="hover:text-[#B8860B] transition-colors text-sm tracking-wide">Rent a Home</Link></li>
                                <li><Link href="/sell" className="hover:text-[#B8860B] transition-colors text-sm tracking-wide">Sell a Home</Link></li>
                                <li><Link href="/browse?type=shortlet" className="hover:text-[#B8860B] transition-colors text-sm tracking-wide">Shortlets</Link></li>
                                <li><Link href="/agents" className="hover:text-[#B8860B] transition-colors text-sm tracking-wide">Find an Agent</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-medium text-lg mb-8">Company</h4>
                            <ul className="space-y-5 text-gray-400">
                                <li><Link href="/about" className="hover:text-[#B8860B] transition-colors text-sm tracking-wide">About Us</Link></li>
                                <li><Link href="/careers" className="hover:text-[#B8860B] transition-colors text-sm tracking-wide">Careers</Link></li>
                                <li><Link href="/press" className="hover:text-[#B8860B] transition-colors text-sm tracking-wide">Press</Link></li>
                                <li><Link href="/contact" className="hover:text-[#B8860B] transition-colors text-sm tracking-wide">Contact</Link></li>
                                <li><Link href="/legal" className="hover:text-[#B8860B] transition-colors text-sm tracking-wide">Legal</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-medium text-lg mb-8">Newsletter</h4>
                            <p className="text-gray-400 text-sm mb-6 font-light">Latest listings and market insights.</p>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#B8860B] focus:bg-white/10 transition-all font-light"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#B8860B] hover:text-white p-2">
                                    <Send size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-light">
                    <p>&copy; {new Date().getFullYear()} Verity Marketplace. All rights reserved.</p>
                    <div className="flex gap-8 mt-6 md:mt-0">
                        <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms</Link>
                        <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy</Link>
                        <Link href="/cookies" className="hover:text-gray-400 transition-colors">Cookies</Link>
                        <Link href="/sitemap" className="hover:text-gray-400 transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
