# Github Searcher
A Github Search Engine App where you can search for Github Users or Repositories.

## Live: [github-searcher-mak.web.app](https://github-searcher-mak.web.app/)

## High Level Solution and Decision
I've made this app a `Progressive Web App (PWA)`. As we already know about the features of PWA but specially I took this decision to fulfill the requirments of `less API calls`. It will always look for `cache first` if the requested data is found in cache then it will be sent to the client, but If there would be no such data found then it will request and call the API also the fetched data will be cached for future use.

### Reason
Considering the Performance of Web App this is the best approach to handle less api calling and fast data loading instead of persisting data manually. Although here are some PWA features listed below.

`Performance`: Extreme fast loading like native apps.

`Connectivity`: Both offline and on low-quality networks.

`Behavior`: Native app like interface and installs on a single tap.

`Notifications`: Get push notifications on your device.

`Responsive and Browser Compatible`: Work with all browsers and are compatible with any device, regardless of screen size and other specifications.

`Auto-Update`: Update automatically and stay fresh.

## Available Scripts

In the project directory, you can run:

### `yarn` or `npm install`

Installs all dependencies listed in package.json file.

### `yarn start` or `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build` or `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
