import ProductLineItem from "@/components/product-line-item";

const products = [
  {
    id: 1,
    title: "Product 1",
  },
  {
    id: 2,
    title: "Product 2",
  },
  {
    id: 3,
    title: "Product 3",
  },
];

function ShoppingCart() {
  return (
    <div className="basis-1/4">
      <div className="flex flex-col h-2/3 w-full rounded-lg border-4 border-teal-600">
        <div className="basis-1/12 p-2">
          <h2 className="font-bold pb-5">Shopping Cart</h2>
        </div>
        <div className="basis-10/12 grow-0">
          <ul className="flex flex-wrap gap-2 justify-center">
            {products.map((product) => (
              <li key={product.id} className="w-full">
                <ProductLineItem product={product} />
              </li>
            ))}
          </ul>
        </div>
        <div className="basis-1/12 p-2">
          <button className="w-full bg-blue-500 text-white mt-3 px-4 py-2 rounded-lg">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
