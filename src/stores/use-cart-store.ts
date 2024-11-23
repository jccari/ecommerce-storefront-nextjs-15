import { create } from "zustand";

import { Product } from "@/types/product";

type CartStoreState = {
  cart: Product[];
};

type CartStoreActions = {
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
};

type CartStore = CartStoreState & CartStoreActions;

const useCartStore = create<CartStore>()((set) => ({
  cart: [],
  addToCart: (product: Product) => {
    set((state) => ({
      cart: [...state.cart, product],
    }));
  },
  removeFromCart: (product: Product) => {
    set((state) => ({
      cart: state.cart.filter((p) => p.id !== product.id),
    }));
  },
}));

export default useCartStore;
