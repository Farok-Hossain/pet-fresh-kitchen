import { useForm } from "react-hook-form";
import CommonSelectField from "../common/CommonSelectField";
import { Checkbox } from "../ui/checkbox";

const BillingInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const country = [
    { label: "America", value: "america" },
    { label: "India", value: "india" },
  ];
  const states = [
    { label: "Washington, D.C.", value: "washington, d.c." },
    { label: "Mumbai", value: "mumbai" },
  ];
  return (
    <div className=" max-w-[984px] w-full">
      <h3 className="text-textGray xl:pl-6 text-xl text-center xl:text-start font-medium xl:leading-[30px] my-4">
        Billing Information
      </h3>
      <div className="border-[1px] text-[#E5E5E5]"></div>
      <div className="xl:pl-6 xl:mt-6 mt-3">
        <form
          className=" xl:mt-[50px] space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label
              htmlFor="name"
              className="text-textGray text-[14px] leading-[21px]"
            >
              Full Name
            </label>
            <input
              type="name"
              id="name"
              placeholder="Full name here"
              className="w-full xl:py-[14px] py-2 border border-[#E6E6E6] text-[14px] rounded-md pl-6 mt-[6px] focus:outline-none"
              {...register("name", { required: true })}
            />
            {errors.date && (
              <span className="text-red-600">Name is required</span>
            )}
          </div>

          <div className="flex xl:flex-row flex-col gap-4 w-full">
            <div className="w-full">
              <label
                htmlFor="email"
                className="text-textGray text-[14px] leading-[21px]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="abcd@gmail.com"
                className=" w-full px-4 xl:py-[14px] py-2 text-[14px] border border-[#E6E6E6] rounded-md pl-6 mt-[6px] focus:outline-none"
                {...register("email", { required: true })}
              />
              {errors.date && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="w-full">
              <label
                htmlFor="number"
                className="text-textGray text-[14px] leading-[21px]"
              >
                Phone Number
              </label>
              <input
                id="phone"
                placeholder="+88015854557"
                className="w-full px-4 xl:py-[14px] py-2 text-[14px] border border-[#E6E6E6] rounded-md pl-6 mt-[6px] focus:outline-none"
                type="tel"
                {...register("phone", { required: true })}
              />
              {errors.date && (
                <span className="text-red-600">Phone Number is required</span>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="address"
              className="text-textGray text-[14px] leading-[21px]"
            >
              Street Address
            </label>
            <input
              type="address"
              id="address"
              placeholder="here...."
              className="w-full px-4 xl:py-[14px] py-2 text-[14px] border border-[#E6E6E6] rounded-md pl-6 mt-[6px] focus:outline-none"
              {...register("address", { required: true })}
            />
            {errors.date && (
              <span className="text-red-600">Strees address is required</span>
            )}
          </div>

          <div className="flex flex-col xl:flex-row w-full gap-4">
            <div className="w-full">
              <CommonSelectField options={country} label="Country / Region" />
            </div>
            <div className="w-full">
              <div className="flex flex-col xl:flex-row w-full gap-4">
                <CommonSelectField
                  width="xl:w-[176px]"
                  options={states}
                  label="States"
                />
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="Zip Code"
                    className=" text-textGray text-[14px] font-normal leading-[21px] mb-[6px]"
                  >
                    Zip Code
                  </label>
                  <input
                    id="zip code"
                    placeholder="1425 park"
                    className="xl:h-12 border-[1px] text-[#666666] text-[14px] outline-none rounded-md px-[16px] xl:py-[14px] py-2"
                    {...register("zip code", { required: true })}
                  />
                  {errors.date && (
                    <span className="text-red-600">Zip code is required</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-[6px] mt-5 mb-10">
            <Checkbox />
            <h4 className="text-[14px] leading-[21px] text-[#4D4D4D] ">
              Ship to a different address
            </h4>
          </div>
          <div className="border-[1px] text-[#E5E5E5]"></div>
          <div>
            <h3 className="text-xl text-center xl:text-start font-medium leading-[21px] mt-5">
              Additional Info
            </h3>
          </div>
          <h3 className="text-[14px] leading-[21px] text-[#1A1A1A] mt-5 mb-2">
            Order Notes (Optional)
          </h3>
          <div className=" text-[#E5E5E5] rounded-md ">
            <textarea
              name=""
              rows="5"
              placeholder="Notes about your order, special notes for delivery"
              id=""
              className=" pl-4 pt-[14px] text-textGray outline-none rounded-md border w-full"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BillingInformation;
