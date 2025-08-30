import { useNavigate } from "react-router-dom";
import homeIcon from "../../public/assets/homeIcon.svg";
import { useState } from "react";
import Main from "./Main";

export default function Distributor() {
  const navigate = useNavigate();
  const [chosenOption, setChosenOption] = useState<string>("მთავარი");
  return (
    <div className="px-[60px] mt-[64px] flex flex-col">
      <div
        onClick={() => navigate("/")}
        className="dashboard flex items-center gap-[7px]"
      >
        <img src={homeIcon} alt="home Icon" />
        <p className="text-[14px] text-[#04A4C5] font-semibold">დაფა</p>
      </div>
      <div className="main-div flex flex-row items-start justify-between mt-[11px]">
        <div className="options w-[231px] rounded-[8px] bg-[#04AED2] py-[5px]">
          <p
            onClick={() => setChosenOption("მთავარი")}
            className="text-[14px] font-normal ml-[21px] cursor-pointer"
            style={{
              color:
                chosenOption === "მთავარი"
                  ? "#FFFFFF"
                  : "rgba(255, 255, 255, 0.80)",
            }}
          >
            მთავარი
          </p>
          <div className="divider w-[232px] mt-[7px] h-[1px] bg-[#F8E7F3] "></div>
          <p
            onClick={() => setChosenOption("მიწოდების-დავალებები")}
            className="text-[14px] font-normal ml-[21px] cursor-pointer"
            style={{
              color:
                chosenOption === "მიწოდების-დავალებები"
                  ? "#FFFFFF"
                  : "rgba(255, 255, 255, 0.80)",
            }}
          >
            მიწოდების დავალებები
          </p>
          <div className="divider w-[232px] mt-[7px] h-[1px] bg-[#F8E7F3]"></div>
          <p
            onClick={() => setChosenOption("რუკა")}
            className="text-[14px] font-normal ml-[21px] cursor-pointer"
            style={{
              color:
                chosenOption === "რუკა"
                  ? "#FFFFFF"
                  : "rgba(255, 255, 255, 0.80)",
            }}
          >
            რუკა
          </p>
        </div>
        <div className="main-content">
          {chosenOption === "მთავარი" && <Main />}
        </div>
      </div>
    </div>
  );
}
