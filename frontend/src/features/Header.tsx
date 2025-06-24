import Icon from "../assets/images/Icon.png";

const Header = () => {
  return (
    <header>
      <div className="bg-gray-header text-gray-clear text-xs py-3 px-75">
        <div className="w-fit ml-auto">Sign In / Sign Up</div>
      </div>
      <div className="px-75 flex items-center gap-2">
        <img src={Icon} alt="logo" className="size-[32px]" />
        <span className="text-3.5xl font-medium">Bob's Farm</span>
      </div>
    </header>
  );
};

export default Header;
