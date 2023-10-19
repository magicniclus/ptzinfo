import React, { useState, useEffect } from "react";

const CardWithImg = (props) => {
  const typeSelected = props.typeSelected;

  const [selected, setSelected] = useState(false);
  const type = props.type || "gironde";
  const margin = props.margin || "0px";

  const handleClick = () => {
    if (typeSelected !== type) {
      props.onSelect(type);
      setSelected(true);
    } else {
      setSelected(false);
      props.onSelect(null);
    }
  };

  useEffect(() => {
    if (typeSelected === type) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [typeSelected]);
  return (
    <div
      onClick={handleClick} // Ajout de l'événement onClick ici
      className={`relative bg-white px-4 py-2 w-24 lg:w-[115px] border rounded-xl cursor-pointer transition-all duration-100 flex justify-around flex-col items-center hover:shadow-lg ${
        selected ? "shadow-md" : null
      }`}
      style={{ borderColor: "#3b82f6", marginRight: props.margin }}
    >
      <div className={`${type === "maison" ? "lg:w-16 w-16" : "lg:w-12 w-10"}`}>
        <img src={`/${type === "gironde" ? "cardTest.png" : "cardTest.png"}`} />
      </div>
      <p
        className="mt-3 lg:text-normal text-center text-sm"
        style={{ color: "#3b82f6" }}
      >
        {type === "gironde" ? "Gironde" : "Charente-Maritime"}
      </p>
      <div className="w-4 h-4 bg-gray-200 rounded-full absolute top-1 right-1">
        <div
          className="w-3 h-3 rounded-full absolute top-0.5 right-0.5"
          style={{
            backgroundColor: "#3b82f6",
            display: selected ? "" : "none",
          }}
        ></div>
      </div>
    </div>
  );
};

export default CardWithImg;
