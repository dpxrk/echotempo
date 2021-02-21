import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import AudioPlayer from "react-h5-audio-player";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <NavLink to="/home/login">Log In</NavLink>
        <NavLink to="/home/signup">Sign Up</NavLink>
      </>
    );
  }

  let audioPlayer = (
    <div className="bottomNavBar">
      <AudioPlayer
        src="http://example.com/audio.mp3"
        showSkipControls
        showJumpControls
        showFilledProgress
        autoPlayAfterSrcChange
        volummeJumpStep
        progressJumpSteps
        defaultCurrentTime
        defaultDuration
      />
    </div>
  );

  return (
    <>
      <div className="navbar">{isLoaded && sessionLinks}</div>
      <div>{audioPlayer}</div>;
    </>
  );
}

export default Navigation;
