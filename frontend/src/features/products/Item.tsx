import type { Product } from "@/interface/Product";
import PurchaseItem from "./PurchaseItem";
import GetPurchasedTotal from "./GetPurchasedTotal";

interface ItemProps {
  item: Product;
}

const Item = ({ item }: ItemProps) => {
  return (
    <div className="relative group border-gray-input border border-solid w-fit hover:border-success-dark hover:shadow-card-success">
      <img src={item.image} className="max-w-[264px] h-auto max-h-[240px]" />
      <div className="flex justify-around p-3 items-center">
        <div className="capitalize text-sm text-gray-name group-hover:text-success-dark">
          {item.name}
        </div>
        <PurchaseItem id={item.id} />
      </div>
      <div className="absolute top-2 right-2 hidden group-hover:block">
        <GetPurchasedTotal id={item.id} name={item.name} />
      </div>
    </div>
  );
};

export default Item;
