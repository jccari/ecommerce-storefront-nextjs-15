"use client"

import Link from "next/link"
import OrderSummary from "./components/order-summary"

export default function CheckoutPage() {
    return (
        <div className="h-screen w-screen bg-gray-50 overflow-hidden flex flex-col font-sans">
            <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
                            ← Back to Shopping
                        </Link>
                    </div>

                    <h1 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">Checkout</h1>

                    <div className="flex justify-center">
                        <div className="w-full max-w-3xl">
                            <OrderSummary />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
