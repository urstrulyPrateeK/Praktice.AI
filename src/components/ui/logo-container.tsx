import { Link } from "react-router-dom";

export const LogoContainer = () => {
  return (
    <Link to={"/"}>
      <img
        src="/assets/svg/logo.svg"
        alt=""
        className="w-24 h-24 object-contain"
      />
    </Link>
  );
};