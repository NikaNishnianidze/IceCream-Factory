import ingredientsData from "../Datas/ManagerData/AministratorData/ingredients.json";
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
  status: string;
}
export default function Ingredients() {
  const [addItemModal, setAddItemModal] = useState<boolean>(false);
  const schema = yup
    .object({
      name: yup.string().required("სახელის ველი სავალდებულოა"),
      quantity: yup.number().required("რაოდენობის ველი სავალდებულოა"),
      expirationDate: yup
        .string()
        .required("ვადის გასვლის თარიღის ველი სავალდებულოა"),
      status: yup.string().required("სტატუსის ველი სავალდებულოა"),
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
      ...ingredientsData,
      {
        ingredient: data.name,
        status: data.status,
        date: data.expirationDate,
        amount: JSON.stringify(data.quantity),
      },
    ];
    ingredientsData.splice(0, ingredientsData.length, ...newArray);
    setAddItemModal(false);
    console.log(data);
  };
  return (
    <div className="flex flex-col w-[807px] rounded-[6px] p-[20px] bg-[#003A46]">
      <p className="text-[18px] text-white font-semibold">
        ინგრედიენტების მართვა
      </p>
      <div className="first-line mt-[22px] w-[767px] py-[13px] px-[20px] flex flex-row items-center justify-between text-[14px] bg-[#858585]/30 rounded-[6px] font-normal text-white">
        <p>ინგრედიენტი</p>
        <p>სტატუსი</p>
        <p>საკმარისობა</p>
        <p>რაოდენობა</p>
      </div>
      <div className="main-content flex flex-col">
        {ingredientsData.map((item, index) => {
          return (
            <div className="flex flex-col mt-[10px]" key={index}>
              <div className="main flex flex-row">
                <div className="text w-[200px]">
                  <p className="text-[12px] text-white font-normal ml-[20px]">
                    {item.ingredient}
                  </p>
                </div>
                <div
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
                  className="status text-[11px] font-normal py-[4px] px-[2px] w-[78px] rounded-[35px] text-center ml-[36px]"
                >
                  {item.status}
                </div>
                <div className="date w-[60px] ml-[150px]">
                  <p className="text-[14px] text-white font-normal">
                    {item.date}
                  </p>
                </div>
                <div className="amount ml-[160px]">
                  <p className="text-[14px] text-white font-normal">
                    {item.amount}
                  </p>
                </div>
              </div>
              <div className="divider w-[767px] h-[1px] bg-[#E0E6ED]/40 mt-[10px]"></div>
            </div>
          );
        })}
      </div>
      <div className="add-item mt-[130px] flex flex-row items-center justify-between">
        <div
          onClick={() => setAddItemModal(true)}
          className="add w-[123px] rounded-[12px] bg-[#001519] flex flex-row items-center gap-[10px] py-[17px] justify-center cursor-pointer"
        >
          <img src={plusIcon} alt="plus icon" />
          <p className="text-[12px] text-white font-black">დამატება</p>
        </div>
        <div className="text">
          <p className="text-[14px] text-white font-black">
            *3 ინგრედიენტი
            <span className="font-normal"> საჭიროებს ყურადღებას</span>
          </p>
        </div>
      </div>
      {addItemModal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-[429px] p-[20px] rounded-[12px] bg-[#003A46] flex flex-col">
            <p className="text-[18px] text-[#F8E7F3] font-semibold">
              ინგრედიენტის დამატება
            </p>
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
              <div className="expirationDate mt-[17px]">
                <label className="text-[14px] text-[#F8E7F3] font-normal ">
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
              <div className="status mt-[17px]">
                <label className="text-[14px] text-[#F8E7F3] font-normal mt-[17px]">
                  სტატუსი
                </label>
                <input
                  type="text"
                  {...register("status")}
                  placeholder="მაგ: საკმარისია"
                  className="border border-[#001519] bg-[#001519] rounded-lg w-[387px] py-[3px] outline-none cursor-pointer mt-[5px] px-3 text-white/80 text-[14px] font-normal"
                />
                {errors.expirationDate && (
                  <p className="text-red-500 text-xs">
                    {errors.expirationDate.message}
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
                  onClick={() => setAddItemModal(false)}
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
