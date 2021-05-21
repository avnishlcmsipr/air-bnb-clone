import { Route, Switch } from 'react-router';
import React from "react";
import { Home } from "./Components/Home";
import {Rooms} from "./Components/Rooms"
import {Footer} from "./Components/Footer"
export const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" component={Rooms} />
      </Switch>
      <Footer />
    </div>
  );
};
