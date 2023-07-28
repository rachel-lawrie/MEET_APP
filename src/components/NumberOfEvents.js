import { useState } from "react";

const NumberOfEvents = () => {
  const [number, setNumber] = useState(32);
  return (
    <div id="number-of-events">
      <input
        type="text"
        className="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
    </div>
  );
};

export default NumberOfEvents;
