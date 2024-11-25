"use client";

import Image from "next/image";

import ProductLineItem from "@/components/product-line-item";
import useCartStore from "@/stores/use-cart-store";
import PriceLine from "./price-line";

function ShoppingCartContent() {
  const cart = useCartStore((state) => state.cart);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col flex-1 self-center gap-2 items-center">
        <Image src="empty-cart.svg" alt="Empty Cart" width={50} height={50} />
        <h3 className="font-bold">Your cart is empty</h3>
      </div>
    );
  }

  return (
    <ul className="flex flex-wrap gap-2 justify-center">
      {cart.map((productLineItem) => (
        <li key={productLineItem.id} className="w-full">
          <ProductLineItem lineItem={productLineItem} />
        </li>
      ))}
    </ul>
  );
}

function ShoppingCart() {
  const clearCart = useCartStore((state) => state.clearCart);

  const priceLines = useCartStore((state) => state.priceLines);

  return (
    <div className="basis-1/4">
      <div className="flex flex-col h-2/3 p-2 w-full rounded-lg border-4 bg-slate-100">
        <div className="flex justify-between basis-1/12 p-2">
          <h2 className="font-bold pb-5 text-lg">Shopping Cart</h2>
          <button
            onClick={clearCart}
            className="w-22 h-10 px-2 py-1 border-2 rounded-md text-sm"
          >
            Clear Cart
          </button>
        </div>
        <div className="flex basis-10/12 grow-0 border-t-4">
          <ShoppingCartContent />
        </div>
        <div className="basis-1/12">
          <div className="border-t-4 text-sm">
            <p className="font-semibold mb-2">Resumen de compra</p>
            <PriceLine concept="Productos" value={priceLines.lineItemsTotal} />
            <PriceLine concept="Taxes IGV" value={priceLines.taxes} />
            <PriceLine concept="Total" value={priceLines.total} />
          </div>
          <button className="w-full bg-blue-500 text-white mt-3 px-4 py-2 rounded-lg">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
