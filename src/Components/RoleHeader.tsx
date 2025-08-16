import { useRoleContext } from "../Context/RoleContext";
import { Outlet } from "react-router-dom";

export default function RoleHeader() {
  const { role } = useRoleContext();
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div>
      <div className="w-full py-[8px] px-[60px] flex items-center justify-between bg-[#003A46]">
        <p className="text-[14px] text-[#F8E7F3] font-normal">{role}</p>
        <button
          onClick={() => handleGoBack()}
          className="w-[67.6px] bg-[#003A46] py-[9.4px] text-[#76E5FC] text-[11px] font-normal border border-[#76E5FC] rounded-[6px]"
        >
          უკან
        </button>
      </div>
      <Outlet />
    </div>
  );
}
