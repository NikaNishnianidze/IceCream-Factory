import ingredientData from "../Datas/ManagerData/ingredients.json";
import plusIcon from "../../public/assets/plusIcon.svg";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import addIcon from "../../public/assets/addIcon.svg";
import closeIcon from "../../public/assets/closeIcon.svg";

interface Inputs {
  name: string;
  quantity: number;
  expirationDate: string;
  complain: string;
}
export default function Inventar() {
  const [addItem, setAddItem] = useState<boolean>(false);
  const schema = yup
    .object({
      name: yup.string().required("სახელის ველი სავალდებულოა"),
      quantity: yup.number().required("რაოდენობის ველი სავალდებულოა"),
      expirationDate: yup
        .string()
        .required("ვადის გასვლის თარიღის ველი სავალდებულოა"),
      complain: yup.string().required("შენიშვნის ველი სავალდებულოა"),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newArray = [
      ...ingredientData,
      {
        name: data.name,
        status: "საკმარისია",
        expirationDate: data.expirationDate,
        quantity: String(data.quantity),
        complain: data.complain,
      },
    ];
    ingredientData.splice(0, ingredientData.length, ...newArray);
    setAddItem(false);
  };
  return (
    <div className="w-[807px] rounded-[6px] bg-[#003A46] p-[20px]">
      <p className="text-[18px] text-white font-semibold">
        ინგრედიენტების მართვა
      </p>
      <div className="header-line mt-[22px] w-[767px] py-[13px] px-[20px] bg-[#858585]/30 rounded-[6px] flex items-center text-white text-[14px] font-normal ">
        <p>ინგრედიენტი</p>
        <p className="ml-[176px]">სტატუსი</p>
        <p className="ml-[100px]">საკმარისობა</p>
        <p className="ml-[57px]">რაოდენობა</p>
      </div>
      <div className="main-info flex flex-col mt-[13px]">
        {ingredientData.map((item, index) => {
          return (
            <div key={index} className="flex flex-col">
              <div className="flex flex-row items-center">
                <p className="w-[200px] text-white/80 text-[14px] font-normal ml-[19px]">
                  {item.name}
                </p>
                <p
                  className="w-[101px] text-center text-white/80 text-[14px] py-[3px] font-normal ml-[55px] rounded-[35px]"
                  style={{
                    backgroundColor:
                      item.status === "საკმარისია"
                        ? "#00AB55"
                        : item.status === "შესავსები"
                        ? "#7E7900"
                        : item.status === "კრიტიკული"
                        ? "#A20000"
                        : "",
                    color:
                      item.status === "საკმარისია"
                        ? "#04FF81"
                        : item.status === "შესავსები"
                        ? "#FFF70F"
                        : item.status === "კრიტიკული"
                        ? "#FF0000"
                        : "",
                  }}
                >
                  {item.status}
                </p>
                <p className="w-[123px] text-center text-white/80 text-[14px] font-normal ml-[70px]">
                  {item.expirationDate}
                </p>
                <p className="ml-[65px] text-[14px] text-white font-normal">
                  {item.quantity}
                </p>
              </div>

              <div className="divider w-[767] h-[1px] bg-[#E0E6ED]/40 mt-[11px] mb-[15px]"></div>
            </div>
          );
        })}
      </div>
      <div className="add-product mt-[131px] flex flex-row items-end justify-between">
        <button
          onClick={() => setAddItem(true)}
          className="cursor-pointer w-[132px] py-[16px] rounded-[12px] bg-[#001519] text-white text-[12px] font-black flex flex-row items-center justify-center gap-[10px]"
        >
          <img src={plusIcon} alt="plus icon" />
          დამატება
        </button>
        <p className="text-[14px] text-white/80 font-normal">
          <span className="font-black">*3 ინგრედიენტი</span> საჭიროებს
          ყურადღებას
        </p>
      </div>
      {addItem && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-[429px] p-[20px] rounded-[12px] bg-[#003A46]">
            <div className="title flex items-center justify-between">
              <p className="text-[18px] text-[#F8E7F3] font-semibold">
                ინგრედიენტის დამატება
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-[41px] flex flex-col items-center"
            >
              <div className="name">
                <label className="text-[14px] text-[#F8E7F3] font-normal">
                  ინგრედიენტის სახელი
                </label>
                <input
                  type="text"
                  {...register("name")}
                  className="border border-[#001519] bg-[#001519] rounded-lg w-[387px] py-[3px] outline-none cursor-pointer mt-[5px] px-3 text-white/80 text-[14px] font-normal"
                  placeholder="მაგ: რძე"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name.message}</p>
                )}
              </div>
              <div className="amount mt-[10px]">
                <label className="text-[14px] text-[#F8E7F3] font-normal mt-[17px]">
                  რაოდენობა
                </label>
                <input
                  type="number"
                  {...register("quantity")}
                  className="border border-[#001519] bg-[#001519] rounded-lg w-[387px] py-[3px] outline-none cursor-pointer mt-[5px] px-3 text-white/80 text-[14px] font-normal"
                  placeholder="მაგ: 100ლ"
                />
                {errors.quantity && (
                  <p className="text-red-500 text-xs">
                    {errors.quantity.message}
                  </p>
                )}
              </div>
              <div className="expirationDate">
                <label className="text-[14px] text-[#F8E7F3] font-normal mt-[17px]">
                  პროგნოზირებული საკმარისობა:
                </label>
                <input
                  type="text"
                  {...register("expirationDate")}
                  placeholder="მაგ: 5 დღე"
                  className="border border-[#001519] bg-[#001519] rounded-lg w-[387px] py-[3px] outline-none cursor-pointer mt-[5px] px-3 text-white/80 text-[14px] font-normal"
                />
                {errors.expirationDate && (
                  <p className="text-red-500 text-xs">
                    {errors.expirationDate.message}
                  </p>
                )}
              </div>
              <div className="complain">
                <label className="text-[14px] text-[#F8E7F3] font-normal mt-[17px]">
                  შენიშვნა
                </label>
                <textarea
                  {...register("complain")}
                  placeholder="მაგ: სწრაფად მოხმარებადი პროდუქტი"
                  className="border border-[#001519] bg-[#001519] rounded-lg w-[387px] py-[3px] h-[96px] outline-none cursor-pointer mt-[5px] px-3 text-white/80 text-[14px] font-normal"
                />
                {errors.complain && (
                  <p className="text-red-500 text-xs">
                    {errors.complain.message}
                  </p>
                )}
              </div>
              <div className="buttons flex items-center gap-[13px] w-full justify-center mt-[23px]">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-[10px] bg-[#001519] text-white text-[14px] font-black py-[12px] px-[20px] rounded-[8px] cursor-pointer"
                >
                  <img src={addIcon} alt="add icon" />
                  დამატება
                </button>
                <button
                  onClick={() => setAddItem(false)}
                  className="flex items-center justify-center gap-[10px] bg-[#001519] text-white text-[14px] font-black py-[12px] px-[20px] rounded-[8px] cursor-pointer"
                >
                  <img src={closeIcon} alt="close icon" /> გაუქმება
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
