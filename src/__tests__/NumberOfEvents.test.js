// src/__tests__/NumberOfEvents.test.js

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={jest.fn()} />
    );
  });

  test("renders input for number of events", () => {
    const eventsTextBox = NumberOfEventsComponent.queryByRole("textbox");
    expect(eventsTextBox).toBeInTheDocument();
    expect(eventsTextBox).toHaveClass("number");
  });

  test("default value is 32", () => {
    const input = NumberOfEventsComponent.queryByRole("textbox");
    expect(input.value).toBe("32");
  });

  test("input value changes when user types", async () => {
    const user = userEvent.setup();
    const eventsTextBox = NumberOfEventsComponent.queryByRole("textbox");
    await user.type(eventsTextBox, "{backspace}{backspace}10{enter}");
    expect(eventsTextBox.value).toBe("10");
  });
});
