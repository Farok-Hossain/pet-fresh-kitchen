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
        { label: "Bangladesh", value: "bangladesh" },
        { label: "India", value: "india" },
      ];
      const states = [
        { label: "Dhaka", value: "dhaka" },
        { label: "Mumbai", value: "mumbai" },
      ];
    return (
        <div>
            <div className=" ">
        <h3 className="text-textGray pl-6 text-xl font-medium leading-[30px] my-4">
          Billing Information
        </h3>
        <div className="border-[1px] text-[#E5E5E5]"></div>
        <div className="pl-6 mt-6">
          <form className=" mt-[50px] space-y-4">
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
                className="w-full px-4 py-[14px] border border-[#E6E6E6] rounded-md pl-6 mt-[6px] focus:outline-none"
              />
            </div>

            <div className="flex gap-4 w-full">
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
                  className=" w-full px-4 py-[14px] border border-[#E6E6E6] rounded-md pl-6 mt-[6px] focus:outline-none"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="number"
                  className="text-textGray text-[14px] leading-[21px]"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  id="number"
                  placeholder="+88015854557"
                  className="w-full px-4 py-[14px] border border-[#E6E6E6] rounded-md pl-6 mt-[6px] focus:outline-none"
                />
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
                className="w-full px-4 py-[14px] border border-[#E6E6E6] rounded-md pl-6 mt-[6px] focus:outline-none"
              />
            </div>

            <div className="flex w-full gap-4">
              <div className="w-full">
                <CommonSelectField options={country} label="Country / Region" />
              </div>
              <div className="w-full">
                <div className="flex w-full gap-4">
                  <CommonSelectField width="w-[176px]" options={states} label="States" />
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
                      className="h-12 border-[1px] text-[#666666] focus:outline-primaryOrange rounded-xl text-[16px] px-[16px] py-[14px]"
                      {...register("address")}
                    />
                    {errors.name && (
                      <p className="error">{errors.address.message}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            
          </form>
          <div className="flex gap-[6px] mt-5 mb-10">
                <Checkbox />
                <h4 className="text-[14px] leading-[21px] text-[#4D4D4D] ">Ship to a different address</h4>
            </div>
            <div className="border-[1px] text-[#E5E5E5]"></div>
            <div>
                <h3 className="text-2xl font-medium leading-[21px] mt-5">Additional Info</h3>
            </div>
            <h3 className="text-[14px] leading-[21px] text-[#1A1A1A] mt-5 mb-2">Order Notes (Optional)</h3>
            <div className="border-[1px] text-[#E5E5E5] rounded-md">
                <h5 className="text-[16px] pt-[14px] pl-[16px] pr-[465px] pb-[65px] text-[#999] leading-[21px] ">Notes about your order, special notes for delivery</h5>
            </div>
        </div>
      </div>
        </div>
    );
};

export default BillingInformation;