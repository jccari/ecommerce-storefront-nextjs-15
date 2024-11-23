"use client";

import Image from "next/image";

import { Product } from "@/types/product";
import useCartStore from "@/stores/use-cart-store";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCartStore();

  function handleAddToCart(product: Product) {
    addToCart(product);
  }

  return (
    <div className="flex flex-col justify-between bg-white shadow-md rounded-lg p-4 gap-4 hover:shadow-zinc-600 w-72 ">
      <Image
        className="self-center"
        src={product.image}
        alt={product.title}
        width={100}
        height={100}
      />
      <p>{product.title}</p>
      <p>${product.price}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={handleAddToCart.bind(null, product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
