import Example from "../assets/images/icons/hide.png";
import Bag from "../assets/images/icons/Bag.svg";

const Products = () => {
  return (
    <div className="px-75 pt-5">
      <div className="text-3.5xl font-semibold text-gray-footer">
        Popular Products
      </div>
      <div className="pt-10">
        <div className="group border-gray-input border border-solid w-fit hover:border-success-dark hover:shadow-card-success">
          <img src={Example} className="max-w-[264px] h-auto max-h-[240px]" />
          <div className="flex justify-around p-3 items-center">
            <div className="text-sm text-gray-name group-hover:text-success-dark">
              Name
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
      </div>
    </div>
  );
};

export default Products;
