import locationIcon from "../../public/assets/locationIcon.svg";
import mapImage from "../../public/assets/mapImage.png";

export default function Locations() {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-[150px] mb:flex mb:flex-col dk:flex-row dk:items-center dk:gap-[72px] dk:justify-center w-[358px] dk:w-[1120px]">
        <div className="flex flex-col">
          <div className="titles flex flex-col gap-[20px]">
            <h2 className="text-[#04AED2] text-[27px] font-black w-[186px] dk:w-[444px]">
              გაყიდვების <span className="text-[#001519]">წერტილები</span>
            </h2>
            <p className="locationtext text-[16px] font-normal dk:w-[498px]">
              გემრიელი სიახლეები შენს ახლოს! იპოვე ჩვენი გაყიდვის წერტილები
              რუკაზე ან მისამართების სიაში და დატკბი შენი საყვარელი ნაყინით
              ნებისმიერ დროს.
            </p>
          </div>
          <div className="locations flex flex-col gap-[8px] mt-[28px]">
            <div className="location1 flex flex-row items-center gap-[5px]">
              <img src={locationIcon} alt="location icon" />
              <p className="locationtext text-[16px] font-normal">
                თბილისი, პეკინის გამზირი 20
              </p>
            </div>
            <div className="location2 flex flex-row items-center gap-[5px]">
              <img src={locationIcon} alt="location icon" />
              <p className="locationtext text-[16px] font-normal">
                თბილისი, ვაჟა-ფშაველას გამზირი 45
              </p>
            </div>
            <div className="location3 flex flex-row items-center gap-[5px]">
              <img src={locationIcon} alt="location icon" />
              <p className="locationtext text-[16px] font-normal">
                ბათუმი, ჭავჭავაძის ქუჩა 12
              </p>
            </div>
            <div className="location4 flex flex-row items-center gap-[5px]">
              <img src={locationIcon} alt="location icon" />
              <p className="locationtext text-[16px] font-normal">
                ქუთაისი, რუსთაველის ქუჩა 87
              </p>
            </div>
          </div>
        </div>
        <div className="map mt-[31px] relative">
          <img src={mapImage} alt="map image" />
          <img
            src={locationIcon}
            alt="location icon1"
            className="absolute w-[41px] h-[48px] top-10 left-28"
          />
          <img
            src={locationIcon}
            alt="location icon2"
            className="absolute w-[41px] h-[48px] bottom-20 right-30 "
          />
        </div>
      </div>
    </div>
  );
}
