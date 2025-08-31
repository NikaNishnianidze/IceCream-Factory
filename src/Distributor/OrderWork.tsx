import orderWorkData from "../Datas/ManagerData/Distributor/orderWork.json";
import searchIcon from "../../public/assets/searchIcon.svg";
import { useState } from "react";

export default function OrderWork() {
  const [chosenIndex, setChosenIndex] = useState<number>(0);
  const [seeDetailsModal, setSeeDetailsModal] = useState<boolean>(false);
  const handleSeeDetails = (index: number) => {
    setChosenIndex(index);
    setSeeDetailsModal(true);
  };
  return (
    <div className="flex flex-col p-[20px] w-[807px] rounded-[6px] bg-[#003A46]">
      <h2 className="text-[18px] font-semibold text-white">
        მიწოდების დავალებები
      </h2>
      <div className="first-line flex flex-row items-center justify-between w-[767px] mt-[22px] py-[13px] px-[20px] bg-[#858585]/30 rounded-[6px] text-white text-[14px] font-normal">
        <p>შეკვეთის №</p>
        <p>პროდუქტი</p>
        <p>მისამართი</p>
        <p>სტატუსი</p>
        <p>დეტალები</p>
      </div>
      <div className="main-content flex flex-col mt-[12px] gap-[17px]">
        {orderWorkData.map((item, index) => {
          return (
            <div key={index} className="flex flex-col">
              <div className="flex flex-row items-center">
                <p className="ml-[23px] text-white text-[12px] font-normal w-[40px]">
                  {item.id}
                </p>
                <p className="w-[140px] text-[12px] text-white font-semibold ml-[100px] text-center">
                  {item.product}
                </p>
                <p className="w-[130px] text-[12px] text-white/80 font-semibold ml-[40px]">
                  {item.address}
                </p>
                <div className="status flex flex-row items-center gap-[10px] w-[140px] ml-[40px]">
                  <div
                    className="circle w-[18px] h-[18px] rounded-full"
                    style={{
                      backgroundColor:
                        item.status === "მიწოდებული"
                          ? "#04FF80"
                          : item.status === "გზაში"
                          ? "#FFF70F"
                          : item.status === "პროცესში"
                          ? "#FF0000"
                          : "",
                    }}
                  ></div>
                  <p
                    className="text-[12px] font-normal"
                    style={{
                      color:
                        item.status === "მიწოდებული"
                          ? "#04FF80"
                          : item.status === "გზაში"
                          ? "#FFF70F"
                          : item.status === "პროცესში"
                          ? "#FF0000"
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
                  <p className="text-[12px] text-white font-normal">ნახვა</p>
                </div>
              </div>
              <div className="divider h-[1px] w-[767px] bg-[#E0E6ED]/40 mt-[10px]"></div>
            </div>
          );
        })}
      </div>
      {seeDetailsModal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-[369px] p-[20px] rounded-[12px] bg-[#003A46] flex flex-col gap-[17px]">
            <div className="firstline flex flex-row items-center justify-between">
              <p className="text-[18px] font-bold text-white">
                შეკვეთის ინფორმაცია
              </p>
              <p
                onClick={() => setSeeDetailsModal(false)}
                className="text-[18px] font-bold text-white"
              >
                x
              </p>
            </div>
            <div className="address mt-[5px]">
              <p className="text-[16px] font-bold text-white">მისამართი</p>
              <p className="text-[14px] text-white/80 font-normal">
                {orderWorkData[chosenIndex].address}
              </p>
            </div>
            <div className="mobile mt-[5px]">
              <p className="text-[16px] font-bold text-white">ტელეფონი</p>
              <p className="text-[14px] text-white/80 font-normal">
                {orderWorkData[chosenIndex].mobile}
              </p>
            </div>
            <div className="status flex flex-col gap-[5px]">
              <p className="text-[16px] font-bold text-white">სტატუსი</p>
              <div className="status flex flex-row items-center gap-[10px]">
                <div
                  className="w-[18px] h-[18px] rounded-full"
                  style={{
                    backgroundColor:
                      orderWorkData[chosenIndex].status === "მიწოდებული"
                        ? "#04FF80"
                        : orderWorkData[chosenIndex].status === "გზაში"
                        ? "#FFF70F"
                        : orderWorkData[chosenIndex].status === "პროცესში"
                        ? "#FF0000"
                        : "",
                  }}
                ></div>
                <p
                  className="text-[14px] font-normal"
                  style={{
                    color:
                      orderWorkData[chosenIndex].status === "მიწოდებული"
                        ? "#04FF80"
                        : orderWorkData[chosenIndex].status === "გზაში"
                        ? "#FFF70F"
                        : orderWorkData[chosenIndex].status === "პროცესში"
                        ? "#FF0000"
                        : "",
                  }}
                >
                  {orderWorkData[chosenIndex].status}
                </p>
              </div>
            </div>
            <div className="date mt-[5px]">
              <p className="text-[16px] font-bold text-white">
                მიწოდების თარიღი
              </p>
              <p className="text-[14px] text-white/80 font-normal">
                {orderWorkData[chosenIndex].address}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
