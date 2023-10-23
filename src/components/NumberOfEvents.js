import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(32);

  const handleInputChanged = (event) => {
    const inputValue = event.target.value;
    setNumber(event.target.value);
    if (isNaN(inputValue) || inputValue <= 0) {
      setErrorAlert("Only positive numbers allowed");
    } else {
      setErrorAlert("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setNumber(number);
      setCurrentNOE(number);
    }
  };

  const handleFocus = (event) => {};

  return (
    <div id="number-of-events">
      <input
        type="text"
        className="number"
        value={number}
        onChange={handleInputChanged}
        onKeyDown={handleKeyPress}
        onFocus={handleFocus}
      />
    </div>
  );
};

export default NumberOfEvents;
