import { useNavigate } from "react-router-dom";
import { useRoleContext } from "../Context/RoleContext";

export default function DesktopHeader() {
  const navigate = useNavigate();
  const { setRole } = useRoleContext();
  const handleRoleClick = (newRole: string) => {
    setRole(newRole);
    navigate(`/enter/register`);
  };
  return (
    <div className="flex items-center w-full h-[44px] py-[14px] pl-[60px] bg-[#003A46]">
      <div className="buttons w-[1200px] flex items-center justify-between text-[#AAAAAA] text-[14px] font-normal">
        <p
          className="cursor-pointer"
          onClick={() => handleRoleClick("მენეჯერი")}
        >
          მენეჯერისთვის
        </p>
        <p
          onClick={() => handleRoleClick("ადმინისტრატორი")}
          className="cursor-pointer"
        >
          ადმინისტრატორისთვის
        </p>
        <p
          onClick={() => handleRoleClick("დისტრიბუტორი")}
          className="cursor-pointer"
        >
          დისტრიბუტორისთვის
        </p>
        <p
          onClick={() => handleRoleClick("გაყიდვების გუნდი")}
          className="cursor-pointer"
        >
          გაყიდვების გუნდისთვის
        </p>
      </div>
    </div>
  );
}
