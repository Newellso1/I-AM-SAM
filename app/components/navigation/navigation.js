"use client";

import Link from "next/link";
import NavButton from "./button";
import { useState } from "react";

export default function Navigation() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div
      className={`bg-blue-300 p-2 rounded-t-lg md:p-5 h-fit text-center flex flex-col gap-2 items-center justify-center transition-all`}
    >
      <div className={`md:hidden flex `} onClick={() => setNavOpen(!navOpen)}>
        <NavButton navOpen={navOpen} />
      </div>
      <div
        className={`${
          navOpen ? "" : `h-0 translate-y-full`
        } transition-all w-full items-center`}
      >
        <ul
          className={`md:flex flex-col ${
            navOpen ? "flex" : "hidden"
          }  md:justify-around gap-2 w-full md:flex-row`}
        >
          <li>
            <Link href="./">Home</Link>
          </li>
          <li>
            <Link href="./about">About</Link>
          </li>
          <li>
            <Link href="./projects">Projects</Link>
          </li>
          <li>
            <Link href="./contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
