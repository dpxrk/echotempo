import "./ProfilePage.css";
import { Link } from "react-router-dom";

function ProfilePage({ user }) {
  return (
    <div className="ProfilePage">
      <div className="ProfileLinks">
        <span> All</span>
        <span> Likes</span>
        <span> Playlists</span>
      </div>
    </div>
  );
}

export default ProfilePage;
