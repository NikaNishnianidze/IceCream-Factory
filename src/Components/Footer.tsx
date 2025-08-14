import logo from "../../public/assets/glaselogo.svg";
import emailicon from "../../public/assets/emailicon.png";
import contacticon from "../../public/assets/contacticon.svg";
import locationicon from "../../public/assets/locationIcon.svg";
export default function Footer() {
  return (
    <div className="w-full px-[15px] py-[30px] bg-[#0F0F0F] mt-[92px]">
      <div className="maindiv mb:flex mb:flex-col mb:gap-[65px] dk:flex-row">
        <div className="titles mb:flex mb:flex-col mb:items-start mb:gap-[10px]">
          <img src={logo} alt="glase logo" />
          <p className="mt-[10px] w-[278px] text-[#C7C7C7] text-[14px] font-normal">
            ჩვენ ვქმნით ნაყინის უნიკალურ გამოცდილებას — ყოველ ქილაში ახალი გემო
            და სიხარულია. იყავით პირველები, ვინც გაიგებს ჩვენს სიახლეებს და
            სპეციალურ შეთავაზებებს.
          </p>
        </div>
        <div className="contacts mb:flex mb:flex-col mb:items-start gap-[27px]">
          <div className="follow flex flex-col">
            <p className="text-[18px] font-normal text-[#FFFFFF]">
              გამოგვყევით
            </p>
            <p className="mt-[10px] text-[14px] text-[#C7C7C7] font-normal cursor-pointer">
              Facebook
            </p>
            <p className="text-[14px] text-[#C7C7C7] font-normal cursor-pointer">
              Instagram
            </p>
            <p className="text-[14px] text-[#C7C7C7] font-normal cursor-pointer">
              Linkedin
            </p>
          </div>
          <div className="contact flex flex-col">
            <p className="text-[18px] text-white font-normal">დაგვიკავშირდით</p>
            <div className="contactphone flex flex-row items-center gap-[23px] mt-[12px]">
              <img src={contacticon} alt="contacticon" />
              <p className="text-[#C7C7C7] text-[14px] font-normal">
                +995 599 123 456
              </p>
            </div>
            <div className="email flex flex-row items-center gap-[23px] mt-[12px]">
              <img src={emailicon} alt="emailicon" />
              <p className="text-[#C7C7C7] text-[14px] font-normal">
                icecream@gmail.com
              </p>
            </div>
            <div className="locationicon flex flex-row items-center gap-[23px] mt-[12px]">
              <img src={locationicon} alt="locationicon" />
              <p className="text-[#C7C7C7] text-[14px] font-normal">
                Address : Tbilisi
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="divider h-[1px] w-[356px] bg-white mt-[42px]"></div>
      <div className="lastline flex flex-row justify-between items-center mt-[25px] text-[12px] text-[#C7C7C7] font-normal">
        <p>მხარდაჭერა</p>
        <p>სერვისები</p>
        <p>წესები და პირობები</p>
      </div>
    </div>
  );
}
