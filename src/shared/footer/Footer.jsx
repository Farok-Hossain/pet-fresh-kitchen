import logo from "../../assets/images/logo.png";
import footerLogo from "../../assets/images/Footer.jpg";

const Footer = () => {
  return (
    <div
      className="hidden  xl:flex items-center "
      style={{
        backgroundImage: `url(${footerLogo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* footer content  */}
      <div className=" w-[1300px] mx-auto py-[72px]">
        <div className=" ">
          <div className="flex justify-between">
            <div className="">
              <div className="w-24 h-[100px] bg-white mb-5">
                <img src={logo} alt="" />
              </div>
              <p className="font-normal text-[16px] max-w-[349px] text-white">
                Providing quality food and health solutions for your beloved
                pets. Our mission is to ensure every dog receives the best
                nutritio
              </p>
            </div>
            <div className="text-white">
              <h2 className="mb-5">Company</h2>
              <h3 className="mb-4">About Us</h3>
              <h3>FAQ</h3>
            </div>
            <div className="text-white space-y-4 mb-5">
              <h2 className=" ">Useful Links</h2>
              <h3 className="">Buy Products</h3>
              <h3 className="">Buy Sample</h3>
              <h3 className="">Discount</h3>
              <h3>F.A.Q</h3>
            </div>

            <div className="text-white space-y-4 mb-5">
              <h2 className="">Customer Service</h2>
              <h3 className="">Contact Us</h3>
              <h3 className="">Shipping</h3>
              <h3>Returns</h3>
            </div>

            <div className="text-white space-y-4 mb-5">
              <h2 className="">Store</h2>
              <p className="">8592 Fairground St. <br /> Tallahassee, FL 32303</p>
              <p>+775 569 8745</p>
              <p>acde@outlook.com</p>
            </div>
          </div>
          <div className="text-white mt-[81px]">
            <p> © Copyright Pet Shop 2024. Design by Figma. guru</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
