import React from "react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <>
      <div className="py-20  mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-foreground lg:text-white px-2.5">
          <span className="text-primary underline decoration-primary">
            Rapido Rör
          </span>{" "}
          – där varje avloppsfråga blir en vänlig anekdot!
        </h1>
        <p className="mt-6 text-lg max-w-prose text-foreground lg:text-white  px-2.5">
          Rapido Rör erbjuder professionella lösningar för varje avloppsfråga,
          vilket tydligt återspeglar vår dedikation till att säkerställa ett
          problemfritt vattenflöde för dig. Vi hanterar ditt rörsystem med
          expertis och skicklighet, och varje insats representerar en chans för
          oss att leverera högkvalitativa tjänster. Inget behov av oro vid stopp
          i rören – vi agerar snabbt och effektivt för att återställa ditt
          vattenflöde till optimal funktion, utan onödiga komplikationer.
        </p>
        <div className="flex flex-col sm:flex-row-reverse gap-4 mt-6">
          <Button variant={"default"} className="font-bold animate-pulse">
            Våra Tjänster <ArrowRight />
          </Button>
          <Button variant={"secondary"}>Om oss</Button>
        </div>
      </div>
    </>
  );
};

export default Hero;
