import { create } from "zustand"
import { persist } from "zustand/middleware"

import { Product } from "@/types/product"
import { ProductLineItem } from "@/types/product-line-item"
import { convertProductToLineItem, updatePriceLines } from "./utils"

const StorageKey = "cart"

type CartStoreState = {
  cart: ProductLineItem[]
  priceLines: {
    lineItemsTotal: string
    taxes: string
    total: string
  }
}

type CartStoreActions = {
  addToCart: (product: Product) => void
  removeFromCart: (lineItemId: number) => void
  clearCart: () => void
}

type CartStore = CartStoreState & CartStoreActions

let storedCart = null

if (typeof window !== "undefined") {
  // TODO: We could use a more robust storage solution
  storedCart = window.localStorage.getItem(StorageKey)
}

const initialState: CartStoreState = {
  cart: [],
  priceLines: {
    lineItemsTotal: "0.00",
    taxes: "0.00",
    total: "0.00",
  },
}

const initialStoreState: CartStoreState = storedCart
  ? JSON.parse(storedCart)
  : initialState

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      ...initialStoreState,
      addToCart: (product: Product) => {
        const lineItem = get().cart.find((p) => p.id === product.id)

        if (lineItem) {
          set((state) => ({
            cart: state.cart.map((p) => {
              if (p.id === product.id) {
                return {
                  ...p,
                  quantity: p.quantity + 1,
                  lineItemTotal: Number((p.lineItemTotal + p.price).toFixed(2)),
                }
              }

              return p
            }),
          }))
        } else {
          const productLineItem = convertProductToLineItem(product)

          set((state) => ({
            cart: [...state.cart, productLineItem],
          }))
        }

        set((state) => ({
          priceLines: updatePriceLines(state.cart),
        }))
      },
      removeFromCart: (lineItemId: number) => {
        set((state) => ({
          cart: state.cart.filter((p) => p.id !== lineItemId),
        }))
      },
      clearCart: () => {
        set(initialState)
      },
    }),
    {
      name: StorageKey,
    }
  )
)

export default useCartStore
