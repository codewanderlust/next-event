import React from "react";

import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";

function Header({ open }) {
  return (
    <div className="flex justify-between bg-primary px-4 py-2">
      <Logo />
      <HeaderMenu open={open} />
    </div>
  );
}

export default Header;
