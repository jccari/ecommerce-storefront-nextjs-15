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

function updatePriceLines(cart: ProductLineItem[]) {
  const lineItemsTotal = cart.reduce(
    (acc, item) => acc + item.lineItemTotal,
    0
  );

  // Calculate taxes (18% IGV)
  const taxes = cart.reduce(
    (acc, item) => acc + item.price * item.quantity * 0.18,
    0
  );

  const total = lineItemsTotal + taxes;

  return {
    lineItemsTotal: lineItemsTotal.toFixed(2),
    taxes: taxes.toFixed(2),
    total: total.toFixed(2),
  };
}

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
