import React from "react";
import MaxWidthWrapper from "./ui/MaxWidthWrapper";
import {
  ArrowDownToLine,
  Award,
  BadgeCheck,
  CheckCircle,
  Gem,
  Leaf,
  Zap,
} from "lucide-react";

const HeroBot = () => {
  const perks = [
    {
      name: "Erfarenhet och Kompetens",
      Icon: Award,
      desctiption:
        "Rapido Rör står ut med sin långa erfarenhet och höga kompetens inom rörmokeribranschen. Våra kvalificerade rörmokare garanterar professionell expertis för att lösa dina avloppsproblem effektivt och pålitligt.",
    },
    {
      name: "Omedelbara Åtgärder",
      Icon: Zap,
      desctiption:
        "Vi förstår vikten av snabba lösningar när det gäller rörproblem. Rapido Rör agerar omedelbart vid stopp i rören och genomför snabba och effektiva åtgärder för att återställa ditt vattenflöde till optimal funktion.",
    },
    {
      name: "Garanterad Kvalitet",
      Icon: BadgeCheck,
      desctiption:
        "Välj Rapido Rör för att säkerställa ett problemfritt vattenflöde. Vårt engagemang för kvalitetsservice och dedikation till varje intervention gör oss till det självklara valet för att hantera ditt rörsystem och lösa avloppsfrågor utan komplikationer.",
    },
  ];
  return (
    <MaxWidthWrapper className="py-20">
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
        {perks.map((perk) => (
          <div
            key={perk.name}
            className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
          >
            <div className="md:flex-shrink-0 flex justify-center">
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-primary text-white">
                {<perk.Icon className="w-1/2 h-1/2" />}
              </div>
            </div>
            <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
              <h3 className="text-base font-medium text-foreground">
                {perk.name}
              </h3>
              <p className="mt-3 text-sm text-foreground">{perk.desctiption}</p>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default HeroBot;
