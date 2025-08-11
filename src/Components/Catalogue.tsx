import { useEffect, useRef, useState } from "react";
import vanilladream from "../../public/assets/vanilladream.png";
import chocolateBliss from "../../public/assets/chocolatebliss.png";
import berrymix from "../../public/assets/berrymix.png";
import pistachio from "../../public/assets/pistachio dedlight.png";
import mangotango from "../../public/assets/mangotango.png";
import cookikescream from "../../public/assets/cookiescream.png";
import strawberry from "../../public/assets/strawberry.png";
import arrowleft from "../../public/assets/arrowleft.svg";
import arrowright from "../../public/assets/arrowright.svg";

export default function Catalogue() {
  const boxes = [
    {
      img: vanilladream,
      title: "Vanilla Dream",
      description:
        "ნაზი ვანილის ნაყინი ნატურალური ვანილისგან, დამამშვიდებელი გემო.",
      price: "7.50₾",
    },
    {
      img: chocolateBliss,
      title: "Chocolate Bliss",
      description:
        "მდიდარი შოკოლადის ნაყინი მაღალი ხარისხის კაკაოთი და კრემის ტექსტურით.",
      price: "8.00₾",
    },
    {
      img: berrymix,
      title: "Berry Mix",
      description:
        "მოცხარის, მარწყვისა და ჟოლოს ნაზავი — მჟავატკბილი და სურნელოვანი არჩევანი.",
      price: "8.50₾",
    },
    {
      img: pistachio,
      title: "Pistachio Delight",
      description:
        "დახვეწილი პისტაქიოს გემო, უნიკალური და არომატული გამოცდილებისთვის.",
      price: "9.00₾",
    },
    {
      img: mangotango,
      title: "Mango Tango",
      description:
        "ეგზოტიკური მანგოს გემო ცოცხალი და გამაგრილებელი ეფექტისთვის.",
      price: "8.50₾",
    },
    {
      img: cookikescream,
      title: "Cookies & Cream",
      description:
        "ნაღების ნაყინი შოკოლადის - ქუქი ნატეხებით  კლასიკა ყველასთვის.",
      price: "9.00₾",
    },
    {
      img: strawberry,
      title: "Strawberry",
      description: "100% ხილის ჯანსაღი არჩევანი — მსუბუქი და სურნელოვანი.",
      price: "7.50₾",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(2);
  const [containerWidth, setContainerWidth] = useState(375);
  const containerRef = useRef<HTMLDivElement>(null);

  const gap = 20;

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  const isDesktop = containerWidth >= 1440;
  const boxesPerView = isDesktop ? 4 : 1;
  const boxWidth = isDesktop
    ? (containerWidth - gap * (boxesPerView - 1)) / boxesPerView
    : 231;
  const maxIndex = boxes.length - boxesPerView;
  const peek = (containerWidth - boxWidth) / 2;
  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };
  return (
    <>
      <div className="mobileDesign mt-[103px] mb:flex mb:flex-col mb:items-center mb:block dk:hidden">
        <p className="text-[#D1009D] text-[27px] font-bold mb-4">კატალოგი</p>

        <div
          style={{ width: "100%", maxWidth: 600 }}
          ref={containerRef}
          className="relative w-[375px] overflow-hidden mx-auto"
        >
          <div
            className="flex gap-[20px] items-center transition-transform duration-300"
            style={{
              transform: `translateX(calc(${peek}px - ${
                currentIndex * (boxWidth + gap)
              }px))`,
            }}
          >
            {boxes.map((box, idx) => (
              <div
                key={idx}
                className="pb-[7px] flex flex-col items-center rounded-[14.5px] bg-[#003A46]"
                style={{ minWidth: `${boxWidth}px` }}
              >
                <img
                  src={box.img}
                  alt={box.title}
                  className="rounded-t-[14.5px] w-[231px] h-[196px]"
                />
                <p className="mt-[15px] text-[24px] text-white font-bold">
                  {box.title}
                </p>
                <p className="w-[218px] text-white text-[12px] font-normal text-center">
                  {box.description}
                </p>
                <p className="mt-[5px] text-[24px] text-[#D30EA2] font-bold">
                  {box.price}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full shadow w-[48px] h-[48px] rounded-full bg-[#D1009D] cursor-pointer flex items-center justify-center"
          >
            <img src={arrowleft} alt="arrow left" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full shadow w-[48px] h-[48px] rounded-full bg-[#D1009D] cursor-pointer flex items-center justify-center"
          >
            <img src={arrowright} alt="arrow right" />
          </button>
        </div>
      </div>
      <div
        className="desktopDesign hidden dk:flex dk:flex-col dk:items-center dk:mt-[120px]"
        style={{ width: "100%", maxWidth: 1000, margin: "0 auto" }}
      >
        <p className="text-[#D1009D] text-[40px] font-bold mt-[120px] mb-[26px]">
          კატალოგი
        </p>

        <div
          ref={containerRef}
          className="relative overflow-hidden w-full"
          style={{ maxWidth: 1000 }}
        >
          <div
            className="flex gap-[20px] transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * (boxWidth + gap)}px)`,
            }}
          >
            {boxes.map((box, idx) => (
              <div
                key={idx}
                className="pb-[7px] flex flex-col items-center rounded-[14.5px] bg-[#003A46]"
                style={{ minWidth: `${boxWidth}px` }}
              >
                <img
                  src={box.img}
                  alt={box.title}
                  className="rounded-t-[14.5px] w-full h-[196px] object-cover"
                />
                <p className="mt-[15px] text-[24px] text-white font-bold">
                  {box.title}
                </p>
                <p className="w-full text-white text-[12px] font-normal text-center">
                  {box.description}
                </p>
                <p className="mt-[5px] text-[24px] text-[#D30EA2] font-bold">
                  {box.price}
                </p>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute top-1/2 left-0 -translate-y-1/2 p-2 rounded-full shadow w-[48px] h-[48px] bg-[#D1009D] cursor-pointer flex items-center justify-center ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <img src={arrowleft} alt="arrow left" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className={`absolute top-1/2 right-0 -translate-y-1/2 p-2 rounded-full shadow w-[48px] h-[48px] bg-[#D1009D] cursor-pointer flex items-center justify-center ${
              currentIndex === maxIndex ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <img src={arrowright} alt="arrow right" />
          </button>
        </div>
      </div>
    </>
  );
}
