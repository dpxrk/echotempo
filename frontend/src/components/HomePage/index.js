import "./HomePage.css";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useContext } from "react";
import { getSongs, getAllSongs } from "../../store/song";

function HomePage({ songPlaying, setSongPlaying, onClickForNewSong }) {
  const sessionUser = useSelector((state) => state.session.user);
  const songs = useSelector((state) => {
    return state.songs.songList;
  });

  // const songContext = useContext(songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs(sessionUser.id));
    dispatch(getAllSongs());
  }, [dispatch, sessionUser.id]);
  // comes back as JSON. Will need to be able to obtain {`{song.audiofile}`} on a click.

  if (!sessionUser) {
    return <Redirect to="/home/login" />;
  }

  // const randomNumberA = Math.floor(Math.random() * songs.length - 1);
  // const randomNumberB = Math.floor(Math.random() * songs.length - 1);
  // const randomNumberC = Math.floor(Math.random() * songs.length - 1);
  // const randomNumberD = Math.floor(Math.random() * songs.length - 1);
  // const randomNumberE = Math.floor(Math.random() * songs.length - 1);
  // const randomNumberF = Math.floor(Math.random() * songs.length - 1);

  return (
    <div className="HomePage">
      <div className="grid-container">
        <div className="more-of-what-you-like">
          <h2>More of what you like</h2>

          {songs &&
            songs.map((song) => (
              <div
                className="carousel"
                key={song.id}
                value={song.audiofile}
                onClick={onClickForNewSong}
              >
                <button
                  className="playButton"
                  value={song.audiofile}
                  onClick={onClickForNewSong}
                >
                  Play
                  {/* <i
                    value={song.audiofile}
                    onClick={onClickForNewSong}
                    className="fas fa-play"
                  >
                    {" "}
                  </i> */}
                </button>
                {song.title} by {/*{song.artist}*/}
                {/*need to show that song.userId is the artist playing. */}
              </div>
            ))}
        </div>
        <div className="EchoTempo-Weekly">
          <h2>EchoTempo Weekly</h2>
          {songs &&
            songs.map((song) => (
              <div
                className="carousel"
                key={song.id}
                value={song.audiofile}
                onClick={onClickForNewSong}
              >
                <button
                  className="playButton"
                  value={song.audiofile}
                  onClick={onClickForNewSong}
                >
                  Play
                  {/* <i
                    value={song.audiofile}
                    onClick={onClickForNewSong}
                    className="fas fa-play"
                  >
                    {" "}
                  </i> */}
                </button>
                {song.title} by {/*{song.artist}*/}
                {/*need to show that song.userId is the artist playing. */}
              </div>
            ))}
        </div>
        <div className="recommended">
          <h2 className="recommended-title">Recommended</h2>
          {songs &&
            songs.map((song) => (
              <div
                className="carousel"
                key={song.id}
                value={song.audiofile}
                onClick={onClickForNewSong}
              >
                <button
                  className="playButton"
                  value={song.audiofile}
                  onClick={onClickForNewSong}
                >
                  Play
                  {/* <i
                    value={song.audiofile}
                    onClick={onClickForNewSong}
                    className="fas fa-play"
                  >
                    {" "}
                  </i> */}
                </button>
                {song.title} by {/*{song.artist}*/}
                {/*need to show that song.userId is the artist playing. */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
