import React, { useEffect, useState } from "react";
import InputNumber from "../inputs/InputNumber";
import { useDispatch } from "react-redux";

const NbrPartFoyer = () => {
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    dispatch({
      type: "SET_CLIENT_INFORMATION",
      payload: { nbrDePart: selectedType },
    });
  }, [selectedType]);
  return (
    <>
      <h2
        className="text-2xl font-light lg:my-0 my-5"
        style={{ color: "#3b82f6" }}
      >
        Nombre de part dans votre foyer fiscal :
      </h2>
      <div className="flex flex-col">
        <InputNumber onChange={setSelectedType} type="Part" />
      </div>
    </>
  );
};

export default NbrPartFoyer;
