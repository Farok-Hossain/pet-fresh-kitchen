import { useForm } from "react-hook-form";
import { useState } from "react";
import DeliveryAddress from "./DeliveryAddress";
import CommonSelectField from "@/components/common/CommonSelectField";
import dogProfileImg from "@/assets/images/dogProfileImg.png";
import profileImg from "@/assets/images/profileImg.png";

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [image, setImage] = useState(dogProfileImg);

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const petType = [
    { label: "Dog", value: "dog" },
    { label: "Cat", value: "cat" },
  ];

  const activityLavel = [
    { label: "Small", value: "small" },
    { label: "Medium", value: "medium" },
    { label: "Large", value: "large" },
  ];

  const PetNutrition = [
    { label: "Vegetarian", value: "vegetarian" },
    { label: "Non Vegetarian", value: "non vegetarian" },
  ];

  return (
    <div className="w-full lg:px-10 xl:px-10 xl:mb-[200px] mt-[19px]">
      <div className=" mb-6">
        <div className="flex justify-start items-center">
          <div className="w-10">
            <img src={profileImg} alt="" />
          </div>
          <h3 className="text-textGray text-xl xl:pl-5 text-center xl:text-start py-4 font-medium xl:leading-[30px]">
            Account Profile
          </h3>
        </div>
        <div className="border-[1px] w-full"></div>

        <div className=" xl:justify-start">
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className=" xl:pl-5 w-full">
              <div className="flex xl:flex-row flex-col-reverse xl:gap-[250px] space-y-5 ">
                <div className=" grid md:grid-cols-2 xl:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-4 mb-5">
                  {/* Full Name */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="xl:max-w-[250px] text-textGray text-[14px] font-normal xl:leading-[21px] xl:mt-6 mt-4 mb-[6px]"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      placeholder="Full name here"
                      className="xl:w-[512px]  w-full h-12 border-[1px] text-[#666666] outline-none rounded-md xl:text-[16px] text-[14px] px-[16px] py-[14px]"
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="error">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="xl:max-w-[250px] text-textGray text-[14px] font-normal leading-[21px] mb-[6px]"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      placeholder="alzarijosef@gmail.com"
                      className="xl:w-[512px] h-12 border-[1px] text-[#666666] outline-none  rounded-md text-[16px] px-[16px] py-[14px]"
                      type="email"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="error">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Pet Name and Date */}
                  <div className="flex xl:flex-row flex-col gap-4">
                    <div className="flex flex-col">
                      <label
                        htmlFor="petName"
                        className="xl:max-w-[100px] text-textGray text-[14px] font-normal leading-[21px] mb-[6px]"
                      >
                        Pet Name
                      </label>
                      <input
                        id="petName"
                        placeholder="Tome"
                        className="xl:w-[248px] h-12 border-[1px] text-[#666666] outline-none  rounded-md text-[16px] px-[16px] py-[14px]"
                        type="text"
                        {...register("petName")}
                      />
                      {errors.petName && (
                        <p className="error">{errors.petName.message}</p>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label
                        htmlFor="date"
                        className="xl:max-w-[100px] text-textGray text-[14px] font-normal leading-[21px] mb-[6px]"
                      >
                        Pet Birth
                      </label>
                      <input
                        id="date"
                        className="xl:w-[248px] h-12 border-[1px] text-[#666666] outline-none rounded-md text-[16px] px-[16px] py-[14px]"
                        type="date"
                        {...register("date")}
                      />
                      {errors.date && (
                        <p className="error">{errors.date.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex xl:flex-row flex-col gap-[15px]">
                    <div>
                      <CommonSelectField
                        width="xl:w-[250px]"
                        options={petType}
                        label="Pet Type"
                      />
                    </div>

                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="Zip Code"
                        className=" w-[100px] text-textGray text-[14px] font-normal xl:leading-[21px] xl:mb-[6px] mb-1"
                      >
                        Pet Weight
                      </label>
                      <input
                        id="address"
                        placeholder=""
                        className=" xl:w-[250px] h-12 border-[1px] text-[#666666] outline-none rounded-md text-[16px] px-[16px] py-3"
                        {...register("address")}
                      />
                      {errors.name && (
                        <p className="error">{errors.address.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex xl:flex-row flex-col gap-[15px]">
                    <div>
                      <CommonSelectField
                        width="xl:w-[250px]"
                        options={activityLavel}
                        label="Activity Level"
                      />
                    </div>

                    <div className="">
                      <CommonSelectField
                        width="xl:w-[250px]"
                        options={PetNutrition}
                        label="Pet Nutrition"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="password"
                      className="xl:max-w-[250px] text-textGray text-[14px] font-normal leading-[21px] mb-[6px]"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      placeholder="********"
                      className="xl:w-[512px] h-12 border-[1px] text-[#666666] outline-none rounded-md text-[16px] px-[16px] py-[14px] mb-6"
                      type="password"
                      {...register("password")}
                    />
                    {errors.password && (
                      <p className="error">{errors.password.message}</p>
                    )}
                  </div>
                </div>

                {/* Profile Image Upload */}
                <div className="flex w-full flex-col justify-center items-center ">
                  <div className="xl:mt-14 flex justify-center xl:w-56 xl:h-56 w-full">
                    <img
                      src={image}
                      alt="Profile"
                      className=" xl:w-56 xl:h-56 object-cover rounded-full"
                    />
                  </div>

                  <label className="bg-white text-primaryOrange rounded-full text-center border-[2px] border-[#F7830D] mt-5 px-8 py-[14px] font-semibold cursor-pointer">
                    Choose Image
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center xl:justify-start">
                <button
                  type="submit"
                  className="rounded-full  bg-primaryOrange px-8 py-[14px] text-white"
                >
                  Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <DeliveryAddress />
    </div>
  );
};

export default Profile;
