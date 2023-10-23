import {
  ArrowTrendingUpIcon,
  CloudArrowUpIcon,
  HandThumbUpIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import { useSelector } from "react-redux";

const Avantages = () => {
  const primaryColor = useSelector((state) => state?.user?.settings?.fontColor);
  const secondaryColor = useSelector(
    (state) => state?.user?.settings?.fontColor2
  );
  const avantages = [
    {
      title: "Éligibilité TVA réduite",
      text: "Découvrez rapidement si vous êtes éligible à la TVA à taux réduit pour l'achat de votre résidence principale.",
      icon: (
        <ArrowTrendingUpIcon
          className="h-4 w-4 text-yellow-500 mr-3"
          aria-hidden="true"
        />
      ),
    },
    {
      title: "Prêt à taux zéro simplifié",
      text: "Bénéficiez d'un accompagnement pour profiter du prêt à taux zéro, une aide précieuse pour financer votre projet immobilier.",
      icon: (
        <HandThumbUpIcon
          className="h-4 w-4 text-yellow-500 mr-3"
          aria-hidden="true"
        />
      ),
    },
    {
      title: "Sécurité et confidentialité",
      text: "Nous garantissions la sécurité de vos informations. Les détails de votre prêt et votre éligibilité sont traités avec la plus stricte confidentialité.",
      icon: (
        <CloudArrowUpIcon
          className="h-4 w-4 text-yellow-500 mr-3"
          aria-hidden="true"
        />
      ),
    },
  ];
  return (
    <div>
      <div className="lg:my-0 my-10 flex flex-col">
        {avantages.map((avantage, index) => (
          <div key={index} className="flex flex-col mb-7 justify-center">
            <div
              className="lg:text-xl text-lg font-normal lg:mb-2 flex items-center"
              style={{ color: secondaryColor }}
            >
              {avantage.icon}
              {avantage.title}
            </div>
            <p
              className="text-sm font-light lg:w-full w-11/12"
              style={{ color: primaryColor }}
            >
              {avantage.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Avantages;
