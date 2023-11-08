import { HiMagnifyingGlass, HiOutlineHeart } from "react-icons/hi2";
function HeaderMenu() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-secondary cursor-pointer rounded-3xl p-2">
        <HiMagnifyingGlass size={18} color="#f4f4f4" />
      </div>
      <div className="bg-secondary cursor-pointer rounded-3xl p-2">
        <HiOutlineHeart size={18} color="#f4f4f4" />
      </div>
      <div className="bg-secondary cursor-pointer rounded-2xl px-4 py-2 text-xs text-[#f4f4f4]">
        <button>Sign up</button>
      </div>
    </div>
  );
}

export default HeaderMenu;
