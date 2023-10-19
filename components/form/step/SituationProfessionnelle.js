import React, { useEffect, useState } from "react";
import CardWithImg from "../cards/CardWithImg";
import { useDispatch } from "react-redux";
import Select from "../selected/Select";

const SituationProfessionnelle = () => {
  const options = [
    "CDI",
    "CDD",
    "Intérimaire",
    "Chef d'entreprise",
    "Libéral",
    "Titulaire",
    "Chomage",
    "Contractuel",
    "Retraité",
    "Autre",
  ];

  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    dispatch({
      type: "SET_CLIENT_INFORMATION",
      payload: { situationProfessionnelle: selectedType },
    });
  }, [selectedType]);
  return (
    <>
      <h2
        className="text-2xl font-light lg:my-0 my-5"
        style={{ color: "#3b82f6" }}
      >
        Vous êtes :
      </h2>
      <div className="flex flex-col">
        <Select options={options} onChange={setSelectedType} />
      </div>
    </>
  );
};

export default SituationProfessionnelle;
