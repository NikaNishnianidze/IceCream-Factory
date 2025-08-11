import ourProducts from "../../public/assets/ourProducts cream.png";
import ourMission from "../../public/assets/ourMission cream.png";

export default function BlackBox() {
  return (
    <div className="main-div mt-[72px] flex flex-col items-center">
      <div className="mb:w-full mb:flex mb:flex-col mb:items-center dk:rounded-[18px] mb:gap-[38.95px] mb:py-[20.3px] bg-[#001519] dk:w-[1120px] dk:py-[100px] dk:flex-row dk:items-center dk:justify-center dk:gap-[59px]">
        <div className="box1 mb:w-[359px] dk:w-[440px] py-[21px] flex flex-col items-center bg-[#003A46] rounded-[19.6px]">
          <p className="mb:text-[19.6px] dk:text-[24px] text-[#F8E7F3] font-black">
            ჩვენი პროდუქცია
          </p>
          <img
            src={ourProducts}
            alt="our products ice cream"
            className="mt-[18.78px] dk:w-[380px] dk:h-[348px]"
          />
          <p className="mt-[19.2px] mb:w-[294.8px] dk:w-[361px] mb:text-[12.6px] dk:text-[14px] text-[#C6C4D0] font-normal">
            ნატურალური ინგრედიენტები, მრავალფეროვანი გემოები და გამორჩეული
            ტექსტურა — ნაყინი, რომელიც სიამოვნებას მოგანიჭებთ.
          </p>
        </div>
        <div className="box2 mb:w-[359px] dk:w-[440px] py-[21px] flex flex-col items-center bg-[#003A46] rounded-[19.6px]">
          <p className="mb:text-[19.6px] dk:text-[24px] text-[#F8E7F3] font-black">
            ჩვენი მისია
          </p>
          <img
            src={ourMission}
            alt="our mission ice cream"
            className="mt-[18.78px] dk:w-[380px] dk:h-[348px]"
          />
          <p className="mb:mt-[19.2px] dk:mt-[22px] mb:w-[294.8px] dk:w-[341px] mb:text-[12.6px] dk:text-[14px] text-[#C6C4D0] font-normal">
            ვქმნით ნაყინს, რომელიც აერთიანებს ადამიანებს და ყოველდღიურობას ტკბილ
            მომენტებად აქცევს.
          </p>
        </div>
      </div>
    </div>
  );
}
