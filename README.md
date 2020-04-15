# Reddit Client

A simple reddit client to browse top posts, done with a modern React stack using hooks for data fetching, routing and redux integration.

Includes CLI Scaffolding for creating components, routes or state slices.

This was bootstrapped with my [hooked-stack](https://github.com/brunomolteni/hooked-stack) project.

## The Steps I took

- There's built in scaffolding for components/pages/slices which take care of connecting everything to make development faster
- Implemented some lambda functions to interact with reddit's API and take charge of auth.
- Implemented Parcel for bundling the frontend as a static page.
- I'm using SWR to take charge of fetching data, which gives a lot of added benefits such as automatic retrying and refetching, caching, simplified syntax as a hook and more.
- For the routing I'm using hookrouter which provides builtin hooks for query params, navigation, url params and more.
- I'm using redux toolkit which takes care of all the redux boilerplate and gives added benefits such as: allows me to use "normal" mutations in the reducers since it uses immer, it comes with thunk built-in for async actions, allows me to organize the reducers in "slices" ( similar to ducks pattern )
- I'm using sessionStorage to persist the redux state between refreshes
- I implemented custom hooks for the components to interact with redux and SWR
- I implemented a responsive layout using modern CSS techniques such as CSS variables and flexbox, and used CSS modules for organizing the styles.
- I implemented pagination with the params on the URL so you can refresh and still be on the same page

I didn't get to implement the dismiss functionality, but the lambda API proxy was done having this functionality in mind, to use the /hide endpoint and have dismissed posts be persistent across sessions.

## Running the app

First install dependencies

```
npm i
```

To run development server

```
npm start
```

To build for production

```
npm run build
```

To scaffold new components, routes or redux slices. You'll get an interactive prompt to define what you want.

```
npm run new
```

If you already know what you want to create you can make it faster passing the arguments, for example:

```
npm run new component someComponent
```

## Tools used

- react
- redux toolkit
- parcel
- hookrouter
- SWR
- plop
