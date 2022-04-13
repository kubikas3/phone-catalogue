import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PhonesPage } from "./pages/PhonesPage";
import { BrandsPage } from "./pages/BrandsPage";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.root}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/phones">
            <BrandsPage />
          </Route>
          <Route path="/phones/:brand">
            <PhonesPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
