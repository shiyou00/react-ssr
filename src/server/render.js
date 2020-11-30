import React from "react";
import {renderToString} from "react-dom/server";
import {StaticRouter} from "react-router-dom";
import {matchRoutes, renderRoutes} from "react-router-config";
import Routes from "../Routes";
import { Provider } from "react-redux";
import {getStore} from "../store";

export const render = (req,res)=>{
  const store = getStore();

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    const component = route.component;
    return component.getInitialData ? component.getInitialData(store) : null;
  });

  Promise.all(promises).then(()=>{
    const content = renderToString((
      <Provider store={store}>
        <StaticRouter location={req.path}>{renderRoutes(Routes)}</StaticRouter>
      </Provider>
    ));
    res.send( `
      <!doctype html>
      <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"
                  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>React SSR</title>
        </head>
        <body>
          <div id="root">${content}</div>
          <script>
            window.INITIAL_STATE = ${JSON.stringify(store.getState())}
          </script>
          <script src="/index.js"></script>  
        </body>
      </html>
    `)
  })
}
