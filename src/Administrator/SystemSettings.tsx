export default function SystemSettings() {
  return (
    <div className="flex flex-col w-[807px] rounded-[6px] p-[20px] bg-[#003A46]">
      <h2 className="text-[18px] text-white font-semibold">
        პარამეტრებები/კონფიგურაცია
      </h2>
      <div className="main-options flex flex-row items-center justify-between mt-[50.29px]">
        <div className="checks flex flex-col items-start gap-[9px] ml-[31px]">
          <div className="system-messages flex flex-row  items-center gap-[8px]">
            <p className="text-[14px] text-white/70 font-semibold">
              სისტემური შეტყობინებები
            </p>
            <input type="checkbox" />
          </div>
          <div className="status-warning flex flex-row  items-center gap-[8px]">
            <p className="text-[14px] text-white/70 font-semibold">
              შეკვეთების სტატუსის გაფრთხილებები
            </p>
            <input type="checkbox" />
          </div>
          <div className="email-update flex flex-row  items-center gap-[8px]">
            <p className="text-[14px] text-white/70 font-semibold">
              ელ.ფოსტის განახლებები
            </p>
            <input type="checkbox" />
          </div>
        </div>
        <div className="email-password flex flex-col gap-[11px] items-start">
          <div className="email flex flex-row items-center gap-[8px]">
            <p className="text-[14px] text-white/70 font-bold">ელ. ფოსტა:</p>
            <p className="text-[14px] text-white/70 font-normal">
              administrator@icecream.ge
            </p>
          </div>
          <div className="password flex flex-row items-center gap-[8px]">
            <p className="text-[14px] text-white/70 font-bold">პაროლი:</p>
            <p className="text-[14px] text-white/70 font-normal">
              ************
            </p>
          </div>
        </div>
      </div>
      <div className="platform w-[772px] rounded-[6px] bg-[#001519] p-[15px] flex flex-col mt-[43px]">
        <h3 className="text-white text-[18px] font-normal">პლატფორმა</h3>
        <div className="dividerr w-[126px] h-[1px] bg-[#04AED2]"></div>
        <p className="text-[14px] font-normal text-white mt-[6px]">
          ენა
          <span className="text-white/70"> - ქართული</span>
        </p>
        <p className="mt-[12px] text-[14px] text-white font-normal">
          ვერსია
          <span className="text-white/70"> - 2.11</span>
        </p>
        <p className="mt-[12px] text-[14px] text-white font-normal">
          განახლებები
          <span className="text-white/70"> - 12.05.2025</span>
        </p>
      </div>
    </div>
  );
}
