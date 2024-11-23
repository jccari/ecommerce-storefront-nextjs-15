"use client";

import ProductLineItem from "@/components/product-line-item";
import useCartStore from "@/stores/use-cart-store";

function ShoppingCartContent() {
  const { cart } = useCartStore();

  if (cart.length === 0) {
    return (
      <div className="flex flex-col gap-2">
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
  return (
    <div className="basis-1/4">
      <div className="flex flex-col h-2/3 w-full rounded-lg border-4 border-teal-600">
        <div className="basis-1/12 p-2">
          <h2 className="font-bold pb-5">Shopping Cart</h2>
        </div>
        <div className="basis-10/12 grow-0">
          <ShoppingCartContent />
        </div>
        <div className="basis-1/12 p-2">
          <button className="w-full bg-blue-500 text-white mt-3 px-4 py-2 rounded-lg">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
