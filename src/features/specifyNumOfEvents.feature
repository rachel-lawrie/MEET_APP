Feature: Specify Number of Events.
 Scenario: User sees 32 events by default.
  Given user hasn’t specified a number of events
  When the user opens the app
  Then the user should see 32 events by default.

 Scenario: User can change number of events shown.
  Given the main page is open
  When the user types 10 and presses enter
  Then the user should receive a list of 10 events.