import "./ProfilePage.css";
import { useHistory } from "react-router-dom";

function ProfilePage({ user }) {
  const history = useHistory();
  const onClickForAll = (e) => {
    e.preventDefault();
    history.push("/profile");
  };
  const onClickForPlaylists = (e) => {
    e.preventDefault();
    history.push("/profile/playlists");
  };
  const onClickForLikes = (e) => {
    e.preventDefault();
    history.push("/profile/likes");
  };

  return (
    <div className="ProfilePage">
      <div className="ProfileLinks-Container">
        <div className="ProfileLinks">
          <button type="click" onClick={onClickForAll} className="All">
            All
          </button>
          <button
            type="click"
            onClick={onClickForPlaylists}
            className="Playlists"
          >
            Playlists
          </button>
          <button type="click" onClick={onClickForLikes} className="Likes">
            Likes
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
