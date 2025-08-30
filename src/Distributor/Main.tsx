import orderHistory from "../Datas/ManagerData/Distributor/orderHistory.json";

export default function Main() {
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
        {orderHistory.map((item) => {
          return (
            <div key={item.id} className="flex flex-col items-center">
              <div className="flex flex-row items-center">
                <p>{item.id}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
