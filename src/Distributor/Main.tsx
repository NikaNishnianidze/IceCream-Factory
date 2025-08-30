import orderHistory from "../Datas/ManagerData/Distributor/orderHistory.json";
import searchIcon from "../../public/assets/searchIcon.svg";
import { useState } from "react";

export default function Main() {
  const [chosenIndex, setChosenIndex] = useState<number>(0);
  const [seeDetailsModal, setSeeDetailsModal] = useState<boolean>(false);
  const handleSeeDetails = (index: number) => {
    setChosenIndex(index);
    setSeeDetailsModal(true);
  };
  return (
    <div className="flex flex-col w-[807px] p-[20px] rounded-[6px] bg-[#003A46]">
      <h2 className="text-[18px] font-semibold text-white">
        შეკვეთების ისტორია
      </h2>
      <div className="first-line mt-[17px] w-[767px] rounded-[6px] py-[13px] px-[20px] bg-[#858585]/30 flex flex-row items-center justify-between text-[14px] text-white font-normal">
        <p>შეკვეთის №</p>
        <p>პროდუქტი</p>
        <p>მიწოდების თარიღი</p>
        <p>სტატუსი</p>
        <p>დეტალები</p>
      </div>
      <div className="main-content flex flex-col mt-[14px]">
        {orderHistory.map((item, index) => {
          return (
            <div key={item.id} className="flex flex-col">
              <div className="flex flex-row items-center">
                <p className="ml-[23px] text-[12px] text-white font-normal w-[40px]">
                  {item.id}
                </p>
                <p className="w-[160px] ml-[77px] text-white text-[12px] font-semibold text-center">
                  {item.product}
                </p>
                <p className="w-[92px] ml-[45px] text-[12px] text-white/80 font-normal text-center">
                  {item.date}
                </p>
                <div className="status flex flex-row items-center gap-[10px] w-[130px] justify-center ml-[72px]">
                  <div
                    className="circle w-[17px] h-[17px] rounded-full"
                    style={{
                      backgroundColor:
                        item.status === "მიწოდებული" ? "#04FF80" : "",
                    }}
                  ></div>
                  <p
                    className="text-[12px] font-semibold"
                    style={{
                      color: item.status === "მიწოდებული" ? "#04FF80" : "",
                    }}
                  >
                    {item.status}
                  </p>
                </div>
                <div
                  onClick={() => handleSeeDetails(index)}
                  className="see-details flex flex-row items-center justify-center cursor-pointer w-[67px] py-[3px] ml-[50px] px-[5px] border-[1px] border-white rounded-[6px]"
                >
                  <img src={searchIcon} alt="search icon" />
                  <p className="text-[12px] text-white font-normal">ნახვა</p>
                </div>
              </div>
              <div className="divider w-[767px] h-[1px] bg-[#E0E6ED]/40 mt-[15px] mb-[14px] "></div>
            </div>
          );
        })}
      </div>
      {seeDetailsModal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-[369px] p-[20px] rounded-[12px] bg-[#003A46] flex flex-col gap-[17px]">
            <p className="text-[18px] text-white font-semibold">
              შეკვეთის ინფორმაცია
            </p>
            <div className="address mt-[7px] flex flex-col gap-[5px]">
              <p className="text-[16px] font-bold text-white">მისამართი</p>
              <p className="text-[14px] text-white/80 font-normal">
                {orderHistory[chosenIndex].address}
              </p>
            </div>
            <div className="address flex flex-col gap-[5px]">
              <p className="text-[16px] font-bold text-white">ტელეფონი</p>
              <p className="text-[14px] text-white/80 font-normal">
                {orderHistory[chosenIndex].mobile}
              </p>
            </div>
            <div className="address flex flex-col gap-[5px]">
              <p className="text-[16px] font-bold text-white">სტატუსი</p>
              <div className="status flex flex-row items-center gap-[10px]">
                <div
                  className="w-[18px] h-[18px] rounded-full"
                  style={{
                    backgroundColor:
                      orderHistory[chosenIndex].status === "მიწოდებული"
                        ? "#04FF80"
                        : "",
                  }}
                ></div>
                <p
                  className="text-[14px] font-normal"
                  style={{
                    color:
                      orderHistory[chosenIndex].status === "მიწოდებული"
                        ? "#04FF80"
                        : "",
                  }}
                >
                  {orderHistory[chosenIndex].status}
                </p>
              </div>
            </div>
            <div className="date flex flex-col gap-[5px]">
              <p className="text-[16px] font-bold text-white">
                მიწოდების თარიღი
              </p>
              <p className="text-[14px] text-white/80 font-normal">
                {orderHistory[chosenIndex].date}
              </p>
            </div>
            <div className="comment flex flex-col gap-[5px]">
              <p className="text-[16px] font-bold text-white">კომენტარი</p>
              <p className="text-[14px] text-white/80 font-normal">
                შეკვეთა ჩაბარდა წარმატებულად
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
