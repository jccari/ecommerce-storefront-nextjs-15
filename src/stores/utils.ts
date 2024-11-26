import { Product } from "@/types/product"
import { ProductLineItem } from "@/types/product-line-item"

export function convertProductToLineItem(product: Product): ProductLineItem {
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
    quantity: 1,
    lineItemTotal: product.price,
  }
}

export function updatePriceLines(cart: ProductLineItem[]) {
  const lineItemsTotal = cart.reduce((acc, item) => acc + item.lineItemTotal, 0)

  // Calculate taxes (18% IGV)
  const taxes = cart.reduce(
    (acc, item) => acc + item.price * item.quantity * 0.18,
    0,
  )

  const total = lineItemsTotal + taxes

  return {
    lineItemsTotal: lineItemsTotal.toFixed(2),
    taxes: taxes.toFixed(2),
    total: total.toFixed(2),
  }
}
