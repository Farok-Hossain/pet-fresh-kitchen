import { useForm } from "react-hook-form";
import { useState } from "react";
import profileImg from "../../assets/images/profileImg.png";
import DeliveryAddress from "./DeliveryAddress";

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [image, setImage] = useState(profileImg);

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

  return (
    <div className="w-full lg:px-[160px] xl:px-10 xl:mb-[200px] mt-[19px]">
      <div className="mb-6">
        <h3 className="text-textGray text-xl xl:pl-5 text-center xl:text-start py-4 font-medium xl:leading-[30px]">
          Account Profile
        </h3>
        <div className="border-[1px] w-full"></div>

        <div className="flex justify-center xl:justify-start">
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="form-container xl:pl-5"
            >
              <div className="flex xl:flex-row flex-col-reverse xl:gap-28 space-y-5 ">
                <div>
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
                      className="xl:w-[512px] lg:w-[800px] w-full h-12 border-[1px] text-[#666666] focus:outline-primaryOrange rounded-xl xl:text-[16px] text-[14px] px-[16px] py-[14px]"
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
                      className="xl:max-w-[250px] text-textGray text-[14px] font-normal leading-[21px] mb-[6px] mt-4"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      placeholder="alzarijosef@gmail.com"
                      className="xl:w-[512px] h-12 border-[1px] text-[#666666] focus:outline-primaryOrange rounded-xl text-[16px] px-[16px] py-[14px]"
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
                        className="xl:max-w-[100px] text-textGray text-[14px] font-normal leading-[21px] mb-[6px] mt-4"
                      >
                        Pet Name
                      </label>
                      <input
                        id="petName"
                        placeholder="Tome"
                        className="xl:w-[248px] h-12 border-[1px] text-[#666666] focus:outline-primaryOrange rounded-xl text-[16px] px-[16px] py-[14px]"
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
                        className="xl:max-w-[100px] text-textGray text-[14px] font-normal leading-[21px] mb-[6px] mt-4"
                      >
                        Date
                      </label>
                      <input
                        id="date"
                        className="xl:w-[248px] h-12 border-[1px] text-[#666666] focus:outline-primaryOrange rounded-xl text-[16px] px-[16px] py-[14px]"
                        type="date"
                        {...register("date")}
                      />
                      {errors.date && (
                        <p className="error">{errors.date.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Password */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="password"
                      className="xl:max-w-[250px] text-textGray text-[14px] font-normal leading-[21px] mb-[6px] mt-4"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      placeholder="********"
                      className="xl:w-[512px] h-12 border-[1px] text-[#666666] focus:outline-primaryOrange rounded-xl text-[16px] px-[16px] py-[14px] mb-6"
                      type="password"
                      {...register("password")}
                    />
                    {errors.password && (
                      <p className="error">{errors.password.message}</p>
                    )}
                  </div>
                </div>

               
                  {/* Profile Image Upload */}
                  <div className="flex flex-col justify-center items-center ">
                    <div className="xl:mt-14 xl:w-56 xl:h-56">
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
              <button
                type="submit"
                className="rounded-full bg-primaryOrange px-8 py-[14px] text-white"
              >
                Changes
              </button>
            </form>
          </div>
        </div>
      </div>
      <DeliveryAddress />
    </div>
  );
};

export default Profile;
