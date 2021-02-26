import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSongs } from "../../store/song";

function Navigation({ isLoaded }) {
  const [songPlaying, setSongPlaying] = useState("");

  const sessionUser = useSelector((state) => state.session.user);
  const songs = useSelector((state) => {
    return state.songs.songList;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);

  let profileButton;
  if (sessionUser) {
    profileButton = <ProfileButton user={sessionUser} />;
  }
  const onClick = () => {
    <Redirect to="/home/profile" />;
  };

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
            <Link className="upload" to="/home/addnewsong">
              Upload
            </Link>
          </li>
          <li>
            <a className="settings-button" onClick={onClick}>
              {profileButton}
            </a>
          </li>
        </ul>
      </nav>
      <div className="audioContainer">
        {/* <div className="player">
          <div className="details">
            <span className="now-playing"></span>
          </div>
        </div> */}
        <audio
          id="audio"
          className="bottomAudioBar"
          title="AudioPlayer"
          controls
          value={songPlaying}
          src={`/songs/kai exo 음 mmmh.mp3`} // will need to somehow change this source when the play button on the homepage
          // next to one of the songs is clicked.
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
