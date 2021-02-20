import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignUpFormPage";
import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";
import InitialLandingPage from "./components/InitialLandingPage";
import HomePage from "./components/HomePage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/" isLoaded={!isLoaded}>
            <InitialLandingPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/home/login">
            <LoginFormPage />
          </Route>
          <Route path="/home/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
