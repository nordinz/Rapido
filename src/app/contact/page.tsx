import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Kontakta Oss",
};

const page = () => {
  return (
    <MaxWidthWrapper className="h-screen">
      <div className="pt-20">
        <h1 className="text-4xl text-white ">CONTACT</h1>
        <h1 className="text-4xl text-white ">CONTACT</h1>
        <h1 className="text-4xl text-white ">CONTACT</h1>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
