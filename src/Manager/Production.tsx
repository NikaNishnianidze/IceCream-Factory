import { useState } from "react";
import data from "../Datas/ManagerData/production.json";

export default function Production() {
  const [details, setDetails] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const handleSeeDetails = (index: number) => {
    setDetails(true);
    setSelectedIndex(index);
  };

  return (
    <div className="w-[807px] p-[20px] rounded-[6px] bg-[#003A46] flex flex-col">
      <p className="text-[18px] text-white font-semibold">წარმოების მართვა</p>
      <div className="header-div mt-[22px] w-[767px] rounded-[6px] bg-[#858585]/30 py-[13px] px-[20px] flex items-center text-white text-[14px] font-normal">
        <p>წარმოების ეტაპი</p>
        <p className="ml-[148px]">სტატუსი</p>
        <p className="w-[123px] text-center ml-[89px]">შესრულებულია ერთეული</p>
        <p className="ml-[57px]">შენიშვნა</p>
      </div>
      <div className="col-line-div flex flex-col gap-[17px] mt-[14px]">
        {data.map((item, index) => {
          const isLast = index === data.length - 1;
          return (
            <div key={index} className="flex flex-col">
              <div className="flex flex-row items-center">
                <p className="w-[200px] text-white/80 text-[14px] font-normal ml-[19px]">
                  {item.step}
                </p>
                <p
                  className="w-[101px] text-center text-white/80 text-[14px] py-[3px] font-normal ml-[55px] rounded-[35px]"
                  style={{
                    backgroundColor:
                      item.status === "დასრულდა"
                        ? "#00AB55"
                        : item.status === "მზადდება"
                        ? "#14508F"
                        : item.status === "შეფუთვა"
                        ? "#7E7900"
                        : "",
                    color:
                      item.status === "დასრულდა"
                        ? "#04FF81"
                        : item.status === "მზადდება"
                        ? "#71AFF0"
                        : item.status === "შეფუთვა"
                        ? "#FFF70F"
                        : "",
                  }}
                >
                  {item.status}
                </p>
                <p className="w-[123px] text-center text-white/80 text-[14px] font-normal ml-[70px]">
                  {item.quantity}
                </p>
                <button
                  onClick={() => handleSeeDetails(index)}
                  className="w-[106px] rounded-[6px] border-white border-[1px] text-white py-[3px] text-[14px] font-normal cursor-pointer hover:bg-[#04AED2] hover:text-white/80 ml-[50px]"
                >
                  დეტალები
                </button>
              </div>
              {!isLast && (
                <div className="divider w-[767] h-[1px] bg-[#E0E6ED]/40 mt-[11px]"></div>
              )}
            </div>
          );
        })}
      </div>
      <p className="text-[14px] text-white font-normal mt-[129px]">
        დღეს ჯამში: <span className="font-black">1,200 ერთეული</span>{" "}
        წარმოებულია
      </p>
      {details && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="box w-[395px] rounded-[12px] bg-[#003A46] p-[20px] flex flex-col">
            <div className="details flex flex-row items-center justify-between">
              <p className="text-[18px] font-semibold text-white">დეტალები</p>
              <button
                onClick={() => setDetails(false)}
                className="text-white text-[16px] font-semibold"
              >
                x
              </button>
            </div>
            <div className="info flex flex-col gap-[24px] mt-[30px]">
              <div className="productionStep flex flex-col">
                <p className="text-white text-[16px] font-bold">
                  წარმოების ეტაპი
                </p>
                <div className="divider w-[157px] h-[1px] bg-[#04AED2] mt-[1px]"></div>
                <p className="text-white text-[12px] font-normal">
                  {data[selectedIndex].step}
                </p>
              </div>
              <div className="status flex flex-col">
                <p className="text-white text-[16px] font-bold">სტატუსი</p>
                <div className="divider w-[157px] h-[1px] bg-[#04AED2] mt-[1px]"></div>
                <div className="statusinfo flex flex-row items-center gap-[6px] mt-[8px]">
                  <div
                    style={{
                      backgroundColor:
                        data[selectedIndex].status === "დასრულდა"
                          ? "#04FF80"
                          : data[selectedIndex].status === "მზადდება"
                          ? "#71AFF0"
                          : data[selectedIndex].status === "შეფუთვა"
                          ? "#FFF70F"
                          : "",
                    }}
                    className="circle w-[17px] h-[17px] rounded-full"
                  ></div>
                  <p
                    className="text-[12px] font-normal"
                    style={{
                      color:
                        data[selectedIndex].status === "დასრულდა"
                          ? "#04FF80"
                          : data[selectedIndex].status === "მზადდება"
                          ? "#71AFF0"
                          : data[selectedIndex].status === "შეფუთვა"
                          ? "#FFF70F"
                          : "",
                    }}
                  >
                    {data[selectedIndex].status}
                  </p>
                </div>
              </div>
              <div className="finished flex flex-col">
                <p className="text-white text-[16px] font-bold">
                  შესრულებული ერთეული
                </p>
                <div className="divider w-[157px] h-[1px] bg-[#04AED2] mt-[1px]"></div>
                <p className="text-[12px] text-white font-bold mt-[8px]">
                  {data[selectedIndex].quantity}
                </p>
              </div>
              <div className="complain flex flex-col">
                <p className="text-white text-[16px] font-bold">შენიშვნა</p>
                <div className="divider w-[157px] h-[1px] bg-[#04AED2] mt-[1px]"></div>
                <p className="text-[12px] text-white font-bold mt-[8px]">
                  {data[selectedIndex].complaing}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
