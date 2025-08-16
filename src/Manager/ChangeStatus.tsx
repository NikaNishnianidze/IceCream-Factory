import statusData from "../Datas/ManagerData/productionStatus.json";

export default function ChangeStatus() {
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
            </div>

            <div className="divider w-[767] h-[1px] bg-[#E0E6ED]/40 mt-[11px] mb-[15px]"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
