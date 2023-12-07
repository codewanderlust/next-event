import { CiSearch } from "react-icons/ci";
import { GiLoveHowl } from "react-icons/gi";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useUser } from "../features/aunthentication/useUser";
import UserAvatar from "../features/aunthentication/userAvatar";

function HeaderLinks({ open }) {
  const navigate = useNavigate();
  const { user } = useUser();
  const userId = user?.id;

  function handleFavorites() {
    if (user && userId) {
      navigate("/favorites");
    } else {
      open();
    }
  }

  return (
    <>
      <ul className="flex items-center gap-[32px] text-lg tracking-wide">
        <CiSearch
          size={24}
          color="#7908AE"
          strokeWidth={1}
          className="cursor-pointer"
        />
        <GiLoveHowl
          size={24}
          color="#7908AE"
          strokeWidth={1}
          onClick={handleFavorites}
          className="cursor-pointer"
        />

        {user && userId ? (
          <UserAvatar /> // Render the avatar if the user is logged in
        ) : (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              open();
            }}
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
