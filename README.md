## Table of Contents

- [Short Description](#short-description)
- [Project Dependencies](#project-dependencies)
- [Project Structure](#folder-structure)
- [Available Scripts](#available-scripts)


## Short Description
The objective of the project is to create a simple library in vanilla JavaScript to manage a map in the browser, using a third-party library below to render the map (like Leaflet and D3).


## Project Dependencies

Development dependencies:

```
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.4",
    "babel-preset-es2015": "^6.24.1",
    "chai": "^4.1.2",
    "dotenv": "^5.0.1",
    "jsdom": "^11.6.2",
    "jsdom-global": "^3.0.2",
    "mocha": "^5.0.2",
    "uglifyjs-webpack-plugin": "^1.2.2",
    "webpack": "^4.1.0",
    "webpack-cli": "^2.0.10",
    "webpack-dev-server": "^3.1.0"
  }
```

### Testing the library

* **Mocha**, is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.

* **Chai**, is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

* **jsdom** is a pure-JavaScript implementation of many web standards, notably the WHATWG DOM and HTML Standards, for use with Node.js.


## Project Structure

The library is located in the "src" folder. The project has the following contents:

```
vanilla-map
    |- build
        |- ...
    |- node_modules
        |- ...
    |- src
        |- App.es6
    |- test
        |- index.test.js
        |- mocha.opts
    |- .babelrc
    |- .env
    |- .gitignore
    |- index.html
    |- package-lock.json
    |- package.json
    |- README.md
    |- webpack.config.js

```



## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode. Open [http://localhost:8080](http://localhost:8080) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.


### `npm run build`

Builds the app for production to the `build` folder. The app is ready to be deployed!
