import React from "react";

const InputNumber = (props) => {
  const value = props.value;
  const setValue = props.onChange;
  const type = props.type;
  const placeholder = props.placeholder;

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    if (inputValue === "") {
      setValue(null);
    } else if (Number.isInteger(Number(inputValue))) {
      setValue(parseInt(inputValue, 10));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className="flex max-w-[350px] ">
      <input
        type="number"
        value={value}
        step="1"
        onChange={handleInputChange}
        className="w-[80%] sm:w-[90%] border px-4 py-3 rounded-l-md font-light text-normal outline-none text-gray-700"
        placeholder={placeholder || "Saisir une valeur"}
        style={{ borderColor: "#3b82f6" }}
        onKeyPress={handleKeyPress}
        onWheel={(e) => e.preventDefault()}
      />
      <div
        className="w-[20%] sm:w-[10%] max-w-[50px] flex items-center justify-center rounded-r-md py-2 px-5"
        style={{ backgroundColor: "#3b82f6" }}
      >
        <p className="text-white">
          {
            <div>
              {type ? (
                type
              ) : (
                <>
                  <span>€</span>
                </>
              )}
            </div>
          }
        </p>
      </div>
    </div>
  );
};

export default InputNumber;
