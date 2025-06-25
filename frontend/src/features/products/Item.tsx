import type { Product } from "@/interface/Product";
import PurchaseItem from "./PurchaseItem";

interface ItemProps {
  item: Product;
}

const Item = ({ item }: ItemProps) => {
  return (
    <div className="group border-gray-input border border-solid w-fit hover:border-success-dark hover:shadow-card-success">
      <img src={item.image} className="max-w-[264px] h-auto max-h-[240px]" />
      <div className="flex justify-around p-3 items-center">
        <div className="capitalize text-sm text-gray-name group-hover:text-success-dark">
          {item.name}
        </div>
        <PurchaseItem id={item.id} />
      </div>
    </div>
  );
};

export default Item;
