## App Description

This app enables a user to view events by city.

## Technical details

- The app is built with Create React App with an integration with gh-pages.
- Serverless functions are used to 1. Send the user an e-mail confirmation upon registration 2. Authenticate the users through Google OAuth 3. Fetch data from the google calendar API when the user requests the information 4. Conduct additional data processing to provide the desired information/format to the user.

## Dependencies

Dev Dependencies: "gh-pages": "^5.0.0"

## User stories

(Example) FEATURE 1: FILTER EVENTS BY CITY
As a user, I should be able to “filter events by city”, so that I can see the list of events that take place in that city
Scenario 1.1.1
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events
Scenario 1.1.2
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed
Scenario 1.1.3
Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
As a user, I should be able to see events with minimal detail by default, so that I can scan a higher number of events without being overwhelmed by details.
Scenario 2.1.1: Given the main page is open, when the user scrolls, they will see only minimal information about the event.
As a user, I should be able to click on an event and expand it, so that I can see more detail about it.
Scenario 2.2.1: Given the user has not clicked on an event yet, when the user clicks on the event, they will see additional detail about the event.
As a user, I should be able to click the event again to hide the additional detail, so that I can use other features without too much detail distracting me.
Scenario 2.3.1: Given the user has clicked on an event, when the user clicks the event again, the event will collapse and the additional detail will no longer show.

FEATURE 3: SPECIFY NUMBER OF EVENTS
As a user, by default I should see 32 events, so that I see enough options to remain engaged but am not overwhelmed.
Scenario 3.1.1: Given the main page is open, when the user scrolls, they will see 32 events by default.
As a user, I can change the number of default events I see, so that I can choose either less or more according to my preference.
Scenario 3.2.1: Given the settings view is open, when the user is on the page, they will be able to select “Change number of events shown.”
Scenario 3.2.2: Given the user selected “change number of events shown,” when the user selects a number, they will see that number of events shown to them when they return to the main page.

FEATURE 4: USE THE APP WHEN OFFLINE
As a user, I can navigate the app using cached data, so that I can access the app when offline.
Scenario 4.1.1: Given the user is offline, when the user uses the app, they will be able to access all features using cached data.
Scenario 4.1.2: Given the user is offline, when the user opens the app, they will see a notification informing them that data may be out of date because they are offline.
As a user, when I change the city/time range, I will see an error that I cannot load more information when offline, so that I understand why new information is not loading.
Scenario 4.2.1: Given the user is offline, when the user types to change the city/time, they will see a warning that they cannot change city/time when offline.
Scenario 4.2.2: Given the user is offline, when the user changes the city/time, they will receive an error that new data cannot load while offline, and they will return to the already loaded city/time.
FEATURE 5: DATA VISUALIZATION
As a user, I see a chart displaying number of events in each city, so that I can compare the number of events between cities.
Scenario 5.1.1: Given the user has not searched for a city, when they look at the main page, they will see a chart comparing the number of events in each city.
