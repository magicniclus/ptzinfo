import React, { useEffect, useState } from "react";
import CardsWithBigImg from "../cards/CardsWithBigImg";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const AppartementMaison = () => {
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
      payload: { type: selectedType },
    });
  }, [selectedType]);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/estimation`);
  };

  return (
    <div className="w-full lg:w-6/12 flex flex-col mb-10 lg:mb-3 ">
      <h2
        className="text-2xl font-light lg:my-0 mt-5"
        style={{ color: "#3b82f6" }}
      >
        Quel type de bien souhaitez-vous acquerir ?
      </h2>
      <form className="flex flex-col items-start mt-10" onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          {["Maison", "Appartement"].map((type, idx) => (
            <div className={"mt-5"}>
              <CardsWithBigImg
                key={type}
                type={type}
                onSelect={setSelectedType}
                typeSelected={selectedType}
                margin="35px"
              />
            </div>
          ))}
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

export default AppartementMaison;
