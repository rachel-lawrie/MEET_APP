// src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  const handleItemClicked = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails); // to hide the details
    if (buttonText === "Show Details") {
      setButtonText("Hide Details");
    } else {
      setButtonText("Show Details");
    }
  };
  const [buttonText, setButtonText] = useState("Show Details");

  return (
    <>
      <li className="event">
        <div>{event.summary}</div>
        <div>{event.created}</div>
        <div>{event.location}</div>
        {showDetails ? (
          <div className="details">
            <p>{event.htmlLink}</p>
            <p>{event.description}</p>
          </div>
        ) : null}
        <button className="DetailsButton" onClick={handleItemClicked}>
          {buttonText}
        </button>
      </li>
    </>
  );
};

export default Event;
