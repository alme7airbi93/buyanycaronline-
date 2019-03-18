import App from '../common/containers/App';
import { Provider } from 'react-redux';
import React from 'react';
import configureStore from '../common/store/configureStore';
import express from 'express';
import { fetchCounter } from '../common/api/counter';
import qs from 'qs';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    fetchCounter(apiResult => {
      // Read the counter from the request, if provided
      const params = qs.parse(req.query);
      const counter = parseInt(params.counter, 10) || apiResult || 0;

      // Compile an initial state
      const preloadedState = { counter };

      // Create a new Redux store instance
      const store = configureStore(preloadedState);

      // Render the component to a string
      const markup = renderToString(
        <Provider store={store}>
          <App />
        </Provider>
      );

      console.log(
         {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.FIREBASE_DATABASE_URL,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        })

      // Grab the initial state from our Redux store
      const finalState = store.getState();

      res.send(`<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1">
	      <meta name="viewport" content="width=device-width, initial-scale=1">

	      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
	      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.2/css/bootstrap-select.min.css">

	      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Exo+2%3A400%2C300%2C500%2C600%2C700%7COpen+Sans%3A300%2C400%2C700&amp;subset=latin%2Clatin-ext&amp;ver=1.0.2" type="text/css" media="all">

	    <link rel="stylesheet" type="text/css" media="all" href="../../public/style.css">
	    <title>Buyanycaronline: Home</title>
        ${assets.client.css
          ? `<link rel="stylesheet" href="${assets.client.css}">`
          : ''}
          ${process.env.NODE_ENV === 'production'
          ? `<script src="${assets.client.js}" defer></script>`
          : `<script src="${assets.client.js}" defer crossorigin></script>`}
    </head>
    <body>
        <div id="root">${markup}</div>
        <script>
          window.__PRELOADED_STATE__ = ${serialize(finalState)}
        </script>
    </body>
</html>`);
    });
  });

export default server;
