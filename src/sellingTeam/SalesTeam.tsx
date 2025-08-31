import { useNavigate } from "react-router-dom";
import homeIcon from "../../public/assets/homeIcon.svg";
import salesTeamData from "../Datas/ManagerData/salesTeam/sales.json";
import textIcon from "../../public/assets/messageIcon.svg";
import searchIcon from "../../public/assets/searchIcon.svg";
import { useState } from "react";

export default function SalesTeam() {
  const navigate = useNavigate();
  const [chosenIndex, setChosenIndex] = useState<number>(0);
  const [seeDetailsModal, setSeeDetailsModal] = useState<boolean>(false);
  const handleSeeDetails = (index: number) => {
    setChosenIndex(index);
    setSeeDetailsModal(true);
  };
  return (
    <div className="flex flex-col mt-[72px] px-[65px]">
      <div
        onClick={() => navigate("/")}
        className="dashboard flex items-center gap-[7px]"
      >
        <img src={homeIcon} alt="home Icon" />
        <p className="text-[14px] text-[#04A4C5] font-semibold">დაფა</p>
      </div>
      <div className="main flex flex-row items-start justify-between mt-[11px]">
        <div className="dashboard">
          <div className="left-side w-[231px] rounded-[8px] bg-[#04AED2] py-[5px] flex flex-col gap-[5px]">
            <p className="text-[14px] font-normal text-white cursor-pointer ml-[21px]">
              შეკვეთების მართვა
            </p>
          </div>
        </div>
        <div className="main-content w-[807px] rounded-[12px] p-[20px] bg-[#003A46] flex flex-col">
          <h2 className="text-white text-[18px] font-semibold">
            შეკვეთების მართვა/კომუნიკაცია მომხმარებელთან
          </h2>
          <div className="firstline mt-[22px] bg-[#858585]/30 py-[13px] px-[20px] rounded-[12px] w-[767px] flex flex-row items-center justify-between text-white text-[14px] font-normal">
            <p>შეკვეთის №</p>
            <p>პროდუქტი</p>
            <p>სახელი</p>
            <p>სტატუსი</p>
            <p>დეტალები</p>
          </div>
          <div className="main-info mt-[14px] flex flex-col">
            {salesTeamData.map((item, index) => {
              return (
                <div key={index} className="flex flex-col">
                  <div className="flex flex-row items-center">
                    <p className="text-[12px] text-white font-normal ml-[23px] w-[40px] text-center">
                      {item.id}
                    </p>
                    <p className="text-[12px] text-white font-normal ml-[95px] w-[140px] text-center">
                      {item.product}
                    </p>
                    <div className="name flex flex-row items-center gap-[10px] w-[150px] ml-[40px] justify-center">
                      <p className="text-[12px] text-white font-normal">
                        {item.name}
                      </p>
                      <img src={textIcon} alt="textIcon" />
                    </div>
                    <div className="status flex flex-row items-center justify-start ml-[20px] gap-[10px] w-[140px]">
                      <div
                        className="circle w-[18px] h-[18px] rounded-full"
                        style={{
                          backgroundColor:
                            item.status === "მიტანილია"
                              ? "#04FF80"
                              : item.status === "მიღებულია"
                              ? "#71AFF0"
                              : item.status === "გადაგზავნილი"
                              ? "#FFF70F"
                              : item.status === "დამუშავება"
                              ? "#C76EFA"
                              : "",
                        }}
                      ></div>
                      <p
                        className="text-[12px] font-normal"
                        style={{
                          color:
                            item.status === "მიტანილია"
                              ? "#04FF80"
                              : item.status === "მიღებულია"
                              ? "#71AFF0"
                              : item.status === "გადაგზავნილი"
                              ? "#FFF70F"
                              : item.status === "დამუშავება"
                              ? "#C76EFA"
                              : "",
                        }}
                      >
                        {item.status}
                      </p>
                    </div>
                    <div
                      onClick={() => handleSeeDetails(index)}
                      className="see-details flex flex-row items-center justify-center cursor-pointer w-[67px] py-[3px] ml-[25px] px-[5px] border-[1px] border-white rounded-[6px]"
                    >
                      <img src={searchIcon} alt="search icon" />
                      <p className="text-[12px] text-white font-normal">
                        ნახვა
                      </p>
                    </div>
                  </div>
                  <div className="divider h-[1px] w-[767px] bg-[#E0E6ED]/40 mt-[12px] mb-[12px]"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {seeDetailsModal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-[427px] p-[20px] rounded-[12px] bg-[#003A46] flex flex-col gap-[17px]">
            <div className="firstline flex flex-row items-center justify-between">
              <p className="text-[18px] font-bold text-white">
                კომუნიკაცია მომხმარებელთან
              </p>
              <p
                onClick={() => setSeeDetailsModal(false)}
                className="text-[18px] font-bold text-white"
              >
                x
              </p>
            </div>
            <div className="address mt-[5px] flex flex-row items-center gap-[5px]">
              <p className="text-[16px] font-bold text-white">მომხმარებელი</p>
              <p className="text-[14px] text-white/80 font-normal">
                {salesTeamData[chosenIndex].name}
              </p>
            </div>
            <div className="mobile mt-[5px] flex flex-row items-center gap-[5px]">
              <p className="text-[16px] font-bold text-white">ტელეფონი</p>
              <p className="text-[14px] text-white/80 font-normal">
                {salesTeamData[chosenIndex].mobile}
              </p>
            </div>
            <div className="status flex flex-col gap-[5px]">
              <p className="text-[16px] font-bold text-white">სტატუსი</p>
              <div className="status flex flex-row items-center gap-[10px]">
                <div
                  className="w-[18px] h-[18px] rounded-full"
                  style={{
                    backgroundColor:
                      salesTeamData[chosenIndex].status === "მიტანილია"
                        ? "#04FF80"
                        : salesTeamData[chosenIndex].status === "მიღებულია"
                        ? "#71AFF0"
                        : salesTeamData[chosenIndex].status === "გადაგზავნილი"
                        ? "#FFF70F"
                        : salesTeamData[chosenIndex].status === "დამუშავება"
                        ? "#C76EFA"
                        : "",
                  }}
                ></div>
                <p
                  className="text-[14px] font-normal"
                  style={{
                    color:
                      salesTeamData[chosenIndex].status === "მიტანილია"
                        ? "#04FF80"
                        : salesTeamData[chosenIndex].status === "მიღებულია"
                        ? "#71AFF0"
                        : salesTeamData[chosenIndex].status === "გადაგზავნილი"
                        ? "#FFF70F"
                        : salesTeamData[chosenIndex].status === "დამუშავება"
                        ? "#C76EFA"
                        : "",
                  }}
                >
                  {salesTeamData[chosenIndex].status}
                </p>
              </div>
            </div>
            <div className="date mt-[5px] flex flex-row items-center gap-[5px]">
              <p className="text-[16px] font-bold text-white">ელ-ფოსტა:</p>
              <p className="text-[14px] text-white/80 font-normal">
                {salesTeamData[chosenIndex].email}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
