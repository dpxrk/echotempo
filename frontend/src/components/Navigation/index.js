import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import { Link } from "react-router-dom";


function Navigation({ isLoaded }) {
  // const audioObj = new Audio(url);
  const sessionUser = useSelector((state) => state.session.user);

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
    </div>
  );
}

export default Navigation;
