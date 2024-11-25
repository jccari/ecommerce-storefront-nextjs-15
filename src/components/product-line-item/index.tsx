import Image from "next/image";
import { ProductLineItem as LineItem } from "@/types/product-line-item";

interface ProductLineItemProps {
  lineItem: LineItem;
}

function ProductLineItem({ lineItem }: ProductLineItemProps) {
  return (
    <div className="flex h-20 w-full p-2 border-t-2 border-gray-400">
      <div className="basis-2/12">
        <Image
          src={lineItem.image}
          alt={lineItem.title}
          width={45}
          height={45}
        />
      </div>
      <div className="basis-8/12">
        <p className="text-sm">{lineItem.title}</p>
      </div>
      <div className="basis-2/4">
        <p className="text-sm">Cantidad: {lineItem.quantity}</p>
        <p className="text-sm">Total: {lineItem.lineItemTotal.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductLineItem;
