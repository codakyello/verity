"use client";

import { X } from 'lucide-react';
import { useState } from 'react';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Darker Overlay without blur */}
            <div
                className="absolute inset-0 bg-black/60 transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content - Replicating Realtor.com structure */}
            <div className="relative w-full max-w-[440px] overflow-hidden rounded-xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex items-center justify-between px-6 pt-6 pb-2">
                    <h2 className="text-[22px] font-bold text-[#1a1816] tracking-tight">
                        Log in or create an account
                    </h2>
                    <button
                        onClick={onClose}
                        className="rounded-full p-1 text-gray-900 hover:bg-gray-100 transition-colors"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* Body */}
                <div className="px-6 pb-6 pt-2">
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-1.5">
                            <label htmlFor="email" className="text-[13px] font-bold text-[#1a1816]">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full rounded-lg border border-gray-400 px-4 h-[48px] text-base placeholder:text-gray-500 outline-none focus:border-[#1F3A5F] focus:ring-1 focus:ring-[#1F3A5F] transition-all"
                            />
                        </div>

                        <button
                            className="w-full rounded-full bg-[#1F3A5F] h-[48px] text-[15px] font-bold text-white hover:bg-[#162942] active:scale-[0.98] transition-all"
                        >
                            Continue
                        </button>
                    </form>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500 font-medium">or</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <button className="relative flex w-full items-center justify-center rounded-full border border-gray-400 bg-white h-[48px] text-[15px] font-bold text-[#1a1816] hover:bg-gray-50 transition-all group">
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="Google"
                                className="absolute left-6 top-1/2 -translate-y-1/2 h-[22px] w-[22px]"
                            />
                            <span>Continue with Google</span>
                        </button>

                        <button className="relative flex w-full items-center justify-center rounded-full border border-gray-400 bg-white h-[48px] text-[15px] font-bold text-[#1a1816] hover:bg-gray-50 transition-all group">
                            <img
                                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                                alt="Facebook"
                                className="absolute left-6 top-1/2 -translate-y-1/2 h-[22px] w-[22px]"
                            />
                            <span>Continue with Facebook</span>
                        </button>

                        <button className="relative flex w-full items-center justify-center rounded-full border border-gray-400 bg-white h-[48px] text-[15px] font-bold text-[#1a1816] hover:bg-gray-50 transition-all group">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="absolute left-6 top-1/2 -translate-y-1/2 h-[22px] w-[22px]"
                            >
                                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                            </svg>
                            <span>Continue with Apple</span>
                        </button>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-[13px] text-gray-600 font-medium">
                            Are you a real estate agent? <br />
                            <a href="#" className="font-bold text-[#1a1816] underline hover:text-[#1F3A5F]">
                                Log in
                            </a> or <a href="#" className="font-bold text-[#1a1816] underline hover:text-[#1F3A5F]">
                                create an account
                            </a>
                        </p>

                        <p className="mt-6 text-[11px] text-gray-500 max-w-[320px] mx-auto leading-tight">
                            By creating an account you agree to Verity's <a href="#" className="underline">Terms of Use</a> and <a href="#" className="underline">Privacy Policy</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
