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
import AddNewSongPage from "./components/AddNewSongPage";
import ProfilePage from "./components/ProfilePage";
import SingleSongPage from "./components/SingleSongPage";
import SingleUserPage from "./components/SingleUserPage";

// import theSongPlayerItself from "../src/components/songPlayerFunctions/theSongPlayerItself";

// const findPath = () => {
//   const location = useLocation();
//   useEffect(() => {
//     const currentPath = location.pathname;
//   }, [location]);
//   return currentPath;
// };

function App() {
  const sessionUser = useSelector((state) => state.session.user);
  const songs = useSelector((state) => {
    return state.songs.songList;
  });

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return sessionUser ? (
    <>
      <Navigation isLoaded={isLoaded} />
      <Switch>
        <Route exact path="/home" user={sessionUser}>
          <HomePage />
        </Route>
        <Route path="/home/profile" user={sessionUser}>
          <ProfilePage />
        </Route>
        <Route path="/home/addnewsong">
          <AddNewSongPage />
        </Route>
        <Route path="/user/:songId">
          <SingleSongPage songs={songs} />
        </Route>
        <Route path="/user">
          <SingleUserPage />
        </Route>
        <Route>
          <h2> Page Not Found </h2>
        </Route>
      </Switch>
    </>
  ) : (
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
}

export default App;
