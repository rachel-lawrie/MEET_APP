import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [number, setNumber] = useState(32);

  const handleInputChanged = (event) => {
    setNumber(Number(event.target.value));
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
