import React from "react";
import { Route, Switch } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";



function App() {
  return (
    <div>
      <Switch >
        <Route path="/signin" component={SignIn} exact/>
        <Layout>
          <Route path="/home" component={Home} exact/>
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
