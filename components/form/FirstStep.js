import React, { useEffect, useState } from "react";
import CardWithImg from "./cards/CardWithImg";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const FirstStep = () => {
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (selectedType) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [selectedType]);

  useEffect(() => {
    dispatch({
      type: "SET_CLIENT_INFORMATION",
      payload: { secteur: selectedType },
    });
  }, [selectedType]);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/estimation`);
  };

  return (
    <div className="w-full lg:w-6/12 flex flex-col mb-10 lg:mb-3 ">
      <h2 className="text-lg text-gray-700 w-8/12">
        Dans quelle departement souhaitez-vous acheter votre résidence
        principale ?
      </h2>
      <form className="flex flex-col items-start mt-10" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <CardWithImg
            onSelect={setSelectedType}
            typeSelected={selectedType}
            type="gironde"
          />
          <div className="mt-5">
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
            !disabled ? "bg-blue-500 hover:shadow-md" : "  bg-blue-500/60"
          }`}
        >
          Estimer
        </button>
      </form>
    </div>
  );
};

export default FirstStep;
