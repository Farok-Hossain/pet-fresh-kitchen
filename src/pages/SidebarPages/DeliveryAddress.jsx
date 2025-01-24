import CommonSelectField from "@/components/common/CommonSelectField";
import { useForm } from "react-hook-form";

const DeliveryAddress = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const country = [
    { label: "Bangladesh", value: "bangladesh" },
    { label: "India", value: "india" },
  ];
  const states = [
    { label: "Dhaka", value: "dhaka" },
    { label: "Mumbai", value: "mumbai" },
  ];

  return (
    <div>
      <h3 className="text-textGray text-xl pl-5 py-4 font-medium leading-[30px]">
        Delivery Address
      </h3>
      <div className="border-[1px] w-full"></div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-container flex gap-28 space-y-5 pl-5"
        >
          <div>
            {/* Street Address */}
            <div className="flex flex-col">
              <label
                htmlFor="street address"
                className="max-w-[250px] text-textGray text-[14px] font-normal leading-[21px] mt-6 mb-[6px]"
              >
                Street Address
              </label>
              <input
                id="address"
                placeholder="1425 park"
                className="w-[936px] h-12 border-[1px] text-[#666666] focus:outline-primaryOrange rounded-xl text-[16px] px-[16px] py-[14px]"
                {...register("address")}
              />
              {errors.name && <p className="error">{errors.address.message}</p>}
            </div>

            <div className="flex mt-4 gap-[15px]">
                
              <div>
                <CommonSelectField width="w-[302px]" options={country} label="Country / Region" />
              </div>

              <div>
                <CommonSelectField width="w-[302px]" options={states} label="States" />
              </div>

                {/* Street Address */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="Zip Code"
                className=" text-textGray text-[14px] font-normal leading-[21px] mb-[6px]"
              >
                Zip Code
              </label>
              <input
                id="address"
                placeholder="1425 park"
                className=" w-full h-12 border-[1px] text-[#666666] focus:outline-primaryOrange rounded-xl text-[16px] px-[16px] py-[14px]"
                {...register("address")}
              />
              {errors.name && <p className="error">{errors.address.message}</p>}
            </div>
              
            </div>

            {/* Email Address */}
            <div className="flex gap-4 mt-4">
              <div>
                <label
                  htmlFor="email"
                  className="max-w-[250px] text-textGray text-[14px] font-normal leading-[21px]"
                >
                  Email
                </label>
                <input
                  id="email"
                  placeholder="alzarijosef@gmail.com"
                  className="w-[460px] h-12 border-[1px] text-[#666666] focus:outline-primaryOrange rounded-xl text-[16px] px-[16px] py-[14px] mt-[6px]"
                  type="email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="max-w-[250px] text-textGray text-[14px] font-normal leading-[21px] mb-[6px] mt-4"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  placeholder="+880125487"
                  className="w-[460px] h-12 border-[1px] text-[#666666] focus:outline-primaryOrange rounded-xl text-[16px] px-[16px] py-[14px] mt-[6px]"
                  type="tel"
                  {...register("phone")}
                />
                {errors.email && (
                  <p className="error">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="rounded-full bg-primaryOrange px-8 py-[14px] text-white mt-6"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeliveryAddress;
