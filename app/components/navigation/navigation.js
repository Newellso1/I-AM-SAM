"use client";

import NavButton from "./button";
import NavigationLink from "./navigation-link";
import { useState } from "react";

export default function Navigation() {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => {
    setTimeout(() => {
      setNavOpen(false);
    }, 200);
  };

  return (
    <div
      className={`sticky bottom-0 bg-body border-2 border-text  p-2 rounded-t-xl md:p-6  h-fit text-center flex flex-col gap-2 items-center justify-center transition-all z-10`}
    >
      <div className={`md:hidden flex `} onClick={() => setNavOpen(!navOpen)}>
        <NavButton navOpen={navOpen} />
      </div>
      <div
        className={`md:flex md:w-full md:justify-center ${
          navOpen ? "" : `h-0 translate-y-full`
        } transition-all w-full items-center  `}
      >
        <ul
          className={`md:flex flex-col items-center ${
            navOpen ? "flex" : "hidden"
          }  md:justify-around gap-2 w-full md:max-w-[60em] md:flex-row md:place-self-center md:gap-2`}
        >
          <li onClick={() => closeNav()} className="w-fit">
            <NavigationLink link="/" page="Home" />
          </li>
          <li onClick={() => closeNav()} className="w-fit">
            <NavigationLink link="/about" page="About" />
          </li>
          <li onClick={() => closeNav()} className="w-fit">
            <NavigationLink link="/projects" page="Projects" />
          </li>
          <li onClick={() => closeNav()} className="w-fit">
            <NavigationLink link="/contact" page="Contact" />
          </li>
        </ul>
      </div>
    </div>
  );
}
