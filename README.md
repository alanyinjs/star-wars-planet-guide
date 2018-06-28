# Star Wars Planet Guide

This project was designed and created as part of the interview process for [Checkbox](https://www.checkbox.ai/). The aim of this project is to allow Star Wars fans to browse and learn about the different planets in the Star Wars Expanded Universe (EU).

This project is deployed [here](https://star-wars-planet-guide.herokuapp.com/).

## Functionality
This is a web application that contains the following features:
- The home page contains a table with all planets available in the galaxy, including their names, population and terrain details.
- Users can sort planets by name and/or population.
- Users can filter planets by name. The number of results will also be displayed on the page.
- Users can view more details about a planet by clicking on the button located in its corresponding row. The displayed planet details inlcude all planet-related data and a list of residents.

## Technology
- Code: `React (16.4.0), Javascript (ES2017 - Babel), Sass`
- Build and dev tools: `node-sass (4.9.0)`, [Create-React-App](https://github.com/facebook/create-react-app)
- Styling: `Bootstrap (4.1.0), BEM, 7-1 pattern`
- Deployment: `Heroku CLI`
## Development
This project is using `npm` for dependency management.  Make sure `npm` is installed on your machine.
- `npm install`
- `npm start` - This command will run dev-server on `http://localhost:3000/`
- `npm run compile:sass` - This command will compile Sass code into a single CSS stylesheet.
## API
This project is based on the SWAPI public API available at https://swapi.co. This URL is a completely open API. No authentication is required to query and get data. However this also means that only the GET http method can be performed. The base URL for SWAPI is `https://swapi.co/api/` and this project makes use of the `/planets` and `/people` endpoints.

### Assumptions
We have assumed that the size of data will grow gentally in the foreseeable future. This is a reasonable assumption, considering it has been 41 years since Star Wars' first release and there is only 61 planets and 87 characters at this time. 

### Considerations
The `/planets` route is paginated and only returns 10 pieces of planet data per request. The API also does not support server-side sorting, meaning that we are limited to sorting and filtering data on the front-end. Therefore this application is designed to load all the data to the front-end when the app is mounted, rather than using pagination or infinite scroll to progressively load data.

While fetching data in the `componentDidMount()` lifecycle event of the `PlanetView` component is an option (and is common practice), the long loading-time means users will have to wait for data to render the view everytime they click on the home page (even when they return from the planet detail page). 

When tested on Postman, each API request generally takes 2-3s to perform. As there are 61 planets in total, loading the initial planet data will sometimes take over 10s. To enhance user experience the data loading process was designed to happen before the AppRoute was mount. While initial data is being loaded, users will see a landing page with a spinner. 

The above method also has drawbacks. When any page is refreshed, the app will be unmounted and re-mounted, triggering data acquisition. However the conditional rendering currently addopted in this application means that we have to wait until the data is fetched before the page can be rendered. In particular, this will be an issue for pages such as 'About' or 'Help', as it is unreasonable to keep users waiting for 10s just to load a simple page.

#### Planet ID
The returned data does not include a planet ID. However planet ID is required for fetching individual planet information through `/planet/:id`. The returned data was reformatted to include the `ID` attribute (which was derived from the `url` attribute of the returned data).

## Future Improvement
- To solve the issue associated with refresh, mentioned in Considerations section, fetching data and rendering the AppRouter (or App) need to be decoupled. 
- Error handling could be improved by incorporating a pop-up modal (rather than alert) and asking user input to decide the next step (i.e. whether to perform another API request).
- More components (such as buttons) need to be extracted(I have only extracted LoadingSpinner at the moment), as a parent component does not need to know the details of such components (how they are wrapped etc.), other than passing props down.
- Improve the styling of existing components.
- The application needs to be optimised for mobile device users. This includes setting break-points and use Media Queries.

## FAQs
- Why didn't you use Redux?
Answer: Although user interactions are present in this application, there is no deeply nested components or complicated interactions that involve communication between components beyond existing hierachy. Therefore, for simplicity, Redux was not chosen to develop this application. For the Redux project I am working on, please go to this repo: [Stockify](https://github.com/alanyin0322/stokify).
