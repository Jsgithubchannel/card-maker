import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./app.module.css";
import styles from "./app.module.css";
import Login from "./components/login/Login";
import Maker from "./components/maker/Maker";

function App({ FileInput, authService, cardRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker
              FileInput={FileInput}
              authService={authService}
              cardRepository={cardRepository}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
