import ProductCard from "@/components/product-card"
import { Product } from "@/types/product"

async function FeaturedProducts() {
  const response = await fetch("https://fakestoreapi.com/products?limit=10")

  const data: Product[] = await response.json()

  return (
    <div className="flex flex-col items-center basis-3/4 p-5 overflow-y-auto h-full scrollbar-hide">
      <h2 className="font-bold pb-5">Featured Products</h2>
      <div>
        <ul className="flex flex-wrap gap-4 justify-center">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FeaturedProducts
