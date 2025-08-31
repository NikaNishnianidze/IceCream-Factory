import icecream1 from "../../public/assets/icecream1.png";
import icecream2 from "../../public/assets/icecream2.png";
import icecream1dk from "../../public/assets/41fa785d968940164f12309fd24dcf99594c334f.png";
import icecream2dk from "../../public/assets/e2043bb94ac327225932e065745db91eb0aeba65.png";
import { useState } from "react";
import { useRoleContext } from "../Context/RoleContext";
import { useNavigate } from "react-router-dom";

export default function LoginSystem() {
  const navigate = useNavigate();
  const [roleModal, setRoleModal] = useState<boolean>(false);
  const { setRole } = useRoleContext();
  const handleRoleClick = (newRole: string) => {
    setRole(newRole);
    navigate("/enter/register");
  };
  return (
    <div className="flex flex-col items-center pl-[15px] mt-[67px]">
      <div className="mobile-design  mb:block dk:hidden">
        <p className="w-[355px] text-[27px] text-[#001519] font-normal">
          <span className="text-[#04AED2] font-bold">ნამდვილი</span> სიამოვნება
          ყველა <span className="font-bold text-[#D1009D]">გემოში!</span>
        </p>
        <p className="mt-[7px] w-[272px] text-[18px] text-[#001F25] font-[normal]">
          ჩვენ ვქმნით ნაყინს, რომელიც არა მხოლოდ სიამოვნებას გაძლევს, არამედ
          თბილ ისტორიასაც მოგიყვება — ბუნებრივი ინგრედიენტებით და სიყვარულით
          შექმნილი.
        </p>
        <div className="icecreams relative mt-[41px] w-[179.2px] flex justify-center ml-[70px] ">
          <img src={icecream2} alt="ice cream 2" />
          <img
            src={icecream1}
            alt="ice cream 1"
            className="absolute left-14 "
          />
        </div>
        <div className="login mt-[38.4px] flex items-center justify-center">
          <button className="w-[231px] rounded-[8px] border-[1px] border-[#04AED2] py-[19.5px] text-[#04AED2] text-[16px] font-black cursor-pointer">
            შესვლა სისტემაში
          </button>
        </div>
      </div>
      <div className="desktop-design mb:hidden dk:block mt-[115px] dk:flex dk:items-center dk:gap-[20px]">
        <div className="left">
          <p className="w-[562px] text-[40px] text-[#001519] font-normal">
            <span className="text-[#04AED2] font-bold">ნამდვილი</span>{" "}
            სიამოვნება ყველა{" "}
            <span className="font-bold text-[#D1009D]">გემოში!</span>
          </p>
          <p className="mt-[33px] w-[423px] text-[18px] text-[#001F25] font-[normal]">
            ჩვენ ვქმნით ნაყინს, რომელიც არა მხოლოდ სიამოვნებას გაძლევს, არამედ
            თბილ ისტორიასაც მოგიყვება — ბუნებრივი ინგრედიენტებით და სიყვარულით
            შექმნილი.
          </p>
          <div
            onClick={() => setRoleModal(true)}
            className="login mt-[38.4px] flex items-center justify-start"
          >
            <button className="w-[231px] rounded-[8px] border-[1px] border-[#04AED2] py-[19.5px] text-[#04AED2] text-[16px] font-black cursor-pointer">
              შესვლა სისტემაში
            </button>
          </div>
        </div>
        <div className="right">
          <div className="icecreams relative mt-[41px] w-[179.2px] flex justify-center ml-[70px] ">
            <img
              src={icecream2dk}
              alt="ice cream 2"
              className="rotate-[-15deg]"
            />
            <img
              src={icecream1dk}
              alt="ice cream 1"
              className="absolute left-14 rotate-[5deg]"
            />
          </div>
        </div>
      </div>
      {roleModal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-[351px] p-[20px] rounded-[12px] bg-[#001519] flex flex-col">
            <p className="text-white text-[14px] font-black">თქვენი როლი?</p>
            <div
              onClick={() => handleRoleClick("მენეჯერი")}
              className="manager text-[14px] text-white font-normal cursor-pointer mt-[17px] w-[311px] py-[6px] px-[10px] border-[1px] rounded-[6px] border-[#04AED2]"
            >
              მენეჯერი
            </div>
            <div
              onClick={() => handleRoleClick("ადმინისტრატორი")}
              className="administrator text-[14px] text-white font-normal cursor-pointer mt-[17px] w-[311px] py-[6px] px-[10px] border-[1px] rounded-[6px] border-[#04AED2]"
            >
              ადმინისტრატორი
            </div>
            <div
              onClick={() => handleRoleClick("დისტრიბუტორი")}
              className="distributor text-[14px] text-white font-normal cursor-pointer mt-[17px] w-[311px] py-[6px] px-[10px] border-[1px] rounded-[6px] border-[#04AED2]"
            >
              დისტრიბუტორი
            </div>
            <div
              onClick={() => handleRoleClick("გაყიდვების გუნდი")}
              className="sales-team text-[14px] text-white font-normal cursor-pointer mt-[17px] w-[311px] py-[6px] px-[10px] border-[1px] rounded-[6px] border-[#04AED2]"
            >
              გაყიდვების გუნდი
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
