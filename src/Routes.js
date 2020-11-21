import React from "react";
import {Route} from "react-router-dom";
import { Home, Login } from "./containers";

export default (
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login} />
  </div>
)
