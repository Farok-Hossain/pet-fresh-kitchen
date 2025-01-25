import { useForm } from "react-hook-form";
import contactImg from "../../assets/images/contactImg.png";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };
    return (
        <div>
              {/* contact form  */}
      <div className="flex flex-col xl:flex-row items-center justify-between mt-[60px]">
        <div className="xl:min-w-[693px]">
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
                className="border-[1px] text-[#041F29] px-[30px] py-[17px] focus:outline-none  rounded-xl text-2xl xl:h-[198px]"
                {...register("message")}
              />
              {errors.message && (
                <p className="error">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button className="bg-primaryOrange w-full rounded-md py-[17px] text-white flex justify-center mt-3 ">Sent</button>

          </form>
        </div>

        {/* img  */}
        <div className="xl:min-w-[530px] xl:h-[761px]">
          <img className="" src={contactImg} alt="" />
        </div>
      </div>
        </div>
    );
};

export default ContactForm;