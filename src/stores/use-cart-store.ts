import { create } from "zustand";

import { Product } from "@/types/product";
import { ProductLineItem } from "@/types/product-line-item";
import { convertProductToLineItem, updatePriceLines } from "./utils";

type CartStoreState = {
  cart: ProductLineItem[];
  priceLines: {
    lineItemsTotal: string;
    taxes: string;
    total: string;
  };
};

type CartStoreActions = {
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
};

type CartStore = CartStoreState & CartStoreActions;

const initialState: CartStoreState = {
  cart: [],
  priceLines: {
    lineItemsTotal: "0.00",
    taxes: "0.00",
    total: "0.00",
  },
};

const useCartStore = create<CartStore>()((set, get) => ({
  ...initialState,
  addToCart: (product: Product) => {
    const lineItem = get().cart.find((p) => p.id === product.id);

    if (lineItem) {
      set((state) => ({
        cart: state.cart.map((p) => {
          if (p.id === product.id) {
            return {
              ...p,
              quantity: p.quantity + 1,
              lineItemTotal: Number((p.lineItemTotal + p.price).toFixed(2)),
            };
          }

          return p;
        }),
      }));
    } else {
      const productLineItem = convertProductToLineItem(product);

      set((state) => ({
        cart: [...state.cart, productLineItem],
      }));
    }

    set((state) => ({
      priceLines: updatePriceLines(state.cart),
    }));
  },
  removeFromCart: (product: Product) => {
    set((state) => ({
      cart: state.cart.filter((p) => p.id !== product.id),
    }));
  },
  clearCart: () => {
    set(initialState);
  },
}));

export default useCartStore;
