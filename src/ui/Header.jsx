import HeaderLinks from "./HeaderLinks";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";

function Header() {
  return (
    <div className="bg-primary flex justify-between px-4 py-1 ">
      <Logo />
      <HeaderLinks />
      <HeaderMenu />
    </div>
  );
}

export default Header;
