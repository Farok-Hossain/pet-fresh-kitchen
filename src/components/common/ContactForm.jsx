import { useForm } from "react-hook-form";
import contactImg from "@/assets/images/contactImg.png";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      {/* contact form  */}
      <div className="flex flex-col xl:flex-row lg:flex-row lg:pb-5 xl:gap-[50px] xlg:gap-10 lg:gap-8 items-center justify-between xl:mt-[60px]  mt-[30px]">
        <div className="w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-container space-y-5"
          >
            {/* Name Field */}
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-[#041F29] xl:text-[28px] text-[16px] font-medium xl:leading-9 xl:mb-3 mb-2"
              >
                Name
              </label>
              <input
                id="name"
                placeholder="Alzari Josef"
                className="border-[1px] text-[#041F29] focus:outline-none rounded-xl xl:text-2xl text-[16px] xl:px-[30px] px-4 xl:py-[17px] py-2"
                {...register("name")}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label
                className="text-[#041F29] xl:text-[28px] text-[16px] font-medium xl:leading-9 xl:mb-3 mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                placeholder="alzarijosef@gmail.com"
                className="border-[1px] text-[#041F29] focus:outline-none rounded-xl xl:text-2xl text-[16px] xl:px-[30px] px-4 xl:py-[17px] py-2"
                type="email"
                {...register("email")}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            {/* Phone Number Field */}
            <div className="flex flex-col">
              <label
                className="text-[#041F29] xl:text-[28px] text-[16px] font-medium xl:leading-9 xl:mb-3 mb-2"
                htmlFor="phone"
              >
                Number
              </label>
              <input
                id="phone"
                placeholder="+880151255674"
                className="border-[1px] text-[#041F29] focus:outline-none rounded-xl xl:text-2xl text-[16px] xl:px-[30px] px-4 xl:py-[17px] py-2"
                type="tel"
                {...register("phone")}
              />
              {errors.phone && <p className="error">{errors.phone.message}</p>}
            </div>

            {/* Text Area Field */}
            <div className="flex flex-col">
              <label
                className="text-[#041F29] xl:text-[28px] text-[16px] font-medium xl:leading-9 xl:mb-3 mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                className="border-[1px] text-[#041F29] xl:px-[30px] pl-4 pr-[152px] xl:py-[17px] py-2 focus:outline-none  rounded-xl xl:text-2xl text-[16px] xl:h-[198px]"
                {...register("message")}
              />
              {errors.message && (
                <p className="error">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button className="bg-primaryOrange xl:text-2xl text-[16px] w-full rounded-md xl:py-[17px] py-2 text-white flex justify-center mt-3 ">
              Sent
            </button>
          </form>
        </div>

        {/* img  */}
        <div className="xl:min-w-[530px] xl:h-[761px] mt-5 xl:mt-0">
          <img className="" src={contactImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
