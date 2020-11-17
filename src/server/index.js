import express from "express";
import { renderToString } from "react-dom/server";
import React from "react";
import Home from "../containers/Home";

const app = express();
app.use(express.static('public'))
const content = renderToString(<Home />);

app.get('/',function (req,res) {
  res.send(`
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
  `)
})

app.listen(3000);
