

const VetOrder = () => {
  return (
    <div className="relative bg-[#F7830D] text-white flex items-center justify-center pt-[100px] pb-[45px] overflow-hidden w-full mb-[200px]"
    style={{
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="relative z-10 text-center px-4">
      <h3 className="max-w-[924px] mx-auto text-[32px] lg:text-[48px] xl:text-[64px] leading-[80px] font-semibold mb-4">Let’s Prioritize Pet Wellness Together</h3>
      <p className="text-lg lg:text-xl leading-relaxed max-w-[798px] mx-auto text-center">As your trusted veterinary partner, I recommend incorporating fresh, balanced meals into your pet&apos;s diet to give them the best chance at a long and happy life. Remember, a healthier pet starts with better nutrition.</p>
      <p className="text-xl leading-[30px] mt-[10px] mb-[10px]">With love and care</p>
      <p className="text-xl leading[30px] mb-8">Your Veterinarian Partner
      Pet Fresh Kitchen</p>
      <button className="bg-white text-primaryOrange px-8 py-[14px] rounded mt-8 ">Contact Us</button>
      </div>
    </div>

  );
};

export default VetOrder;