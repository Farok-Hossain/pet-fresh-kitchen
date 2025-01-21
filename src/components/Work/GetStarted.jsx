

const GetStarted = () => {
    return (
        <div className="relative bg-[#F7830D] text-white flex items-center justify-center py-[118px] overflow-hidden w-full mb-[200px]"
    style={{
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="relative z-10 text-center px-4">
      <h3 className="max-w-[924px] mx-auto text-[32px] lg:text-[48px] xl:text-[64px] leading-[80px] font-semibold mb-5">Ready to Get Started</h3>
      <p className="text-lg lg:text-xl leading-relaxed max-w-[798px] mx-auto text-center"><span className="font-bold">Give your pet the fresh, nutritious meals they deserve</span>—all while enjoying the convenience and peace of mind you’ve been looking for!
      </p>
      </div>
    </div>
    );
};

export default GetStarted;