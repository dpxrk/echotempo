import "./HomePage.css";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useContext } from "react";
import { getSongs } from "../../store/song";

function HomePage({ user }) {
  const [songPlaying, setSongPlaying] = useState("");
  const sessionUser = useSelector((state) => state.session.user);
  const songs = useSelector((state) => {
    return state.songs.songList;
  });

  // const songContext = useContext(songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);
  // comes back as JSON. Will need to be able to obtain {`{song.audiofile}`} on a click.

  if (!sessionUser) {
    return <Redirect to="/home/login" />;
  }

  const onClickToPlayNewSong = (url) => {
    // new Audio.src(url); <--- EVENT HANDLER TO PLAY A NEW SONG.
  };

  const randomNumberA = Math.floor(Math.random() * songs.length - 1);
  const randomNumberB = Math.floor(Math.random() * songs.length - 1);
  const randomNumberC = Math.floor(Math.random() * songs.length - 1);
  const randomNumberD = Math.floor(Math.random() * songs.length - 1);
  const randomNumberE = Math.floor(Math.random() * songs.length - 1);
  const randomNumberF = Math.floor(Math.random() * songs.length - 1);

  return (
    <div className="HomePage">
      <div className="grid-container">
        <div className="more-of-what-you-like">
          <h2>More of what you like</h2>

          {songs &&
            songs.slice(0, randomNumberB).map((song) => (
              <div key={song.id}>
                <button className="playButton">
                  <i
                    className="fas fa-play"
                    onClick={(e) => setSongPlaying(song.audiofile)}
                  ></i>
                </button>
                {song.title} by {song.userId}
                {/*need to show that song.userId is the artist playing. */}
              </div>
            ))}
        </div>
        <div className="EchoTempo-Weekly">
          <h2>EchoTempo Weekly</h2>
          {songs &&
            songs.slice(0, randomNumberD).map((song) => (
              <div key={song.id}>
                <button className="playButton">
                  <i
                    className="fas fa-play"
                    onClick={(e) => setSongPlaying(song.audiofile)}
                  ></i>
                </button>
                {song.title} by {song.userId}
                {/*need to show that song.userId is the artist playing. */}
              </div>
            ))}
        </div>
        <div className="recommended">
          <h2 className="recommended-title">Recommended</h2>
          {songs &&
            songs.slice(0, randomNumberF).map((song) => (
              <div key={song.id}>
                <button className="playButton">
                  <i
                    className="fas fa-play"
                    onClick={(e) => setSongPlaying(song.audiofile)}
                  ></i>
                </button>
                {song.title} by {song.userId}
                {/*need to show that song.userId is the artist playing. */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
