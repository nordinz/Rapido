import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tjänster",
};

const services = () => {
  return (
    <MaxWidthWrapper className="h-full">
      <div className="pt-20">
        <h1 className="text-4xl text-white ">SERVICES</h1>
        <h1 className="text-4xl text-white ">SERVICES</h1>
        <h1 className="text-4xl text-white ">SERVICES</h1>
      </div>
    </MaxWidthWrapper>
  );
};

export default services;
