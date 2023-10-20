import React, { useState, useEffect } from "react";
import Basic from "../../../layout/Basic";
import ContainerEstimation from "../../../layout/ContainerEstimation";
import { useSelector } from "react-redux";
import Avantages from "../../../components/Avantages";
import FormulaireFinal from "../../../components/form/FormulaireFinal";
import Loader from "../../../components/loader/Loader";
import { useRouter } from "next/router";

const index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const getUserType = useSelector((state) => state?.clientInfomation?.type);

  const router = useRouter();

  useEffect(() => {
    if (getUserType) {
      setIsLoading(true);
    }
  }, [getUserType]);

  useEffect(() => {
    setTimeout(() => {
      if (!getUserType) {
        router.push({
          pathname: "/",
        });
      }
    }, 1000);
  }, [getUserType]);

  return (
    <>
      <Basic height="min-h-[calc(100vh-78px)]">
        <ContainerEstimation>
          {!isLoading && (
            <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-10">
              <Loader />
            </div>
          )}
          <div className="lg:min-h-[600px] lg:flex flex-col justify-center w-full lg:w-4/12 hidden">
            <Avantages />
          </div>
          <div className="w-0.5 min-h-[600px] bg-gray-100 lg:flex hidden" />
          {/* <div className="w-full h-0.5 bg-gray-100 lg:hidden flex lg:mt-0" /> */}
          <div className="w-full lg:w-6/12 min-h-[400px] lg:min-h-[600px] flex flex-col justify-center items-start lg:items-center lg:mt-0 mt-10">
            <h2 className="text-xl lg:text-center text-start text-blue-500">
              Dernière étape !
            </h2>
            <h1 className="lg:text-center text-xs lg:my-5 my-7 text-gray-700">
              Saisissez vos coordonnées afin de visualiser votre estimation
              gratuite.
            </h1>
            <FormulaireFinal />
          </div>
          <div className="lg:min-h-[600px] flex flex-col justify-center w-full lg:w-4/12 lg:hidden">
            <Avantages />
          </div>
        </ContainerEstimation>
      </Basic>
    </>
  );
};

export default index;
