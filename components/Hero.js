import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import { DocumentCheckIcon } from "@heroicons/react/24/outline";
import FirstStep from "./form/FirstStep";
import AppartementMaison from "./form/step/AppartementMaison";

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
            Estimation <br />{" "}
            <span className="lg:text-6xl text-4xl inline bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 bg-clip-text font-display font-bold tracking-tight text-transparent min-h-max">
              Prêt à taux zéro
            </span>{" "}
          </h1>
          <h2 className="text-xl text-gray-700 mt-5 w-9/12">
            Un PTZ intégré à votre financement <br />
            <span className="text-blue-500">+</span> prix de vente en TVA
            réduite à 5,5% <br />
            <span className="text-blue-500">+</span> frais de notaire réduits
          </h2>
          <div className="flex items-center mt-3">
            <DocumentCheckIcon className="h-6 w-6 text-yellow-500 mr-2" />
            <h3 className="text-blue-500 text-2xl font-semibold">
              emprunt immobilier accordé
            </h3>
          </div>
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
      <AppartementMaison />
    </section>
  );
};

export default Hero;
