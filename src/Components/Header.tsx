import logo from "../../public/assets/glaselogo.svg";
import shopicon from "../../public/assets/shoplogo.svg";

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full h-[58px] py-[15px] mb:px-[15px] dk:px-[60px] bg-[#001519]">
      <div className="left flex items-center gap-[12px] cursor-pointer">
        <img src={logo} alt="logo icon" />
        <p className="text-[21.3px] text-[#C0F7FC] font-normal">გლასე</p>
      </div>
      <div className="right flex items-center gap-[32px]">
        <div className="desktop-buttons mb:hidden dk:block dk:flex dk:items-center dk:gap-[30px]">
          <div className="shop flex items-center">
            <img src={shopicon} alt="shop icon" />
            <p className="text-[14px] text-[#F8E7F3] font-normal">პროდუქცია</p>
          </div>
          <div className="history">
            <p className="text-[14px] text-[#F8E7F3] font-normal">ისტორია</p>
          </div>
          <div className="selling-points">
            <p className="text-[14px] text-[#F8E7F3] font-normal">
              გაყიდვების წერტილები
            </p>
          </div>
          <div className="contact">
            <p className="text-[14px] text-[#F8E7F3] font-normal">კონტაქტი</p>
          </div>
        </div>
        <div className="login">
          <button className="log w-[81px] rounded-[80px] py-[8.76px] text-[10.2px] font-black text-white cursor-pointer">
            შესვლა
          </button>
        </div>
      </div>
    </div>
  );
}
