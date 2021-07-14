import React from "react";
import { Route, Switch } from "react-router-dom";
import {Register} from "../pages/Register";






const Routes = (props) => {
  return (
    <section>
      <Switch>

        <Route exact path="/register" component={Register} />

      </Switch>

    
    </section>
  );
};

export default Routes;
