Chicago Women Developers Intro to React
=====================

Scaffolding adapted from [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate).

The minimal dev environment to enable live-editing React components.

### Reading Materials (in order of importance)
- [Getting Started guide for React](https://facebook.github.io/react/docs/getting-started.html)
- [Primer on forms](http://blog.iansinnott.com/managing-state-and-controlled-form-fields-with-react/)
- [React component lifecycle](https://facebook.github.io/react/docs/component-specs.html)
- [Promises](https://spring.io/understanding/javascript-promises)

### Prerequisites
- Node.js (and NPM). You can install it fairly easily [here](https://nodejs.org/en/).
  Linux can probably install node with `apt-get install`.
  **If you already have node installed, make sure you have at least version 4!**
- (If you're on mac) [Xcode](https://developer.apple.com/xcode/download/) must be installed in order
  for certain node packages to work. Download Xcode from the above link and then open it once. When
  it asks to install some additional requirements, say yes.

### Running the server
```
npm install
npm start
open http://localhost:3000
```

### Linting

This boilerplate project includes React-friendly ESLint configuration.

```
npm run lint
```

### Examples
The following examples will lead us through the steps needed to have
a nearly fully functioning budget-tracking application.

**The server is configured for part1. As we progress, modify the variable `basePath` in webpack.config.js to the appropriate section.**

[Part 1](https://github.com/yjkogan/example-budget-tracking-app/wiki/Part-1): Learn the basics of creating a React component and displaying an array of elements.

[Part 2](https://github.com/yjkogan/example-budget-tracking-app/wiki/Part-2): Learn how to accept user input in React.

[Part 3](https://github.com/yjkogan/example-budget-tracking-app/wiki/Part-3): Learn about the component Life Cycle and working with AJAX requests.

[Part 4](https://github.com/yjkogan/example-budget-tracking-app/wiki/Part-4): Explore and extend a "real-world" example budget-app.

### Dependencies

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)

### Resources

* [Demo video](http://vimeo.com/100010922)
* [react-hot-loader on Github](https://github.com/gaearon/react-hot-loader)
* [Integrating JSX live reload into your workflow](http://gaearon.github.io/react-hot-loader/getstarted/)
* [Troubleshooting guide](https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md)
* Ping dan_abramov on Twitter or #reactjs IRC
