import { Link } from "react-router-dom";
import loginBg from "../../assets/images/loginBg.jpg";
import logo from "../../assets/images/logo.png";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import ShowEyeIcon from "@/assets/Icons/ShowEyeIcon";
import EyeCloseIcon from "@/assets/Icons/EyeCloseIcon";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      className="h-screen px-5 flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="bg-white xl:min-w-[872px] xlg:min-w-[700px] lg:min-w-[550px] md:min-w-[500px] px-5  xl:pt-[50px] pt-3 xl:pb-[74px] pb-4  rounded-lg shadow-lg xl:px-[100px]  relative z-10">
        <div className="flex justify-center px-[120px]">
          <img src={logo} alt="" />
        </div>
        <h2 className="xl:text-[40px] text-2xl font-semibold text-textGray text-center xl:leading-[53px]">
          Sign In
        </h2>
        <p className="text-center font-normal xl:text-[18px] text-[15px] text-[#5A5C5F] xl:mt-5 mt-1">
          Welcome Back, Please Enter your Details to Log In.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="xl:mt-[50px] mt-2">
          <div>
            <label
              htmlFor="email"
              className="text-textGray xl:text-[18px] font-medium leading-6 mb-3"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="abcd@gmail.com"
              className="w-full xl:px-6  xl:py-[11px] py-[6px] border rounded-md xl:pl-6 pl-3 xl:mt-3 mt-1 focus:outline-none"
              {...register("email")}
            />
          </div>

          <div className="xl:mt-5 pt-2">
            <label
              htmlFor="password"
              className="text-textGray xl:text-[18px] font-medium leading-6 mb-3"
            >
              Password
            </label>
            <div className="flex justify-between items-center border rounded-md overflow-hidden mt-1">
              <input
                type={showPassword ? "text" : "password"} // Toggle input type
                id="password"
                placeholder="************"
                className="w-full xl:px-6 px-3 xl:py-[11px] py-[6px] focus:outline-none"
                {...register("password")}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="text-gray-500 xl:pr-6 pr-3"
              >
                {showPassword ?   <EyeCloseIcon /> : <ShowEyeIcon />}
              </button>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-[11px] items-center mt-[10px]">
              <Checkbox />
              <h3 className="text-[#5A5C5F]">Remember me</h3>
            </div>
            <div className="mt-[10px]">
              <h3 className="text-[16px] text-[#5A5C5F]">Forgot password ?</h3>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primaryOrange text-white xl:text-[18px] font-semibold rounded-md xl:mt-10 mt-2 xl:py-[11px] py-[6px]"
          >
            Sign In
          </button>

          <h3 className="xl:text-xl text-center xl:mt-10 mt-2 text-[#5A5C5F]">
            Don’t have an account?{" "}
            <Link to="/signup">
              <span className="text-primaryOrange">Sign Up</span>
            </Link>
          </h3>
        </form>
      </div>
    </div>
  );
};

export default SignIn;