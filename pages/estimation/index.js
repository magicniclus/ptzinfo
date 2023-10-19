import React from "react";
import Basic from "../../layout/Basic";
import EtapeEstimation from "../../components/form/EtapeEstimation";
import ContainerEstimation from "../../layout/ContainerEstimation";

const index = () => {
  return (
    <Basic height="min-h-[calc(100vh-78px)]">
      <ContainerEstimation>
        <div className=" flex flex-col justify-between  w-full lg:w-4/12">
          <EtapeEstimation />
          <div className="lg:block hidden">
            <p className="text-xs font-light text-gray-400 mt-5">
              *Le résultat de cette estimation ne saurait remplacer une
              évaluation concrète. Nos algorithmes sont en constante
              amélioration pour refléter au mieux la réalité.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-6/12 min-h-[400px] lg:min-h-[500px] flex flex-col justify-between"></div>
      </ContainerEstimation>
    </Basic>
  );
};

export default index;
