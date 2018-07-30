#What's this project?
It's a scaffold that integrates the following components:
1 ES2015 + babel(enable ES2015 features).
2 React + babel(enable JSX and other React.js related features).
3 Webpack + babel loaders(use webpack to automate babel transpilers).
4 Webpack + various assets loaders(e.g., css, less, postcss, images, urls and so on...).
5 Express.js, as a Http Web Server to serve either static files,
or compiled source codes in memory.
6 Webpack + webpack-dev-middleware, to compile and serve compiled
files in memory to Express.js.
7 Webpack + webpack-hot-middleware, to connect webpack-dev-middle
with client(the browser). And when the source codes update, it will
notify the client to update the changed modules(instead of a full
page reload).
8 antd, as the UI layer and component libraries.
9 redux, as the state management library.
10 redux-router, as the router library.
