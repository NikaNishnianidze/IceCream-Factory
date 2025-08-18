import { useState } from "react";
import homeIcon from "../../public/assets/homeIcon.svg";
import Main from "./Main";

export default function Administrator() {
  const [chosenOption, setChosenOption] = useState<string>("მთავარი");
  return (
    <div className="flex flex-col mt-[72px] px-[65px]">
      <div className="dashboard flex items-center gap-[7px]">
        <img src={homeIcon} alt="home Icon" />
        <p className="text-[14px] text-[#04A4C5] font-semibold">დაფა</p>
      </div>
      <div className="main-content flex flex-row items-start justify-between mt-[11px]">
        <div className="left-side w-[231px] rounded-[8px] bg-[#04AED2] py-[5px] flex flex-col gap-[5px]">
          <p
            onClick={() => setChosenOption("მთავარი")}
            className="text-[14px] font-normal cursor-pointer ml-[21px]"
            style={{
              color: chosenOption === "მთავარი" ? "#FFFFFF" : "#B0E0F0",
            }}
          >
            მთავარი პანელი
          </p>
          <div className="divider w-[232px] h-[1px] bg-[#F8E7F3]"></div>
          <p
            onClick={() => setChosenOption("როლების-მართვა")}
            className="text-[14px] font-normal cursor-pointer ml-[21px]"
            style={{
              color: chosenOption === "როლების-მართვა" ? "#FFFFFF" : "#B0E0F0",
            }}
          >
            როლების მართვა
          </p>
          <div className="divider w-[232px] h-[1px] bg-[#F8E7F3]"></div>
          <p
            onClick={() => setChosenOption("სისტემის-პარამეტრები")}
            className="text-[14px] font-normal cursor-pointer ml-[21px]"
            style={{
              color:
                chosenOption === "სისტემის-პარამეტრები" ? "#FFFFFF" : "#B0E0F0",
            }}
          >
            სისტემის პარამეტრები
          </p>
          <div className="divider w-[232px] h-[1px] bg-[#F8E7F3]"></div>
          <p
            onClick={() => setChosenOption("ანგარიშგება-სტატისტიკა")}
            className="text-[14px] font-normal cursor-pointer ml-[21px]"
            style={{
              color:
                chosenOption === "ანგარიშგება-სტატისტიკა"
                  ? "#FFFFFF"
                  : "#B0E0F0",
            }}
          >
            ანგარიშგება & სტატისტიკა
          </p>
          <div className="divider w-[232px] h-[1px] bg-[#F8E7F3]"></div>
          <p
            onClick={() => setChosenOption("შეკვეთების-მართვა")}
            className="text-[14px] font-normal cursor-pointer ml-[21px]"
            style={{
              color:
                chosenOption === "შეკვეთების-მართვა" ? "#FFFFFF" : "#B0E0F0",
            }}
          >
            შეკვეთების მართვა
          </p>
          <div className="divider w-[232px] h-[1px] bg-[#F8E7F3]"></div>
          <p
            onClick={() => setChosenOption("ინგრედიენტების-მართვა")}
            className="text-[14px] font-normal cursor-pointer ml-[21px]"
            style={{
              color:
                chosenOption === "ინგრედიენტების-მართვა"
                  ? "#FFFFFF"
                  : "#B0E0F0",
            }}
          >
            ინგრედიენტების-მართვა
          </p>
        </div>
        <div className="right-side">
          {chosenOption === "მთავარი" && <Main />}
        </div>
      </div>
    </div>
  );
}
