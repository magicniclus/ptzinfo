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
      className={`bg-white px-4 py-3 w-[250px] border rounded-xl cursor-pointer transition-all duration-100 flex justify-between items-center hover:shadow-lg ${
        selected ? "shadow-md" : null
      }`}
      style={{ borderColor: "#3b82f6", marginRight: props.margin }}
    >
      {/* <div className={`${type === "maison" ? "lg:w-16 w-16" : "lg:w-12 w-10"}`}>
        <img src={`/${type === "gironde" ? "cardTest.png" : "cardTest.png"}`} />
      </div> */}
      <p className=" lg:text-normal text-center" style={{ color: "#3b82f6" }}>
        {type === "gironde" ? "Gironde" : type}
      </p>
      <div className="relative w-5 h-5 bg-gray-200 rounded-full">
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
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
