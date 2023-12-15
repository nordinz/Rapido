import Link from "next/link";
import React from "react";
import { ModeToggle } from "./DarkModeToggle";
import MaxWidthWrapper from "./ui/MaxWidthWrapper";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed z-20 bg-background  w-full border-b sm:h-24 h-20 shadow-xl mt-0 flex">
      <MaxWidthWrapper className="h-full">
        <div className="flex justify-between items-center h-full">
          <Link href={"/"} className="flex items-center gap-3">
            <Image src={"logo.svg"} width={50} height={50} alt="Logo" />
            <p className="sm:text-3xl text-xl">RAPIDO RÖR</p>
          </Link>

          <div className="flex items-center">
            <ul className="md:flex hidden">
              <Link href={"/service"}>
                <li className="ml-10 uppercase hover:scale-110 text-l">
                  Tjänster
                </li>
              </Link>
              <Link href={"/contact"}>
                <li className="ml-10 uppercase hover:scale-110 text-l">
                  Kontakt
                </li>
              </Link>
              <Link href={"/about"}>
                <li className="ml-10 uppercase hover:scale-110 text-l">
                  Om oss
                </li>
              </Link>
            </ul>
            <div className="ml-4">
              <ModeToggle />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
