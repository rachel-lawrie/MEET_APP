// src/__tests__/Event.test.js

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Event from "../components/Event";
import { getEvents } from "../api";

describe("<Event /> component", () => {
  let EventComponent;
  let allEvents;

  beforeEach((done) => {
    const fetchEvents = async () => {
      allEvents = await getEvents();
      // console.log(allEvents);
      EventComponent = render(<Event event={allEvents[0]} />);
      done();
    };
    fetchEvents();
  });

  test("has an element for the event's title", () => {
    expect(EventComponent.getByText(allEvents[0].summary)).toBeInTheDocument();
  });

  test("has an element for the event's start time", () => {
    expect(EventComponent.getByText(allEvents[0].created)).toBeInTheDocument();
  });

  test("has an element for the event's location", () => {
    expect(EventComponent.getByText(allEvents[0].location)).toBeInTheDocument();
  });

  test("renders event details button with the title (show details)", () => {
    expect(EventComponent.getByText("show details")).toBeInTheDocument();
  });

  test("by default, event details should be hidden", () => {
    const details = EventComponent.container.querySelectorAll(".details");
    expect(details.length).toBe(0);
  });

  test("show details when the user clicks the show details button", async () => {
    const user = userEvent.setup();
    const detailsButton = EventComponent.getByText("show details");
    await user.click(detailsButton);
    const details = EventComponent.container.querySelector(".details");
    expect(details).toBeInTheDocument();
  });

  test("hide details when the user clicks the hide details button", async () => {
    const user = userEvent.setup();
    const detailsButton = EventComponent.getByText("show details");
    await user.click(detailsButton);
    const hideDetailsButton = EventComponent.getByText("hide details");
    await user.click(hideDetailsButton);
    const details = EventComponent.container.querySelector(".details");
    expect(details).not.toBeInTheDocument();
  });
});
