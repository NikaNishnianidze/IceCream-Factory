import ManageRoleData from "../Datas/ManagerData/AministratorData/manageRoles.json";
import phoneIcon from "../../public/assets/phoneIcon.svg";
import messageIcon from "../../public/assets/messageIcon.svg";
import { useState } from "react";

export default function ManageRoles() {
  const [mobileModal, setMobileModal] = useState<boolean>(false);
  const [chosenIndex, setChosenIndex] = useState<number>(0);

  const handleOpen = (index: number) => {
    setChosenIndex(index);
  };

  return (
    <div className="w-[807px] rounded-[8px] p-[20px] flex flex-col bg-[#003A46]">
      <p className="text-[18px] text-white font-semibold">
        მომხმარებლების/როლების მართვა
      </p>
      <div className="header-line mt-[21px] w-[767px] py-[13px] px-[40px] bg-[#858585]/30 rounded-[6px] text-[14px] font-normal text-white flex items-center justify-between">
        <p>სახელი</p>
        <p>როლი</p>
        <p>კონტაქტი</p>
        <p>სტატუსი</p>
      </div>
      <div className="main-info flex flex-col mt-[14px]">
        {ManageRoleData.map((item, index) => {
          const isLast = index === ManageRoleData.length - 1;
          return (
            <div key={index} className="flex flex-col">
              <div className="flex flex-row items-center mb-[15px]">
                <p className="ml-[23px] py-[5px] w-[89px] border-[1px] border-[#FFFFFF] rounded-[6px] text-white text-[14px] font-normal flex justify-center">
                  {item.name}
                </p>
                <p className="flex justify-center w-[118px] ml-[96px] text-white text-[14px] font-normal">
                  {item.role}
                </p>
                <div
                  onClick={() => {
                    handleOpen(index);
                    setMobileModal(true);
                  }}
                  className="contacte flex flex-row items-center justify-center gap-[4px] ml-[127px] cursor-pointer"
                >
                  <img src={phoneIcon} alt="phone icon" />
                  <img src={messageIcon} alt="message icon" />
                </div>
                <div className="status flex items-center gap-[4px] ml-[161px]">
                  <div
                    className="circle w-[16px] h-[16px] rounded-full"
                    style={{
                      backgroundColor:
                        item.status === "აქტიური"
                          ? "#04FF80"
                          : item.status === "გასული"
                          ? "#FF0000"
                          : "",
                    }}
                  ></div>
                  <p className="text-white text-[14px] font-normal">
                    {item.status}
                  </p>
                </div>
              </div>
              {!isLast && (
                <div className="divider w-[767px] h-[1px] bg-[#E0E6ED]/40 mb-[11px]"></div>
              )}
            </div>
          );
        })}
      </div>
      {mobileModal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-[395px] p-[20px] rounded-[8px] bg-[#003A46]">
            <div className="info flex items-center justify-between">
              <p className="text-[17px] text-white font-bold">
                მობილურის ინფორმაცია
              </p>
              <p
                onClick={() => setMobileModal(false)}
                className="text-[18px] text-white font-bold cursor-pointer"
              >
                x
              </p>
            </div>
            <div className="mobile flex items-center gap-[10px] mt-[15px]">
              <img src={phoneIcon} alt="phone icon" />
              <p>
                <p className="text-[16px] text-white font-normal">
                  {ManageRoleData[chosenIndex].mobile}
                </p>
              </p>
            </div>
            <p className="mt-[20px] text-[18px] text-white font-bold">იმეილი</p>
            <div className="email flex items-center gap-[10px] mt-[15px]">
              <img src={messageIcon} alt="message icon" />
              <p className="text-[16px] text-white font-normal">
                {ManageRoleData[chosenIndex].email}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
