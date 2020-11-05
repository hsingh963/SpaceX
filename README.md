## SpaceX Launch Programs :rocket:

- One stop page for the SpaceX launches
- Uses the official API to fetch the updated data

- Compatible with all major browsers (IE8+) and mobile devices
- Visit https://spacex-e5723.web.app/

Project Structure
-------------

###Home Component

- It is the parent component.
- Uses @Input and @Output properties to communicate with its child component i.e NavBar component


###Card Component

- Dumb component used to render the api response as card.
- Uses @Input to get the data and renders it

###Navbar Component

- Used to filter the data depending on the user input and hence triggering the new API request

###Data Service

- Used to fetch the data from the outside world.
- Uses Dependency Injection to maintain a single instance across the application (Singleton pattern)

###Run Locally

- Download the repo
- run **npm i**  to install dependencies
- run **ng serve**  to run application locally
- use http://localhost:4200/ to view application on any brower