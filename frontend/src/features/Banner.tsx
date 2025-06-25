import Breadcrumb from "../assets/images/Breadcrumbs.png";
import Breadcrums from "./Breadcrums";

const Banner = () => {
  return (
    <div className="relative">
      <img src={Breadcrumb} alt="banner" />
      <div className="absolute pl-75 inset-0 flex items-center">
        <Breadcrums />
      </div>
    </div>
  );
};

export default Banner;
