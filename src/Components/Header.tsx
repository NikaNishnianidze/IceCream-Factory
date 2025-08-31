import { useReducer, useState } from "react";
import logo from "../../public/assets/glaselogo.svg";
import shopicon from "../../public/assets/shoplogo.svg";
import { useRoleContext } from "../Context/RoleContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [roleModal, setRoleModal] = useState<boolean>(false);
  const { role, setRole } = useRoleContext();
  const handleRoleClick = (newRole: string) => {
    setRole(newRole);
    navigate("/enter/register");
  };
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
          <button
            onClick={() => setRoleModal(true)}
            className="log w-[81px] rounded-[80px] py-[8.76px] text-[10.2px] font-black text-white cursor-pointer"
          >
            შესვლა
          </button>
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
