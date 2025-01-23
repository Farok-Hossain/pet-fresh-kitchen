import { Link } from "react-router-dom";
import loginBg from "../../assets/images/loginBg.jpg";
import logo from "../../assets/images/logo.png"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react";
import ShowEyeIcon from "@/assets/Icons/ShowEyeIcon";
import EyeCloseIcon from "@/assets/Icons/EyeCloseIcon";


const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false)
        const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
      }
    
      const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prev) => !prev)
      }
  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: `url(${loginBg})` }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="bg-white min-w-[872px]  pt-[50px] pb-[74px]  rounded-lg shadow-lg px-[100px]  relative z-10">
        <div className="flex justify-center ">
            <img src={logo} alt="" />
        </div>
        <h2 className="text-[40px] font-semibold text-textGray text-center leading-[53px]">Sign In</h2>
        <p className="text-center font-normal text-[18px] text-[#5A5C5F] mt-5">Welcome Back, Please Enter your Details to Log In.</p>
        <form  className=" mt-[50px]">
          <div>

            <label htmlFor="email" className="text-textGray text-[18px] font-medium leading-6 mb-3">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="abcd@gmail.com"
              className="w-full px-6 py-[11px] border rounded-md pl-6 mt-3 focus:outline-none"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="password" className="text-textGray text-[18px] font-medium leading-6 mb-3">Password</label>
            <div className="flex justify-between items-center border rounded-md  overflow-hidden">
            <input
              type="password"
              id="password"
              placeholder="************"
              className="w-full px-6 py-[11px] focus:outline-none"
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
          </div>

          <div className="flex justify-between">
          <div className="flex gap-[11px] items-center mt-[10px]">
          <Checkbox  />
          <h3 className="text-[#5A5C5F]">Remember me</h3>
          </div>
          <div className="mt-[10px]">
            <h3 className="text-[16px] text-[#5A5C5F]">Forgot password ?</h3>
          </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primaryOrange text-white text-[18px] font-semibold rounded-md mt-10 py-[15px]"
          >
            Sign In
          </button>

          <h3 className="text-xl text-center mt-10 text-[#5A5C5F]">Don’t have an account? <Link to="/signup"><span className="text-primaryOrange">Sign Up</span></Link></h3>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
