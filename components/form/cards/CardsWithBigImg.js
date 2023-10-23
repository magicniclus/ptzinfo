import React, { useState, useEffect } from "react";

const HouseSvg = () => (
  <svg
    width="100%"
    height="auto"
    viewBox="0 0 57 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="7.64648" y="24" width="42" height="24" fill={`#3b82f6`} />
    <path d="M28.1458 0L56.2917 27H0L28.1458 0Z" fill={`#3b82f6`} />
    <rect x="35.6465" y="36" width="10" height="7" fill="white" />
    <rect x="13.6465" y="36" width="10" height="12" fill="white" />
  </svg>
);

const ImmeubleSvg = () => (
  <svg
    width="100%"
    height="auto"
    viewBox="0 0 37 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="36.6545" height="48" fill={`#3b82f6`} />
    <rect
      x="6.10938"
      y="6.10907"
      width="8.72727"
      height="6.10909"
      fill="white"
    />
    <rect
      x="6.10938"
      y="15.7091"
      width="8.72727"
      height="6.10909"
      fill="white"
    />
    <rect
      x="6.10938"
      y="25.3091"
      width="8.72727"
      height="6.10909"
      fill="white"
    />
    <rect
      x="21.8184"
      y="6.10907"
      width="8.72727"
      height="6.10909"
      fill="white"
    />
    <rect
      x="21.8184"
      y="15.7091"
      width="8.72727"
      height="6.10909"
      fill="white"
    />
    <rect
      x="21.8184"
      y="25.3091"
      width="8.72727"
      height="6.10909"
      fill="white"
    />
    <rect
      x="13.9629"
      y="37.5273"
      width="8.72727"
      height="10.4727"
      fill="white"
    />
  </svg>
);

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
      className={`relative bg-white px-4 py-3 w-[130px] h-32 border rounded-xl cursor-pointer transition-all duration-100 flex justify-between items-center flex-col hover:shadow-lg ${
        selected ? "shadow-md" : null
      }`}
      style={{ borderColor: "#3b82f6", marginRight: props.margin }}
    >
      <div className={`${type === "Maison" ? "lg:w-16 w-16" : "lg:w-12 w-10"}`}>
        {type === "Maison" ? <HouseSvg /> : <ImmeubleSvg />}
      </div>
      <p className=" lg:text-normal text-center" style={{ color: "#3b82f6" }}>
        {type === "gironde" ? "Gironde" : type}
      </p>
      <div className="absolute top-2 right-2 w-5 h-5 bg-gray-200 rounded-full flex justify-center items-center">
        <div
          className=" w-4 h-4 rounded-full"
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
