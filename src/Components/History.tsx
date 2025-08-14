import historyImage from "../../public/assets/history image.png";

export default function History() {
  return (
    <div className="mt-[127px] flex flex-col items-center">
      <div className="container flex flex-col items-center w-[358px] rounded-[18px] bg-[#001519] p-[29px]">
        <h2 className="text-[27px] text-[#F8E7F3] font-black text-left w-[277px]">
          <span className="text-[#D1009D]">სიყვარულით</span> შექმნილი ნაყინი —
          ჩვენი <span className="text-[#04AED2]">ისტორია</span>
        </h2>
        <p className="mt-[12px] w-[302px] text-[14px] text-[#C6C4D0] font-normal">
          ჩვენი ისტორია დაიწყო პატარა საოჯახო სამზარეულოში, სადაც ნამდვილი გემოს
          ძიებამ პირველი რეცეპტი შექმნა. წლების განმავლობაში ჩვენ ვცდილობდით
          გაგვეხალისებინა ტკბილი მომენტები ყველასთვის — ბავშვებისთვისაც და
          დიდებისთვისაც. დღეს უკვე ჩვენი ნაყინი მზადდება საუკეთესო
          ინგრედიენტებით და ინოვაციური მეთოდებით, თუმცა არ ვკარგავთ მთავარი
          იდეის: ნატურალურობა, სიახლე და დაუვიწყარი გემო. ჩვენთვის ნაყინი არ
          არის უბრალოდ დესერტი — ეს არის გამოცდილება, რომელიც გაერთიანებს
          მეგობრებსა და ოჯახს.
        </p>
        <img
          src={historyImage}
          alt="history image"
          className="mt-[12px] rounded-[24px]"
        />
      </div>
    </div>
  );
}
