import React from "react";
import {renderToString} from "react-dom/server";
import {StaticRouter} from "react-router-dom";
import Routes from "../Routes";

export const render = (req)=>{
  const content = renderToString((
    <StaticRouter location={req.path}>
      {Routes}
    </StaticRouter>
  ));
  return `
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
        <script src="/index.js"></script>  
      </body>
    </html>
  `
}