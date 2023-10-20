import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/specifyNumOfEvents.feature");

defineFeature(feature, (test) => {
  let AppComponent; // Define a variable to store the rendered component

  beforeEach(() => {
    // Run this setup before each test case
    AppComponent = render(<App />);
  });

  test("User sees 32 events by default.", ({ given, when, then }) => {
    given("user hasn’t specified a number of events", () => {});

    when("the user opens the app", () => {});

    then(/^the user should see (\d+) events by default.$/, async (arg0) => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });
  });

  test("User can change number of events shown.", ({ given, when, then }) => {
    given("the main page is open", async () => {
      await waitFor(() => {
        const AppDOM = AppComponent.container.firstChild;
        const eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList).toHaveLength(32);
      });
    });

    when(/^the user types (\d+) and presses enter$/, async (arg0) => {
      const user = userEvent.setup();
      const AppDOM = AppComponent.container.firstChild;

      const NumEventsDOM = AppDOM.querySelector("#number-of-events");
      const NumEventsInput = within(NumEventsDOM).queryByRole("textbox");
      await user.type(NumEventsInput, "{backspace}{backspace}10{enter}");
    });

    then(/^the user should receive a list of (\d+) events.$/, (arg0) => {
      const AppDOM = AppComponent.container.firstChild;

      const EventListItems = within(AppDOM).queryAllByRole("listitem");
      expect(EventListItems.length).toBe(10);
    });
  });
});
