import { ProductLineItem as LineItem } from "@/types/product-line-item";

interface ProductLineItemProps {
  lineItem: LineItem;
}

function ProductLineItem({ lineItem }: ProductLineItemProps) {
  return (
    <div className="h-16 p-2 border-t-2 border-gray-400">
      <p>{lineItem.title}</p>
      <p>{lineItem.quantity}</p>
    </div>
  );
}

export default ProductLineItem;
