import { CheckIcon } from "@heroicons/react/20/solid";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const EtapeEstimation = () => {
  const clientInformation = useSelector((state) => state?.clientInfomation);
  const stepInProgress = useSelector((state) => state?.stepInProgress);
  //Faire les étapes de l'estimation en fonction de l'avancement de l'utilisateur
  const [etape, setEtape] = useState();
  useEffect(() => {
    setEtape([
      // {
      //   name: "Type de bien",
      //   done: stepInProgress > 1 ? true : false,
      //   select: stepInProgress === 1 ? true : false,
      // },
      {
        name: "Type de bien",
        done: stepInProgress > 1 ? true : false,
        select: stepInProgress === 1 ? true : false,
      },
      {
        name: "Situation personnelle",
        done: stepInProgress > 2 ? true : false,
        select: stepInProgress === 2 ? true : false,
      },
      {
        name: "Situation professionnelle",
        done: stepInProgress > 3 ? true : false,
        select: stepInProgress === 3 ? true : false,
      },
      {
        name: "Revenus fiscale de référence",
        done: stepInProgress > 4 ? true : false,
        select: stepInProgress === 4 ? true : false,
      },
      {
        name: "Foyer fiscal",
        done: stepInProgress > 5 ? true : false,
        select: stepInProgress === 5 ? true : false,
      },

      {
        name: "Objectif",
        done: stepInProgress > 6 ? true : false,
        select: stepInProgress === 13 ? true : false,
      },
    ]);
  }, [clientInformation, stepInProgress]);
  return (
    <div className="lg:block hidden">
      <h1 className="text-2xl font-light lg:my-0 my-5 lg:w-9/12">
        Informations concernant vos aides:
      </h1>
      <ul className="mt-10">
        {etape &&
          etape.map((item, index) => (
            <li
              key={index}
              className={`text-sm ${
                item.done
                  ? " "
                  : stepInProgress === index + 1
                  ? ""
                  : "text-gray-400 font-normal"
              } rounded-lg mb-2`}
              style={
                item.done
                  ? { color: "#3b82f6" }
                  : stepInProgress === index + 1
                  ? { color: "#3b82f6" }
                  : null
              }
            >
              {item.done ? (
                <CheckIcon
                  className="inline-block w-4 h-4 mr-2 "
                  style={{ color: "#3b82f6" }}
                />
              ) : null}
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default EtapeEstimation;
