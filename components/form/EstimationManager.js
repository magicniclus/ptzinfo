import React from "react";
import ProgressBar from "./ProgressBar";
import Step from "./Step";

const EstimationManager = () => {
  return (
    <div className="w-full lg:w-6/12 flex flex-col">
      <ProgressBar />
      <Step />
    </div>
  );
};

export default EstimationManager;
