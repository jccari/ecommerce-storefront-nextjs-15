"use client"

import Image from "next/image"
import { Facebook, Instagram, Phone } from "lucide-react"

export default function Header() {
    return (
        <header className="bg-white shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Left: Store Info */}
                    <div className="flex items-center gap-4">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full border border-gray-200">
                            {/* Placeholder logo - using a generic image or one from the project if available. 
                  Since I don't have a specific logo, I'll use a placeholder or text if image fails.
                  For now, assuming a file exists or using a placeholder service is risky without internet.
                  I will use a text fallback or a generic svg if possible. 
                  Actually, I'll use a colored div with initials if no image is present, 
                  but the prompt asked for an image. I'll try to use a local asset if I saw one, 
                  otherwise I'll use a placeholder div that looks like an image.
              */}
                            <div className="h-full w-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                                ST
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">SuperTienda</h1>
                            <p className="text-xs text-gray-500">Best products, best prices</p>
                        </div>
                    </div>

                    {/* Right: Contact Info */}
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-gray-500 hover:text-green-600 transition-colors" aria-label="WhatsApp">
                            <Phone className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-pink-600 transition-colors" aria-label="Instagram">
                            <Instagram className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label="Facebook">
                            <Facebook className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
