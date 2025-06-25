import type { Product } from "@/interface/Product";
import Bag from "../../assets/images/icons/Bag.svg";

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
        <button className="group/icon size-[40px] rounded-full bg-gray-card flex justify-center items-center hover:cursor-pointer active:bg-success transition duration-150">
          <img
            src={Bag}
            alt="shopIcon"
            className="group-active/icon:invert transition duration-150"
          />
        </button>
      </div>
    </div>
  );
};

export default Item;
