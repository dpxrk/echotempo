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
  const [songPlaying, setSongPlaying] = useState(false);
  const [songUrl, setSongUrl] = useState("");
  // const [songTitle, setSongTitle] = useState("");
  // const [songArtist, setSongAritst] = useState("");

  const [selectedSong, setSelectedSong] = useState();

  const onClickForNewSong = (songThatWillBeSelected) => (e) => {
    e.preventDefault();
    setSelectedSong(songThatWillBeSelected);
    setSongPlaying(true);
  };

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return sessionUser ? (
    <>
      <Navigation isLoaded={isLoaded} selectedSong={selectedSong} />
      <Switch>
        <Route exact path="/home">
          <HomePage
            songPlaying={songPlaying}
            setSongPlaying={setSongPlaying}
            selectedSong={selectedSong}
            onClickForNewSong={onClickForNewSong}
          />
        </Route>
        <Route path="/home/profile">
          <ProfilePage songPlaying={songPlaying} />
        </Route>
        <Route path="/home/addnewsong">
          <AddNewSongPage songPlaying={songPlaying} />
        </Route>
        <Route path="/user/:songId">
          <SingleSongPage songPlaying={songPlaying} />
        </Route>
        <Route path="/user">
          <SingleUserPage songPlaying={songPlaying} />
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
