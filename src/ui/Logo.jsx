import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        src="images/next-event-logo-08.png"
        alt=" logo"
        className="h-[48px] w-auto"
      />
    </Link>
  );
}

export default Logo;
