import FeaturedProducts from "./featured-products"
import ShoppingCart from "./shopping-cart"

export default function Home() {
  return (
    <div className="flex flex-row h-full w-full overflow-hidden">
      <ShoppingCart />
      <FeaturedProducts />
    </div>
  )
}
