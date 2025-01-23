import loginBg from "../../assets/images/loginBg.jpg";
import logo from "../../assets/images/logo.png"
import { Checkbox } from "@/components/ui/checkbox"


const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: `url(${loginBg})` }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="bg-white w-[872px] h-[782px]  rounded-lg shadow-lg p-8  relative z-10">
        <div className="flex justify-center mt-[18px]">
            <img src={logo} alt="" />
        </div>
        <h2 className="text-[40px] font-semibold text-textGray text-center leading-[53px]">Sign In</h2>
        <p className="text-center font-normal text-[18px] text-[#5A5C5F] mt-5">Welcome Back, Please Enter your Details to Log In.</p>
        <form  className="mx-[100px] mt-[50px]">
          <div>

            <label htmlFor="email" className="text-textGray text-[18px] font-medium leading-6 mb-3">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="abcd@gmail.com"
              className="w-full h-[52px] border rounded-md pl-6 mt-3"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="password" className="text-textGray text-[18px] font-medium leading-6 mb-3">Password</label>
            <input
              type="password"
              id="password"
              placeholder="************"
              className="w-full h-[52px] border rounded-md pl-6 mt-3"
            />
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

          <h3 className="text-xl text-center mt-10 mb-[74px] text-[#5A5C5F]">Don’t have an account? <span className="text-primaryOrange">Sign Up</span></h3>
        </form>
      </div>
    </div>
  );
};

export default Login;
