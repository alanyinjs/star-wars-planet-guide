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
## API
This project is based on the SWAPI public API available at https://swapi.co. The 

## Future Improvement

### 

## FAQs
- Why didn't you use Redux?
Answer: Although user interactions are present in this application, there is no deeply nested components or complicated interactions that involve communication between components beyond existing hierachy. Therefore, for simplicity, Redux was not chosen to develop this application. For the Redux project I am working on, please go to this repo: (Stockify)[https://github.com/alanyin0322/stokify].
