
import PropTypes from "prop-types";
import bgDogImag from "../../assets/images/bgDogFrame.jpg"

const CommonBanner = ({title, description}) => {
    return (
        <div className="flex justify-center items-center" 
                               style={{ 
                                   backgroundImage: `url(${bgDogImag})`, 
                                   height: "720px", 
                                   backgroundSize: 'cover', 
                                   backgroundPosition: 'center', 
                                   backgroundRepeat: 'no-repeat' 
                               }}
                           >
                               {/* Content goes here */}
                             <div className=" flex justify-between items-center">
                             <div className="flex flex-col place-items-center justify-center">
                                   <h2 className=" text-[64px] text-center text-white leading-[80px] font-semibold max-w-[800px] mb-5 ">{title}</h2>
                                   <p className="text-lg text-center font-normal leading-7 text-white max-w-[745px] mb-8">{description}</p>
                               </div>
                   
                               {/* image here  */}
                               <div>
                                   {/* <img src={dogFood1} alt="" /> */}
                               </div>
                             </div>
                           </div>
    );
};

CommonBanner.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
export default CommonBanner;