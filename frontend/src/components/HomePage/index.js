import "./HomePage.css";
import { NavLink, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSongs } from "../../store/song";

function HomePage({ user }) {
  const sessionUser = useSelector((state) => state.session.user);
  const songs = useSelector((state) => {
    return state.songs.songList;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);

  if (!sessionUser) {
    return <Redirect to="/home/login" />;
  }

  const onClickToPlayNewSong = (url) => {};

  return (
    <div className="HomePage">
      <div className="grid-container">
        <div className="more-of-what-you-like">
          <h2>More of what you like</h2>

          {songs &&
            songs.map((song) => (
              <div>
                <i
                  class="fas fa-play"
                  onClick={onClickToPlayNewSong(song.audioFile)}
                >
                  {song.title}
                </i>
              </div>
            ))}
        </div>
        <div className="EchoTempo-Weekly">
          <h2>EchoTempo Weekly</h2>
          {songs &&
            songs.map((song) => (
              <div>
                <i
                  class="fas fa-play"
                  onClick={onClickToPlayNewSong(song.audioFile)}
                >
                  {song.title}
                </i>
              </div>
            ))}
        </div>
        <div className="recommended">
          <h2 className="recommended-title">Recommended</h2>
          {songs &&
            songs.map((song) => (
              <div>
                <i
                  class="fas fa-play"
                  onClick={onClickToPlayNewSong(song.audioFile)}
                >
                  {song.title}
                </i>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
