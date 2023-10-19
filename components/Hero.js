import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import FirstStep from "./form/FirstStep";

const avantages = [
  {
    title: "Vous achetez un logement neuf en vue de sa première occupation.",
    icon: (
      <CheckBadgeIcon className="h-4 w-4 text-yellow-500" aria-hidden="true" />
    ),
  },
  {
    title:
      "Votre futur logement neuf financé avec le PTZ doit devenir votre résidence principale.",
    icon: (
      <CheckBadgeIcon className="h-4 w-4 text-yellow-500" aria-hidden="true" />
    ),
  },
  {
    title:
      "Vos revenus ne doivent pas dépasser le plafond de ressources de votre zone géographique.",
    icon: (
      <CheckBadgeIcon className="h-4 w-4 text-yellow-500" aria-hidden="true" />
    ),
  },
];

const Hero = () => {
  return (
    <section
      id="estimation"
      className="flex w-full justify-between items-center bg-gray-50 rounded-md mt-0 lg:mt-10 lg:mb-10 px-6 lg:px-10 lg:flex-row flex-col"
    >
      <div className="w-full lg:w-5/12 flex flex-col justify-center lg:min-h-[500px] lg:mb-0 mb-10 relative ">
        <div>
          <h1 className="lg:text-5xl text-2xl lg:w-11/12 mt-10 lg:mt-3 text-gray-700">
            Estimation{" "}
            <span className="lg:text-6xl text-4xl inline bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 bg-clip-text font-display font-bold tracking-tight text-transparent min-h-max">
              Prêt à taux zéro
            </span>{" "}
            &
            <span className="lg:text-6xl text-4xl inline bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 bg-clip-text font-display font-bold tracking-tight text-transparent min-h-max">
              TVA réduite
            </span>
          </h1>
          <h2 className="text-xl text-gray-700 mt-5 w-9/12">
            PTZ et TVA réduite : la combinaison gagnante pour devenir
            propriétaire
          </h2>
          <div className="bg-yellow-500 w-20 h-2 rounded-full my-5"></div>
          <ul className="mt-5">
            {avantages.map((avantage, index) => (
              <li
                className="flex items-center mb-1.5 text-gray-500"
                key={index}
              >
                {avantage.icon}
                <p className="ml-3 font-light text-[10px]">{avantage.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-9/12 h-0.5 bg-gray-100 lg:hidden flex mb-7 mt-0" />
      <FirstStep />
    </section>
  );
};

export default Hero;
