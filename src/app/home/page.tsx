import FeaturedProducts from "./featured-products";

function ShoppingCart() {
  return <div className="basis-1/4 bg-orange-300">shopping cart</div>;
}

export default function Home() {
  return (
    <div className="flex flex-row bg-slate-300 h-full w-full">
      <FeaturedProducts />
      <ShoppingCart />
    </div>
  );
}
