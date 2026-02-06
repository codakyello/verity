import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#1a1816] text-white pt-20 pb-10">
            <div className="px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="font-display text-3xl font-bold tracking-tight mb-6 block">
                            Verity<span className="text-[#B8860B]">.</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Nigeria's most trusted property marketplace. We verify every listing so you don't have to.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Real Estate</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="/browse?type=buy" className="hover:text-white transition-colors">Buy a Home</Link></li>
                            <li><Link href="/browse?type=rent" className="hover:text-white transition-colors">Rent a Home</Link></li>
                            <li><Link href="/sell" className="hover:text-white transition-colors">Sell a Home</Link></li>
                            <li><Link href="/browse?type=shortlet" className="hover:text-white transition-colors">Shortlets</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest listings and market trends.</p>
                        <div className="flex bg-white/10 rounded-full p-1 pl-4 focus-within:bg-white/20 transition-colors">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent border-none text-white placeholder:text-gray-500 text-sm flex-1 focus:outline-none focus:ring-0"
                            />
                            <button className="bg-[#B8860B] hover:bg-[#a07409] text-white p-2.5 rounded-full transition-colors">
                                <Send size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Verity Marketplace. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
