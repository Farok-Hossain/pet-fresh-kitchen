import { Link } from "react-router-dom";


const VetOrder = () => {
  return (
    <div className="relative bg-[#F7830D] text-white flex items-center justify-center xl:pt-[100px] py-[30px] pb-[45px] overflow-hidden w-full xl:mb-[200px]"
    style={{
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="relative z-10 text-center px-4">
      <h3 className="xl:max-w-[924px] mx-auto text-2xl  xl:text-[64px] xl:leading-[80px] font-semibold mb-4">Let’s Prioritize Pet Wellness Together</h3>
      <p className="xl:text-xl  xl:leading-[30px] xl:max-w-[798px] mx-auto text-center">As your trusted veterinary partner, I recommend incorporating fresh, balanced meals into your pet&apos;s diet to give them the best chance at a long and happy life. Remember, a healthier pet starts with better nutrition.</p>
      <p className="xl:text-xl xl:leading-[30px] mt-[10px] mb-[10px]">With love and care</p>
      <p className="xl:text-xl xl:leading[30px] xl:mb-8">Your Veterinarian Partner
      <span className="font-bold">  Pet Fresh Kitchen</span></p>
      <Link to="/">
      <button className="bg-white text-primaryOrange px-8 py-[14px] rounded xl:mt-8 mt-5">Contact Us</button></Link>
      </div>
    </div>

  );
};

export default VetOrder;