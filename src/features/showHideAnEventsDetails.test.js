import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
// import { getEvents } from "../api.js";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  let AppComponent; // Define a variable to store the rendered component

  beforeEach(() => {
    // Run this setup before each test case
    AppComponent = render(<App />);
  });

  test("An element is collapsed by default.", ({ given, when, then }) => {
    given("the user has not clicked on details button", () => {});

    when("the user opens the app", () => {});

    then("the event elements are collapsed by default.", async () => {
      const AppDOM = AppComponent.container.firstChild;

      await waitFor(() => {
        const detailsElements = AppDOM.querySelectorAll(".details");
        expect(detailsElements).toHaveLength(0);
      });
    });
  });

  test("User can expand an event to see details.", ({ given, when, then }) => {
    given("the main page is open", async () => {
      const AppDOM = AppComponent.container.firstChild;

      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });
    });

    when("user clicks on details button", async () => {
      const detailsButton = AppComponent.queryAllByText("Show Details")[0];
      const user = userEvent.setup();
      await user.click(detailsButton);
    });

    then("the element expands to show details.", async () => {
      const AppDOM = AppComponent.container.firstChild;

      await waitFor(() => {
        const detailsElements = AppDOM.querySelectorAll(".details");
        expect(detailsElements).toHaveLength(1);
      });
    });
  });

  test("User can collapse an event to hide details.", ({
    given,
    and,
    when,
    then,
  }) => {
    given("the user has clicked show details", async () => {
      const AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });
    });

    and("the element is expanded", async () => {
      const detailsButton = AppComponent.queryAllByText("Show Details")[0];
      const user = userEvent.setup();
      await user.click(detailsButton);
    });

    when("the user selects Hide Details", async () => {
      const hideDetailsButton = AppComponent.queryAllByText("Hide Details")[0];
      const user = userEvent.setup();
      await user.click(hideDetailsButton);
    });

    then("the element should collapse.", async () => {
      const AppDOM = AppComponent.container.firstChild;

      await waitFor(() => {
        const detailsElements = AppDOM.querySelectorAll(".details");
        expect(detailsElements).toHaveLength(0);
      });
    });
  });
});
