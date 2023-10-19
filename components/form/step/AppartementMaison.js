import React, { useEffect, useState } from "react";
import CardWithImg from "../cards/CardWithImg";
import { useDispatch } from "react-redux";

const AppartementMaison = () => {
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    dispatch({
      type: "SET_CLIENT_INFORMATION",
      payload: { type: selectedType },
    });
  }, [selectedType]);

  return (
    <>
      <h2
        className="text-2xl font-light lg:my-0 my-5"
        style={{ color: "#3b82f6" }}
      >
        Quel type de bien souhaitez-vous acquerir ?
      </h2>
      <div className="flex flex-col">
        {["Maison", "Appartement"].map((type, idx) => (
          <div className={idx === 1 && "mt-3"}>
            <CardWithImg
              key={type}
              type={type}
              onSelect={setSelectedType}
              typeSelected={selectedType}
              margin="35px"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default AppartementMaison;
