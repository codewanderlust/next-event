import React, { useState, useEffect } from "react";

import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      if (currentScrollPos > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      if (isScrollingDown) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      const heroSection = document.getElementById("hero-section");

      if (heroSection) {
        const heroSectionEnd = heroSection.offsetTop + heroSection.offsetHeight;

        if (currentScrollPos > heroSectionEnd) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`flex justify-between px-4 py-2 ${
        isSticky
          ? "bg-primary-rgba sticky top-0 z-[100] transform transition-all duration-300 ease-in-out"
          : isHidden
          ? "-translate-y-full transform transition-all duration-300 ease-in-out"
          : "bg-primary"
      }`}
    >
      <Logo />

      <HeaderMenu />
    </div>
  );
}

export default Header;
