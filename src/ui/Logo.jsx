import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/next-event-images/next-event-logo-08.png?t=2023-11-27T10%3A22%3A41.048Z"
        alt=" logo"
        className="h-[48px] w-auto"
      />
    </Link>
  );
}

export default Logo;
