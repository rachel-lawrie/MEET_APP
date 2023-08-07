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

  // Create a new date from the "created" timestamp
  const createdDate = new Date(event.created);

  // Format the date into a more readable format
  const formattedDate = `${createdDate.getDate()}/${
    createdDate.getMonth() + 1
  }/${createdDate.getFullYear()} ${createdDate.getHours()}:${createdDate.getMinutes()}`;

  return (
    <>
      <li className="event">
        <h2>{event.summary}</h2>
        <p>{formattedDate}</p>
        <p>{event.location}</p>
        {showDetails ? (
          <div className="details">
            <p>{event.description}</p>
            <p>
              <a href={event.htmlLink}>Link</a>
            </p>
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
