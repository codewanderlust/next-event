import { CiSearch } from "react-icons/ci";
import { GiLoveHowl } from "react-icons/gi";

import { motion } from "framer-motion";
import { useUser } from "../features/aunthentication/useUser";
import UserAvatar from "../features/aunthentication/userAvatar";
import { Link } from "react-router-dom";

function HeaderLinks({ open }) {
  const { user } = useUser();
  const userId = user?.id;
  console.log({ user });

  const links = [
    { href: "/", label: <CiSearch size={16} /> },
    { href: "/favorites", label: <GiLoveHowl size={16} /> },
  ];

  return (
    <>
      <ul className="flex items-center gap-[32px] text-lg tracking-wide">
        {links.map((link, i) => (
          <Link key={i} to="/favorites">
            <p className="rounded-full bg-secondary p-2 font-bold capitalize text-[#f4f4f4]">
              {link.label}
            </p>
          </Link>
        ))}

        {user && userId ? (
          <UserAvatar /> // Render the avatar if the user is logged in
        ) : (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={open}
            className="cursor-pointer rounded-2xl bg-secondary px-3 py-1  text-[16px] font-semibold text-[#f4f4f4]"
          >
            Login
          </motion.button>
        )}
      </ul>
    </>
  );
}

export default HeaderLinks;
