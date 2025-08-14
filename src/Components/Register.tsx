import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface Inputs {
  email: string;
  password: string;
}
export default function Register() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/enter/login");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center mt-[145px]">
      <h2 className="mt-[147px] text-[#04AED2] text-[50px] font-normal">
        რეგისტრაცია
      </h2>
      <p className="text-[14px] text-[#003A46] font-normal">
        ან{" "}
        <span className="font-bold" onClick={() => handleLogin()}>
          გაიარე ავტორიზაცია
        </span>
      </p>
      <form onSubmit={handleSubmit(onSubmit)}></form>
    </div>
  );
}
