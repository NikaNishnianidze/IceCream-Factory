import statusDataJson from "../Datas/ManagerData/productionStatus.json";
import reloadingIcon from "../../public/assets/reload.svg";
import { useState } from "react";
import statusDesignData from "../Datas/ManagerData/statusDesigns.json";

export default function ChangeStatus() {
  const [chosenIndex, setChosenIndex] = useState<number | null>(null);
  const [status, setStatus] = useState<boolean>(false);
  const [statusData, setStatusData] = useState(statusDataJson);

  const openStatusModal = (index: number) => {
    setChosenIndex(index);
    setStatus(true);
  };
  const handleSelectStatus = (statusIndex: number) => {
    if (chosenIndex !== null) {
      const updated = [...statusData];
      updated[chosenIndex].status = statusDesignData[statusIndex].status;
      setStatusData(updated);
      setChosenIndex(null);
      setStatus(false);
    }
  };
  return (
    <div className="w-[807px] p-[20px] rounded-[6px] bg-[#003A46]">
      <p className="text-[18px] text-white font-semibold">
        წარმოების სტატუსების განახლება
      </p>
      <div className="header-lin mt-[21px] w-[767px] py-[13px] bg-[#858585]/30 rounded-[6px] flex flex-row items-center px-[28px] text-[14px] text-white font-normal">
        <p>პარტია</p>
        <p className="ml-[90px]">პროდუქტი</p>
        <p className="ml-[178px]">სტატუსი</p>
      </div>
      <div className="flex flex-col mt-[15px]">
        {statusData.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex flex-row items-center">
              <p className="w-[20px] text-white/80 text-[14px] font-normal ml-[19px]">
                {item.id}
              </p>
              <p className="w-[140px] text-center text-white/80 text-[14px] font-normal ml-[110px]">
                {item.name}
              </p>
              <div className="status flex items-center gap-[8px] ml-[90px]">
                <div
                  className="circle w-[17px] h-[17px] rounded-full"
                  style={{
                    backgroundColor:
                      item.status === "წარმოებაშია"
                        ? "#00AB55"
                        : item.status === "ხარისხის შემოწმება"
                        ? "#FFF70F"
                        : item.status === "დამზადებულია"
                        ? "#71AFF0"
                        : "",
                  }}
                ></div>
                <p
                  className="w-[160px] text-center text-white/80 text-[14px] py-[3px] font-normal  rounded-[35px]"
                  style={{
                    color:
                      item.status === "წარმოებაშია"
                        ? "#04FF81"
                        : item.status === "ხარისხის შემოწმება"
                        ? "#FFF70F"
                        : item.status === "დამზადებულია"
                        ? "#71AFF0"
                        : "",
                  }}
                >
                  {item.status}
                </p>
              </div>
              <div
                onClick={() => openStatusModal(index)}
                className="change-status flex items-center gap-[5px] cursor-pointer ml-[72px]"
              >
                <img src={reloadingIcon} alt="reloading Icon" />
                <p className="text-[14px] text-white font-normal">განახლება</p>
              </div>
            </div>

            <div className="divider w-[767px] h-[1px] bg-[#E0E6ED]/40 mt-[11px] mb-[15px]"></div>
          </div>
        ))}
      </div>
      {status ? (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#003A46] w-[500px] p-[20px] rounded-[12px]">
            <div className="first-line flex items-center flex-row justify-between">
              <p className="text-[18px] text-white font-semibold">
                სტატუსის განახლება
              </p>
              <p
                onClick={() => setStatus(false)}
                className="text-[14px] text-white font-normal"
              >
                x
              </p>
            </div>
            <p className="text-[16px] text-white/80 font-normal mt-[29px]">
              აირჩიეთ ახალი სტატუსი:
            </p>
            <div className="status-options mt-[17px] flex flex-col gap-[10px]">
              {statusDesignData.map((status, index) => (
                <div
                  key={index}
                  className={`status-option flex items-center gap-[10px] p-[10px] rounded-[6px] cursor-pointer ${
                    chosenIndex === index
                      ? "bg-[#004B54] text-white"
                      : "bg-[#001519] text-white/80"
                  }`}
                  onClick={() => handleSelectStatus(index)}
                >
                  <div
                    className="status-color w-[17px] h-[17px] rounded-full"
                    style={{ backgroundColor: status.color }}
                  ></div>
                  <p className="text-[14px]">{status.status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
