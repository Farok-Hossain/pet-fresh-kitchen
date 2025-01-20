import { Link } from "react-router-dom";

export const CommonButton = ({ className, text, type, linkUrl = "/", icon, icon2 }) => {
  return (
    <Link to={linkUrl}>
      <button
        type={type}
        className={`bg-primaryOrange ${className} text-xl py-[10px] px-6 flex items-center gap-[10px]`}
      >
        {icon && <span>{icon}</span>}
        <span>{text}</span>   {icon2 && <span>{icon2}</span>}
      </button>
    </Link>
  );
};
