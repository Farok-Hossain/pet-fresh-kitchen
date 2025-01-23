import { useForm } from "react-hook-form";
import loginBg from "../../assets/images/loginBg.jpg";
import logo from "../../assets/images/logo.png";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { useState } from "react";
import ShowEyeIcon from "@/assets/Icons/ShowEyeIcon";
import EyeCloseIcon from "@/assets/Icons/EyeCloseIcon";

const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

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
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev)
  }


  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="bg-white min-w-[872px] pt-[50px] pb-[48px] rounded-lg shadow-lg px-[100px]  relative z-10">
        <div className="flex justify-center ">
          <img src={logo} alt="" />
        </div>
        <h2 className="text-[40px] font-semibold text-textGray text-center leading-[53px]">
          Sign Up
        </h2>
        <p className="text-center font-normal text-[18px] text-[#5A5C5F] mt-5">
          Lets have these fields
        </p>
        <form className=" mt-[50px]">
          <div>
            <label
              htmlFor="name"
              className="text-textGray text-[18px] font-medium leading-6 mb-3"
            >
              First Name
            </label>
            <input
              type="name"
              id="name"
              placeholder="First Name "
              className="w-full px-6 py-[11px] border rounded-md pl-6 mt-3 focus:outline-none"
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="email"
              className="text-textGray text-[18px] font-medium leading-6 mb-3"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="abcd@gmail.com"
              className="w-full px-6 py-[11px] border rounded-md pl-6 mt-3 focus:outline-none"
            />
          </div>

          {/* Pet Name and Date */}
          <div className="flex gap-[26px] mt-5 ">
            <div className="w-full flex flex-col">
              <label
                htmlFor="petName"
                className="text-textGray text-[18px] font-medium leading-6 mb-3"
              >
                Pet Name
              </label>
              <input
                id="petName"
                placeholder="Tome"
                className=" px-6 py-[11px] border-[1px] text-[#666666] focus:outline-none rounded-md text-[16px] "
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
                className="text-textGray text-[18px] font-medium leading-6 mb-3"
              >
                Date
              </label>
              <input
                id="date"
                className=" px-6 py-[11px] border-[1px] text-[#666666] focus:outline-none rounded-md text-[16px] "
                type="date"
                {...register("date")}
              />
              {errors.date && <p className="error">{errors.date.message}</p>}
            </div>
          </div>

          {/* Password */}
          <div className="flex gap-[26px] mt-5">
            <div className="w-full flex flex-col">
              <label
                htmlFor="password"
                className="text-textGray text-[18px] font-medium leading-6 mb-3"
              >
                Password
              </label>

              <div className="flex justify-between items-center border rounded-md border-gray-300 overflow-hidden">
              <input
                id="password"
                placeholder="********"
                className="pl-6  py-[11px]  text-[#666666] focus:outline-none  text-[16px] "
                type="password"
                {...register("password")}
              />
              <button type="button" 
                onClick={togglePasswordVisibility}
                className=" text-gray-500 pr-6"
              >{showPassword? (
                <ShowEyeIcon className="" />
              ): (
                <EyeCloseIcon />
              )}</button>
              </div>
              {errors.password && (
                <p className="error">{errors.password.message}</p>
              )}
            </div>

            {/* confirm password  */}
            <div className="w-full flex flex-col">
              <label
                htmlFor="password"
                className="text-textGray text-[18px] font-medium leading-6 mb-3"
              >
                Confirm Password
              </label>
              
              <div className="flex justify-between items-center border-[1px] rounded-md border-gray-300 overflow-hidden">
              <input
                id="password"
                placeholder="********"
                className="pl-6  py-[11px]  text-[#666666] focus:outline-none  text-[16px] "
                type="password"
                {...register("password")}
              />
              <button type="button" 
                onClick={toggleConfirmPasswordVisibility}
                className=" text-gray-500 pr-6"
              >{showConfirmPassword? (
                <ShowEyeIcon className="" />
              ): (
                <EyeCloseIcon />
              )}</button>
              </div>

              {errors.password && (
                <p className="error">{errors.password.message}</p>
              )}
            </div>
          </div>

          <div className="flex gap-[11px] items-center mt-[10px]">
            <Checkbox />
            <h3 className="text-[#5A5C5F] text-[16px]">
              I hereby confirm and accept the{" "}
              <span className="text-[#037FFF]">Terms and Conditions</span> and{" "}
              <span className="text-[#037FFF]">Privacy Policy</span>.{" "}
            </h3>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className=" bg-primaryOrange px-[100px] text-white text-[18px] font-semibold rounded-md mt-10 py-[18px]"
            >
              Sign Up
            </button>
          </div>

          <h3 className="text-xl text-center mt-5 text-[#5A5C5F]">
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
