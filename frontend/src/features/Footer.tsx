import Icon from "../assets/images/Icon.png";

const Footer = () => {
  return (
    <footer className="bg-gray-footer px-75 text-gray-footer-letters text-sm pt-10">
      <div className="pb-6">
        <div className="flex items-center gap-2">
          <img src={Icon} alt="logo" className="size-[32px]" />
          <span className="text-3.5xl text-white font-medium">Bob's Farm</span>
        </div>
        <div className="mt-4">Template Design by Dennis Nzioki</div>
        <div>Some icons provided by FlatIcon  </div>
      </div>
      <div className="text-center py-6 shadow-footer">
        Luis Salazar © 2025. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
