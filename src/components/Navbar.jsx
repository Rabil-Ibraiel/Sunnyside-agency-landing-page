"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const links = [
    { url: "/about", title: "About" },
    { url: "/services", title: "Services" },
    { url: "/projects", title: "Projects" },
    { url: "/contact", title: "Contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50">
      <nav className="w-screen h-20 flex justify-between items-center gap-12 sm:gap-0 px-6 py-2 sm:px-7 sm:py-3 md:px-8 md:py-4">
        {/* IMAGE container */}
        <Link href={"/"} className="relative w-60 sm:w-96 h-full">
          <Image src={"/logo.svg"} alt="LOGO" fill className="object-contain" />
        </Link>

        {/* HAMBURGER MENU */}
        <div
          onClick={() => setOpen(!open)}
          className="relative w-12 h-8 md:hidden cursor-pointer"
        >
          <Image src={"/icon-hamburger.svg"} alt="hamburger menu" fill />
        </div>

        {/* LINKS container for sm */}
        {open && (
          <div className="md:hidden absolute z-50 left-[50%] translate-x-[-50%] text-slate-500 top-[5.5rem] bg-white h-[35vh] w-[75%] flex justify-between py-4 items-center flex-col text-xl rounded-s-3xl rounded-b-3xl">
            {links.map((link, index) => (
              <Link
                className={`${
                  index == links.length - 1 &&
                  "text-black bg-yellow-400 rounded-full px-4 py-2 font-bold "
                }`}
                href={link.url}
                key={link.title}
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}

        {/* LINKS container for md+ */}
        <div className="hidden md:flex text-white justify-between w-96 text-lg">
          {links.map((link, index) => (
            <Link
              className={`${
                index == links.length - 1 &&
                "text-black bg-white rounded-full px-4 font-bold "
              }`}
              href={link.url}
              key={link.title}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
