Feature: Show/hide event details.
 Scenario: An element is collapsed by default.
  Given the user has not clicked on details button
  When the user opens the app
  Then the event elements are collapsed by default.

 Scenario: User can expand an event to see details.
  Given the main page is open
  When user clicks on details button
  Then the element expands to show details.

 Scenario: User can collapse an event to hide details.
  Given the user has clicked show details
  And the element is expanded
  When the user selects Hide Details
  Then the element should collapse.