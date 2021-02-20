import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <div className="nav-links">
          <div>
            <NavLink to="/home/login">Log In</NavLink>
          </div>
          <div>
            <NavLink to="/home/signup">Sign Up</NavLink>
          </div>
        </div>
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/home" className="nav-links">
          Home
        </NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
