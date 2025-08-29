import OrdersData from "../Datas/ManagerData/AministratorData/Orders.json";
import communicationIcon from "../../public/assets/communicationIcon.svg";
import searchIcon from "../../public/assets/searchIcon.svg";
import { useState } from "react";

export default function Orders() {
  const [chosenIndex, setChosenIndex] = useState<number>(0);
  const [seeDetailsModal, setSeeDetailsModal] = useState<boolean>(false);
  const handleSeeDetails = (index: number) => {
    setChosenIndex(index);
    setSeeDetailsModal(true);
  };
  return (
    <div className="flex flex-col p-[20px] w-[807px] rounded-[6px] bg-[#003A46]">
      <div className="header-line mt-[22px] w-[767px] rounded-[6px] py-[13px] px-[20px] flex flex-row items-center bg-[#858585]/30 text-[14px] text-white font-normal">
        <p>შეკვეთის №</p>
        <p className="ml-[49px]">პროდუქტი</p>
        <p className="ml-[90px]">ვანილის ნაყინი</p>
        <p className="ml-[60px]">სტატუსი</p>
        <p className="ml-[99px]">დეტალები</p>
      </div>
      <div className="main-info flex flex-col mt-[14px]">
        {OrdersData.map((item, index) => {
          return (
            <div className="flex flex-col gap-[17px]" key={index}>
              <div className="flex flex-row items-center">
                <p className="ml-[23px] text-white text-[14px] font-normal">
                  {item.orderNumber}
                </p>
                <p className="ml-[80px] text-[12px] text-white font-normal w-[124px]">
                  {item.product}
                </p>
                <div className="name-com flex flex-row items-center gap-[6px] ml-[40px] w-[160px]">
                  <p className="text-[12px] text-white/80 font-normal">
                    {item.fullName}
                  </p>
                  <img src={communicationIcon} alt="communication icon" />
                </div>
                <div className="status flex flex-row items-center gap-[10px] ml-[20px] w-[120px]">
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
                  className="details w-[67px] rounded-[6px] flex flex-row items-center border-[1px] border-white ml-[60px] py-[3px] px-[5px] cursor-pointer"
                >
                  <img src={searchIcon} alt="search icon" />
                  <p className="text-[12px] font-normal text-white">ნახვა</p>
                </div>
              </div>
              <div className="divider w-[767px] h-[1px] bg-[#E0E6ED]/40 mb-[17px]"></div>
            </div>
          );
        })}
      </div>
      {seeDetailsModal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-[550px] rounded-[6px] bg-[#04AED2] p-[20px]">
            <div className="first-line flex flex-row justify-between items-center">
              <p className="text-white text-[18px] font-semibold">
                {OrdersData[chosenIndex].fullName}
              </p>
              <p
                onClick={() => setSeeDetailsModal(false)}
                className="text-[18px] text-white font-bold cursor-pointer"
              >
                x
              </p>
            </div>
            <div className="main-div mt-[34px]">
              <div className="info flex flex-col">
                <div className="email flex flex-col">
                  <p className="text-[14px] text-white font-semibold">მეილი</p>
                  <p className="text-[12px] text-white/80 font-semibold">
                    {OrdersData[chosenIndex].email}
                  </p>
                  <div className="mt-[10px] w-[380px] h-[1px] bg-white/20"></div>
                </div>
                <div className="phone flex flex-col mt-[10px]">
                  <p className="text-[14px] text-white font-semibold">ნომერი</p>
                  <p className="text-[12px] text-white/80 font-semibold">
                    {OrdersData[chosenIndex].phone}
                  </p>
                  <div className="mt-[10px] w-[380px] h-[1px] bg-white/20"></div>
                </div>
                <div className="role flex flex-col mt-[10px]">
                  <p className="text-[14px] text-white font-semibold">როლი</p>
                  <p className="text-[12px] text-white/80 font-semibold">
                    {OrdersData[chosenIndex].role}
                  </p>
                  <div className="mt-[10px] w-[380px] h-[1px] bg-white/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
