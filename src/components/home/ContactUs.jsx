import { useForm } from "react-hook-form";
import { CommonButton } from "../common/CommonButton";
import contactImg from "../../assets/images/contactImg.png";
import CommonWrapper from "../common/CommonWrapper";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
   <CommonWrapper version="lg">
     <div className="container">
      <div>
        <div className="text-center">
          <h3 className="text-[#212B36] text-5xl font-semibold leading-[70px]">
            Contact Us
          </h3>
          <p className="text-xl leading-[30px] max-w-[960px] mx-auto">
            Get in touch with us for any questions or concerns about our dog
            food products. We&apos;re here to help you provide the best for your
            pet.
          </p>
        </div>
      </div>

      {/* contact form  */}
      <div className="flex items-center justify-between mt-[60px]">
        <div className="min-w-[693px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-container space-y-5"
          >
            {/* Name Field */}
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-[#041F29] text-[28px] font-medium leading-9 mb-3"
              >
                Name
              </label>
              <input
                id="name"
                placeholder="Alzari Josef"
                className="border-[1px] text-[#041F29] focus:outline-none rounded-xl text-2xl px-[30px] py-[17px]"
                {...register("name")}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label
                className="text-[#041F29] text-[28px] mb-3 font-medium leading-9"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                placeholder="alzarijosef@gmail.com"
                className="border-[1px] text-[#041F29] focus:outline-none rounded-xl text-2xl px-[30px] py-[17px]"
                type="email"
                {...register("email")}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            {/* Phone Number Field */}
            <div className="flex flex-col">
              <label
                className="text-[#041F29] text-[28px] mb-3 font-medium leading-9"
                htmlFor="phone"
              >
                Number
              </label>
              <input
                id="phone"
                placeholder="+880151255674"
                className="border-[1px] text-[#041F29] focus:outline-none rounded-xl text-2xl px-[30px] py-[17px]"
                type="tel"
                {...register("phone")}
              />
              {errors.phone && <p className="error">{errors.phone.message}</p>}
            </div>

            {/* Text Area Field */}
            <div className="flex flex-col">
              <label
                className="text-[#041F29] text-[28px] mb-3 font-medium leading-9"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                className="border-[1px] text-[#041F29] px-[30px] py-[17px] focus:outline-none  rounded-xl text-2xl h-[198px]"
                {...register("message")}
              />
              {errors.message && (
                <p className="error">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <CommonButton
              className="w-full rounded-md py-[17px] text-white mt-3"
              text="Sent"
            ></CommonButton>
          </form>
        </div>

        {/* img  */}
        <div className="min-w-[530px] h-[761px]">
          <img className="" src={contactImg} alt="" />
        </div>
      </div>
    </div>
   </CommonWrapper>
  );
};

export default App;
