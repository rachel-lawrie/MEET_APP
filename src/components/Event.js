// src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  const handleItemClicked = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails); // to hide the details
  };

  return (
    <>
      <li>
        <div>{event.summary}</div>
        <div>{event.created}</div>
        <div>{event.location}</div>
        {showDetails ? (
          <div className="details">
            <div>{event.htmlLink}</div>
            <div>{event.description}</div>
            <button className="HideDetailsButton" onClick={handleItemClicked}>
              hide details
            </button>
          </div>
        ) : null}
      </li>
      <button className="DetailsButton" onClick={handleItemClicked}>
        show details
      </button>
    </>
  );
};

export default Event;
