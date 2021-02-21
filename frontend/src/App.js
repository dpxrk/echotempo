import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignUpFormPage";
import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";
import InitialLandingPage from "./components/InitialLandingPage";
import HomePage from "./components/HomePage";
import { useSelector } from "react-redux";

// const findPath = () => {
//   const location = useLocation();
//   useEffect(() => {
//     const currentPath = location.pathname;
//   }, [location]);
//   return currentPath;
// };

function App() {
  const sessionUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  if (!sessionUser) {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <InitialLandingPage />
          </Route>
          <Route path="/home/login">
            <LoginFormPage />
          </Route>
          <Route path="/home/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      </>
    );
  } else {
    <>
      <Navigation isLoaded={isLoaded} />
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
      </Switch>
    </>;
  }
}

export default App;
