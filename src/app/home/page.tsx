import FeaturedProducts from "./featured-products"
import ShoppingCart from "./shopping-cart"

export default function Home() {
  return (
    <div className="flex flex-row h-full w-full">
      <ShoppingCart />
      <FeaturedProducts />
    </div>
  )
}
