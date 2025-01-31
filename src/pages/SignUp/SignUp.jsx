import { useForm } from "react-hook-form";
import loginBg from "@/assets/images/loginBg.jpg";
import logo from "@/assets/images/logo.png";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { useState } from "react";
import ShowEyeIcon from "@/assets/Icons/ShowEyeIcon";
import EyeCloseIcon from "@/assets/Icons/EyeCloseIcon";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div
      className="h-screen px-5 flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="bg-white xl:min-w-[872px] xlg:min-w-[700px] lg:min-w-[550px] px-5  xl:pt-[50px] pt-3 xl:pb-10 pb-3  rounded-lg shadow-lg xl:px-[100px]  relative z-10">
        <div className="flex justify-center px-[120px] ">
          <img src={logo} alt="" />
        </div>
        <h2 className="xl:text-[40px] text-2xl font-semibold text-textGray text-center xl:leading-[53px]">
          Sign Up
        </h2>
        <p className="text-center font-normal xl:text-[18px] text-[15px] text-[#5A5C5F] xl:mt-5 mt-1">
          Lets have these fields
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="xl:mt-[50px] mt-2">
          <div>
            <label
              htmlFor="name"
              className="text-textGray xl:text-[18px] font-medium leading-6 mb-3"
            >
              First Name
            </label>
            <input
              type="name"
              id="name"
              placeholder="First Name "
              className="w-full xl:px-6 text-[14px]  xl:py-[11px] py-[6px] border rounded-md xl:pl-6 pl-3 xl:mt-3 mt-1 focus:outline-none"
              {...register("name")}
            />
          </div>

          <div className="xl:mt-5 mt-2">
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

          {/* Pet Name and Date */}
          <div className="flex xl:gap-[26px] gap-2 xl:mt-5 mt-2 ">
            <div className="w-full flex flex-col">
              <label
                htmlFor="petName"
                className="text-textGray xl:text-[18px] font-medium leading-6 xl:mb-3"
              >
                Pet Name
              </label>
              <input
                id="petName"
                placeholder="Tome"
                className=" w-full xl:px-6  xl:py-[11px] py-[6px] border rounded-md xl:pl-6 pl-3 xl:mt-3 mt-1 focus:outline-none "
                type="text"
                {...register("petName")}
              />
              {errors.petName && (
                <p className="error">{errors.petName.message}</p>
              )}
            </div>

            <div className="w-full flex flex-col">
              <label
                htmlFor="date"
                className="text-textGray xl:text-[18px] font-medium leading-6 xl:mb-3"
              >
                Date
              </label>
              <input
                id="date"
                className=" w-full xl:px-6 px-3  xl:py-[11px] py-[6px] border rounded-md xl:pl-6 pl-3 xl:mt-3 mt-1 focus:outline-none "
                type="date"
                {...register("date")}
              />
              {errors.date && <p className="error">{errors.date.message}</p>}
            </div>
          </div>

          {/* Password */}
          <div className="flex xl:flex-row flex-col xl:gap-[26px] xl:mt-5 mt-2">
            <div className="w-full flex flex-col">
              <label
                htmlFor="password"
                className="text-textGray xl:text-[18px] font-medium leading-6 xl:mb-3 mb-1"
              >
                Password
              </label>

              <div className="flex justify-between items-center border rounded-md border-gray-300 overflow-hidden">
                <input
                  id="password"
                  placeholder="********"
                  className="xl:pl-6 pl-3  xl:py-[11px] pt-[10px] pb-[2px]   text-[#666666] focus:outline-none  xl:text-[16px] "
                  type={showPassword ? "text" : "password"} // Toggle input type
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="text-gray-500 xl:pr-6 pr-3"
                >
                  {showPassword ? <EyeCloseIcon /> : <ShowEyeIcon />}
                </button>
              </div>
              {errors.password && (
                <p className="error">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="w-full flex flex-col mt-2">
              <label
                htmlFor="confirmPassword"
                className="text-textGray xl:text-[18px] font-medium leading-6 xl:mb-3 mb-1"
              >
                Confirm Password
              </label>

              <div className="flex justify-between items-center border-[1px] rounded-md border-gray-300 overflow-hidden">
                <input
                  id="confirmPassword"
                  placeholder="********"
                  className="xl:pl-6 pl-3  xl:py-[11px] pt-[10px] pb-[2px]  text-[#666666] focus:outline-none  xl:text-[16px] "
                  type={showConfirmPassword ? "text" : "password"} // Toggle input type
                  {...register("confirmPassword")}
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="text-gray-500 xl:pr-6 pr-3"
                >
                  {showConfirmPassword ? <EyeCloseIcon /> : <ShowEyeIcon />}
                </button>
              </div>

              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          <div className="flex gap-[11px] items-center mt-[10px]">
            <Checkbox />
            <h3 className="text-[#5A5C5F] xl:text-[16px] text-[14px]">
              I hereby confirm and accept the{" "}
              <span className="text-[#037FFF]">Terms and Conditions</span> and{" "}
              <span className="text-[#037FFF]">Privacy Policy</span>.{" "}
            </h3>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className=" bg-primaryOrange xl:px-[100px] text-white xl:text-[18px] font-semibold rounded-md xl:mt-10 mt-2 xl:py-[11px] py-[6px] px-7"
            >
              Sign Up
            </button>
          </div>

          <h3 className="xl:text-xl text-center xl:mt-5 mt-1 text-[#5A5C5F]">
            Already have an account?{" "}
            <Link to="/signin">
              <span className="text-primaryOrange">Log In</span>
            </Link>
          </h3>
        </form>
      </div>
    </div>
  );
};

export default SignUp;