import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppartementMaison from "./step/AppartementMaison";
import { useRouter } from "next/router";
import SituationPersonnelle from "./step/SituationPersonnelle";
import SituationProfessionnelle from "./step/SituationProfessionnelle";
import RevenusFiscal from "./step/RevenusFiscal";
import NbrPartFoyer from "./step/NbrPartFoyer";
import Secteur from "./step/Secteur";
import Projet from "./step/Projet";

const Step = () => {
  const [error, setError] = useState(null);
  const step = useSelector((state) => state?.stepInProgress);

  const type = useSelector((state) => state?.clientInfomation?.type);
  const secteur = useSelector((state) => state?.clientInfomation?.secteur);
  const situationPersonnelle = useSelector(
    (state) => state?.clientInfomation?.situationPersonnelle
  );
  const situationProfessionnelle = useSelector(
    (state) => state?.clientInfomation?.situationProfessionnelle
  );
  const revenusFiscal = useSelector(
    (state) => state?.clientInfomation?.revenusFiscal
  );
  const nbrDePart = useSelector((state) => state?.clientInfomation?.nbrDePart);
  const projet = useSelector((state) => state?.clientInfomation?.projet);

  const dispatch = useDispatch();

  const router = useRouter();
  const pathSegments = router.asPath.split("/");
  const currentSlug = pathSegments[1];

  const handleRoute = (e) => {
    e.preventDefault();
    router.push(`/estimation/analyse`);
  };

  const handleComponent = () => {
    switch (step) {
      // case 2:
      //   return <Secteur />;

      case 2:
        return <SituationPersonnelle />;

      case 3:
        return <SituationProfessionnelle />;

      case 4:
        return <RevenusFiscal />;

      case 5:
        return <NbrPartFoyer />;

      case 6:
        return <Projet />;

      default:
        return;
    }
  };
  const handleStep = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_SIMULATEUR_STEP" });
  };

  const isButtonDisabled = () => {
    switch (step) {
      // case 2:
      //   return !secteur;

      case 2:
        return !situationPersonnelle;

      case 3:
        return !situationProfessionnelle;

      case 4:
        return !revenusFiscal;

      case 5:
        return !nbrDePart;

      case 6:
        return !projet;

      default:
        return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="w-full min-h-[250px] h-full flex flex-col justify-between bg-opacity-50 rounded-md mt-10">
      {handleComponent()}
      <div className="flex items-center lg:my-0 my-5">
        <button
          disabled={isButtonDisabled()}
          type="button"
          className={`text-white py-1.5 px-5 rounded-full transition ease-in-out duration-100 w-max`}
          style={{
            backgroundColor: "#3b82f6",
            opacity: isButtonDisabled() ? 0.6 : 1,
          }}
          onClick={(e) => (step === 6 ? handleRoute(e) : handleStep(e))}
        >
          {step === 6 ? "Voir l'estimation" : "Suivant"}
        </button>
        {error ? (
          <p className="text-red-300 text-xs font-light lg:w-3/5 text-start ml-2">
            {error}
          </p>
        ) : null}
      </div>
    </form>
  );
};

export default Step;
