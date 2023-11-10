import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Select from "../selected/Select";

const Projet = () => {
  const options = ["Je recherche un bien", "J'ai déjà acquis un bien", "Autre"];

  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    dispatch({
      type: "SET_CLIENT_INFORMATION",
      payload: { projet: selectedType },
    });
  }, [selectedType]);

  return (
    <>
      <h2
        className="text-2xl font-light lg:my-0 my-5"
        style={{ color: "#3b82f6" }}
      >
        Où en êtes vous dans votre projet ?
      </h2>
      <div className="flex flex-col">
        <Select options={options} onChange={setSelectedType} />
      </div>
    </>
  );
};

export default Projet;
