import Link from "next/link";
import React from "react";
import { ModeToggle } from "./DarkModeToggle";
import MaxWidthWrapper from "./ui/MaxWidthWrapper";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="position: fixed z-20 bg-background  w-full border-b">
      <MaxWidthWrapper>
        <ul className={"flex justify-between  items-center p-4"}>
          <div>
            <Link href="/">
              <li>
                {/* <Image alt="logo" width={70} height={70} src={"/rapido.png"} /> */}
                <p className="font-bold text-3xl  text-primary">Rapido Rör</p>
              </li>
            </Link>
          </div>
          <div className="flex ">
            <ModeToggle />
          </div>
        </ul>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
