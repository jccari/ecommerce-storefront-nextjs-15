"use client"

import Image from "next/image"
import useCartStore from "@/stores/use-cart-store"

export default function OrderSummary() {
    const cart = useCartStore((state) => state.cart)
    const priceLines = useCartStore((state) => state.priceLines)

    function renderContent() {
        if (cart.length === 0) {
            return (
                <li className="py-6 text-center text-gray-500">
                    Your cart is empty.
                </li>
            )
        }

        return cart.map((item) => (
            <li key={item.id} className="flex py-6">
                <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 relative">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-center"
                    />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                    <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{item.title}</h3>
                            <p className="ml-4">${item.price.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                </div>
            </li>
        ))
    }
    return (
        <section className="lg:col-span-6 bg-white rounded-2xl shadow-xl overflow-hidden mb-8 lg:mb-0 border border-gray-100">
            <div className="px-6 py-8">
                <h2 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h2>

                <div className="flow-root max-h-96 overflow-y-auto">
                    <ul className="divide-y divide-gray-200">
                        {renderContent()}
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-200 px-6 py-6 bg-gray-50">
                <div className="flex justify-between text-base font-medium text-gray-900 mb-2">
                    <p>Subtotal</p>
                    <p>${priceLines.lineItemsTotal}</p>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <p>Taxes</p>
                    <p>${priceLines.taxes}</p>
                </div>
                <div className="flex justify-between text-base font-bold text-gray-900 mt-4 pt-4 border-t border-gray-200">
                    <p>Total</p>
                    <p>${priceLines.total}</p>
                </div>
            </div>
        </section>
    )
}
