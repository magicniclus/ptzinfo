import {
  ChatBubbleBottomCenterTextIcon,
  CheckIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const EvaluationBanner = () => {
  return (
    <section className="w-full px-5 lg:flex lg:justify-between items-start  max-w-[1250px] mx-auto">
      <div className=" lg:w-7/12">
        <h1 className="text-2xl md:text-4xl text-gray-700 md:w-10/12">
          <span className="text-blue-500">Prêt à Taux Zéro (PTZ)</span> :
          Conditions d'éligibilité et Plafonds ?{" "}
        </h1>
        <p className="text-gray-500 text-xs md:text-base font-light w-6/6 mt-5">
          Le Prêt à Taux Zéro (PTZ) offre une opportunité unique aux
          primo-accédants. Avant de vous lancer dans votre projet immobilier,
          comprenez les conditions d'éligibilité et les plafonds de ressources
          qui s'appliquent :
        </p>
        <ul className="w-7/12 text-gray-500 text-xs md:text-base font-light">
          <li className="mt-3 list-disc">
            Primo-accédant : Vous devez être acquéreur pour la première fois
            d'une résidence principale.
          </li>
          <li className="mt-3 list-disc">
            Utilisation comme résidence principale : Le bien financé par le PTZ
            doit être votre résidence principale.
          </li>
          <li className="mt-3 list-disc">
            Composition du foyer : Le nombre de personnes dans votre foyer
            influence le montant du PTZ.
          </li>
        </ul>
      </div>
      <div className="lg:w-4/12 min-h-full rounded-lg bg-blue-500 py-5 lg:py-5 px-12 flex justify-around flex-col my-4 lg:my-0">
        <h3 className="text-white text-xl md:text-2xl font-normal lg:mb-0 flex items-center">
          <ChatBubbleBottomCenterTextIcon className="h-auto w-7 lg:mb-0 mr-2 text-yellow-500" />
          Notre conseil :
        </h3>
        <p className="text-white text-xs md:text-base font-light w-6/6 mt-5">
          Les plafonds de ressources varient en fonction de la localisation du
          bien et du nombre de personnes dans le foyer. Utilisez notre outil de
          simulation en ligne pour estimer votre éligibilité et le montant du
          PTZ auquel vous pouvez prétendre.
        </p>
      </div>
    </section>
  );
};

export default EvaluationBanner;
