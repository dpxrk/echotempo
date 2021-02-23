import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navigation({ isLoaded }) {
  // const audioObj = new Audio(url);
  const sessionUser = useSelector((state) => state.session.user);
  const [song, playingSong] = useState("");

  useEffect(() => {
    
  })

  let profileButton;
  if (sessionUser) {
    profileButton = <ProfileButton user={sessionUser} />;
  }

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
      <div className="audioContainer">
        <audio
          className="bottomAudioBar"
          title="THIS IS THE SONG PLAYING"
          controls
          currentTime
          loop="loop"
          onDurationChange
          src="/songs/2019-06-07_-_Chill_Gaming_-_David_Fesliyan.mp3"
        >
          <p>
            If you are reading this, it is because your browser does not support
            the audio element.
          </p>
        </audio>
      </div>
    </div>
  );
}

export default Navigation;
