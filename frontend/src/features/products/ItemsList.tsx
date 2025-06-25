import type { Product } from "@/interface/Product"; 
import Item from "./Item";

interface ItemsListProps {
  items: Product[];
}

const ItemsList = ({ items }: ItemsListProps) => {
  return (
    <div className="flex w-fit">
      {items.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
};

export default ItemsList;
