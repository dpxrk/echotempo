import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let profileButton;
  if (sessionUser) {
    profileButton = <ProfileButton user={sessionUser} />;
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
    <div>
      <nav>
        <div>{isLoaded}</div>
        <ul className="nav-links">
          <li>
            <Link className="homeLink" to="/home">
              EchoTempo
            </Link>
          </li>
          <li>
            <a className="settings-button">{profileButton}</a>
          </li>
        </ul>
      </nav>
      <div className="audio-player">{audioPlayer}</div>
    </div>
  );
}

export default Navigation;
