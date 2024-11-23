import { Product } from "@/types/product";

interface ProductLineItemProps {
  product: Product;
}

function ProductLineItem({ product }) {
  return (
    <div className="h-12 p-2 border-t-2 border-gray-400">{product.title}</div>
  );
}

export default ProductLineItem;
