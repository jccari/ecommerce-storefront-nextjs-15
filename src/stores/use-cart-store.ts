import { create } from "zustand";

import { Product } from "@/types/product";
import { ProductLineItem } from "@/types/product-line-item";

function convertProductToLineItem(product: Product): ProductLineItem {
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
    quantity: 1,
    lineItemTotal: product.price,
  };
}

type CartStoreState = {
  cart: ProductLineItem[];
};

type CartStoreActions = {
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
};

type CartStore = CartStoreState & CartStoreActions;

const useCartStore = create<CartStore>()((set, get) => ({
  cart: [],
  addToCart: (product: Product) => {
    const currentCart = get().cart;

    const lineItem = currentCart.find((p) => p.id === product.id);

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
  },
  removeFromCart: (product: Product) => {
    set((state) => ({
      cart: state.cart.filter((p) => p.id !== product.id),
    }));
  },
  clearCart: () => {
    set({ cart: [] });
  },
}));

export default useCartStore;
