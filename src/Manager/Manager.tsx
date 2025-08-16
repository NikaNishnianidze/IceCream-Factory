import { useState } from "react";
import homeIcon from "../../public/assets/homeIcon.svg";
import ManagerMain from "./ManagerMain";
import Production from "./Production";
import Inventar from "./Inventar";

export default function Manager() {
  const [options, setOptions] = useState<string>("მთავარი");
  return (
    <div className="px-[65px] flex flex-col items-center mt-[65px] ">
      <div className="dashboard flex items-center gap-[7px] w-full">
        <img src={homeIcon} alt="home icon" />
        <p className="text-[14px] text-[#04A4C5] font-normal">დაფა</p>
      </div>
      <div className="main-div flex flex-row items-start justify-between w-full mt-[11px]">
        <div className="manager-options w-[231px] py-[6px] flex flex-col gap-[6px] bg-[#04AED2] rounded-[8px]">
          <p
            onClick={() => setOptions("მთავარი")}
            className="ml-[21px] text-[14px] font-semibold cursor-pointer"
            style={{ color: options === "მთავარი" ? "#FFFFFF" : "#B0E0E6" }}
          >
            მთავარი
          </p>
          <div className="divider w-[232px] h-[1px] bg-[#F8E7F3]"></div>
          <p
            onClick={() => setOptions("წარმოება")}
            className="ml-[21px] text-[14px] text-white/80 font-semibold cursor-pointer"
            style={{ color: options === "წარმოება" ? "#FFFFFF" : "#B0E0E6" }}
          >
            წარმოების მართვა
          </p>
          <div className="divider w-[232px] h-[1px] bg-[#F8E7F3]"></div>
          <p
            onClick={() => setOptions("ინვენტარი")}
            className="ml-[21px] text-[14px] text-white/80 font-semibold cursor-pointer"
            style={{ color: options === "ინვენტარი" ? "#FFFFFF" : "#B0E0E6" }}
          >
            ინვენტარის მართვა
          </p>
          <div className="divider w-[232px] h-[1px] bg-[#F8E7F3]"></div>
          <p
            onClick={() => setOptions("სტატუსი")}
            className="ml-[21px] text-[14px] text-white/80 font-semibold cursor-pointer"
            style={{ color: options === "სტატუსი" ? "#FFFFFF" : "#B0E0E6" }}
          >
            სტატუსების განახლება
          </p>
        </div>
        <div className="content">
          {options === "მთავარი" && <ManagerMain />}
          {options === "წარმოება" && <Production />}
          {options === "ინვენტარი" && <Inventar />}
        </div>
      </div>
    </div>
  );
}
