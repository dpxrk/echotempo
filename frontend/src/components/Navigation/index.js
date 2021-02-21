import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

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
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
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
