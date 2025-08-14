import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useRoleContext } from "../Context/RoleContext";
import { useState } from "react";

interface Inputs {
  email: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const { role } = useRoleContext();
  const schema = yup
    .object({
      email: yup
        .string()
        .required("ელ-ფოსტის ველი სავალდებულოა")
        .email("ელ-ფოსტა უნდა იყოს ვალიდური"),
      password: yup.string().required("პაროლის ველი სავალდებულოა"),
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
    let users = [];
    try {
      const stored = localStorage.getItem("users");
      users = stored ? JSON.parse(stored) : [];
      if (!Array.isArray(users)) users = [];
    } catch {
      users = [];
    }
    const foundUser = users.find(
      (user: { email: string; password: string }) =>
        user.email === data.email && user.password === data.password
    );
    if (foundUser) {
      if (role === "მენეჯერი") {
        navigate("/enter/manager");
      } else if (role === "ადმინისტრატორი") {
        navigate("/enter/admin");
      } else if (role === "დისტრიბუტორი") {
        navigate("/enter/distributor");
      } else if (role === "გაყიდვების გუნდი") {
        navigate("/enter/sales-team");
      }
    } else {
      setError("Email Or PassWord Is Incorrect");
    }
  };
  return (
    <div className="flex flex-col items-center mt-[145px]">
      <h2 className="text-[40px] text-[#04AED2] font-normal">შესვლა</h2>
      <p className="text-[14px] text-[#003A46] font-normal">
        ან{" "}
        <span
          onClick={() => navigate("/enter/register")}
          className="font-bold cursor-pointer"
        >
          დარეგისტრირდი
        </span>
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center mt-[41px]"
      >
        <div className="email flex flex-col">
          <label className="text-[14px] text-[#003A46] font-normal">
            ელ-ფოსტა
          </label>
          <input
            type="email"
            {...register("email")}
            className="w-[400px] h-[50px] border border-[#04AED2] rounded-[5px] px-3 mt-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="password flex flex-col mt-[17px]">
          <label className="text-[14px] text-[#003A46] font-normal">
            პაროლი
          </label>
          <input
            type="password"
            {...register("password")}
            className="w-[400px] h-[50px] border border-[#04AED2] rounded-[5px] px-3 mt-2"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <button
          type="submit"
          className="w-[111px] py-[12px] text-white font-black text-[14px] bg-[#04AED2] rounded-[8px] mt-[57px] cursor-pointer hover:bg-[#028B9A] transition duration-300"
        >
          შესვლა
        </button>
      </form>
    </div>
  );
}
