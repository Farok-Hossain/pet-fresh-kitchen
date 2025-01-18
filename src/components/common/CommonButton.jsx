import { Link } from "react-router-dom";

export const CommonButton = ({
    className,
  text,
  type,
  linkUrl = "/",
}) => {
  return (
    <Link to={linkUrl}>
      <button
        type={type}
        className={`bg-primaryOrange ${className}  text-xl py-[10px] px-6 `}
      >
        {text}
      </button>
    </Link>
  );
};
