import React, { useState, useEffect, Redirect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import "./ProfileButton.css";
import { useHistory } from "react-router-dom";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const onClick = () => {
    const newPath = "/home/profile";
    history.push(newPath);
  };

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logOut());
    history.push("/home/login");
  };

  return (
    <div className="profile-bar">
      <button className="profile-button-dropdown" onClick={onClick}>
        <i className="far fa-user-circle" />
        {user.username}
      </button>
      <button className="settings-button" onClick={openMenu}>
        <i className="fas fa-ellipsis-h"></i>
        {showMenu && (
          <div>
            <div className="profile-list-item">User email: {user.email}</div>
            <button className="logout-button" onClick={logout}>
              Log Out
            </button>
          </div>
        )}
      </button>
    </div>
  );
}

export default ProfileButton;
