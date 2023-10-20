import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [number, setNumber] = useState(32);

  const handleInputChanged = (event) => {
    setNumber(Number(event.target.value));
  };

  //evaluate whether this can be simplified - and remove console logs
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("Test: handleInputChanged is called");

      setNumber(number);
      setCurrentNOE(number);
      console.log(number);
    }
  };

  const handleFocus = (event) => {
    console.log("Input field has been focused");
  };

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
