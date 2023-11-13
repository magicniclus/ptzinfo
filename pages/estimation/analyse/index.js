import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";

import { useSelector } from "react-redux";

import ContainerEstimation from "../../../layout/ContainerEstimation";
import Basic from "../../../layout/Basic";
import AnalysePresentation from "../../../components/AnalysePresentation";
import AnalyseLoader from "../../../components/AnalyseLoader";
import Loader from "../../../components/loader/Loader";
import Header from "../../../components/Header";

import Head from "next/head";

const index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const getUserAdresse = useSelector(
    (state) => state?.clientInfomation?.adresse
  );
  const clientInfomation = useSelector(
    (state) => state?.clientInfomation?.adresse
  );

  const router = useRouter();
  const pathSegments = router.asPath.split("/");
  const currentSlug = pathSegments[1];

  useEffect(() => {
    if (getUserAdresse) {
      setIsLoading(true);
    }
  }, [getUserAdresse]);

  const handleRoute = () => {
    router.push(`/estimation/analyse`);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (!clientInfomation) {
  //       router.push({
  //         pathname: "/",
  //       });
  //     }
  //   }, 1000);
  // }, [clientInfomation]);

  return (
    <>
      <Basic
        height="min-h-[calc(100vh-78px)]"
        title="Analyse de Simulation de Prêt à Taux Zéro - Info PTZ | Comprendre Votre Estimation"
        metaDescription="Plongez dans l'analyse détaillée de votre simulation de prêt à taux zéro avec Info PTZ. Nous décomposons chaque aspect pour vous aider à comprendre et optimiser votre plan de financement. Explorez l'analyse dès maintenant et prenez des décisions éclairées."
      >
        <ContainerEstimation>
          {isLoading && (
            <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-10">
              <Loader />
            </div>
          )}
          <div className="lg:min-h-[600px] flex flex-col justify-center w-full lg:w-4/12">
            {/* <UserInformation /> */}
            <AnalysePresentation />
          </div>
          <div className="w-0.5 min-h-[600px] bg-gray-100 lg:flex hidden" />
          {/* <div className="w-full h-0.5 bg-gray-100 lg:hidden flex mt-7 lg:mt-0" /> */}
          <AnalyseLoader />
        </ContainerEstimation>
      </Basic>
    </>
  );
};

export default index;
