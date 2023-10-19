import React, { useEffect, useState } from "react";
import CardWithImg from "./cards/CardWithImg";

const FirstStep = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (selectedType) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [selectedType]);

  return (
    <div className="w-full lg:w-6/12 flex flex-col mb-10 lg:mb-3 ">
      <h2 className="text-lg text-gray-700 w-8/12">
        Dans quelle souhaitez-vous acheter votre résidence principale ?
      </h2>
      <form className="flex flex-col items-start mt-10">
        <div className="flex">
          <CardWithImg
            onSelect={setSelectedType}
            typeSelected={selectedType}
            type="gironde"
          />
          <div className="ml-5">
            <CardWithImg
              type="charente maritime"
              onSelect={setSelectedType}
              typeSelected={selectedType}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={disabled}
          className={`text-white py-2 px-8 rounded-lg transition ease-in-out duration-100 mt-10 ${
            !disabled ? "bg-blue-500" : "hover:shadow-md  bg-blue-500/60"
          }`}
        >
          Estimer
        </button>
      </form>
    </div>
  );
};

export default FirstStep;
