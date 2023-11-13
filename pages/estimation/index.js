import React, { useEffect } from "react";
import Basic from "../../layout/Basic";
import EtapeEstimation from "../../components/form/EtapeEstimation";
import ContainerEstimation from "../../layout/ContainerEstimation";
import EstimationManager from "../../components/form/EstimationManager";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const index = () => {
  const type = useSelector((state) => state.clientInfomation.type);

  const router = useRouter();

  useEffect(() => {
    if (!type) router.push("/");
  }, []);

  return (
    <Basic
      height="min-h-[calc(100vh-78px)]"
      title="Simulateur Prêt à Taux Zéro - Info PTZ | Étape par Étape vers Votre Estimation"
      metaDescription="Utilisez notre simulateur interactif pour estimer facilement votre prêt à taux zéro. Chez Info PTZ, nous vous guidons à travers chaque étape pour une estimation précise et personnalisée. Commencez votre simulation maintenant et planifiez votre avenir financier avec confiance."
    >
      <ContainerEstimation>
        <div className=" flex flex-col justify-between  w-full lg:w-4/12">
          <EtapeEstimation />
          <div className="lg:block hidden">
            <p className="text-xs font-light text-gray-400 mt-10">
              *Le résultat de cette estimation ne saurait remplacer une
              évaluation concrète. Nos algorithmes sont en constante
              amélioration pour refléter au mieux la réalité.
            </p>
          </div>
        </div>
        <div className="w-0.5 min-h-[600px] bg-gray-100 lg:flex hidden" />
        {/* <div className="w-full lg:w-6/12 min-h-[400px] lg:min-h-[500px] flex flex-col justify-between"></div> */}
        <EstimationManager />
      </ContainerEstimation>
    </Basic>
  );
};

export default index;
