import loginBg from "../../assets/images/loginBg.jpg";
import logo from "../../assets/images/logo.png"

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: `url(${loginBg})` }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="bg-white w-[872px] h-[782px]  rounded-lg shadow-lg p-8  relative z-10">
        <div>
            <img src={logo} alt="" />
        </div>
        <h2 className="text-[40px] font-semibold text-textGray text-center leading-[53px]">Sign In</h2>
        <p className="text-center font-normal text-[18px] text-[#5A5C5F] mt-5">Welcome Back, Please Enter your Details to Log In.</p>
        <form  className="mx-[100px]">
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
          <button
            type="submit"
            className="w-full bg-primaryOrange text-white text-[18px] font-semibold rounded-md mt-10 py-[15px]"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
