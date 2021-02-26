import "./HomePage.css";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useContext } from "react";
import { getSongs, getAllSongs } from "../../store/song";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePage({ onClickForNewSong }) {
  const sessionUser = useSelector((state) => state.session.user);
  const songs = useSelector((state) => {
    return state.songs.songList;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs(sessionUser.id));
    dispatch(getAllSongs());
  }, [dispatch, sessionUser.id]);

  const randomNumber1 = Math.floor(Math.random() * songs.length - 5);
  const randomNumber2 = Math.floor(Math.random() * songs.length - 2);
  const randomNumber3 = Math.floor(Math.random() * songs.length - 1);

  const carouselSettings1 = {
    infinite: true,
    speed: 2000,
    slidesToShow: 10,
    pauseOnHover: true,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: randomNumber1,
    cssEase: "linear",
    centerMode: true,
  };
  const carouselSettings2 = {
    infinite: true,
    speed: 2000,
    slidesToShow: 10,
    pauseOnHover: true,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: randomNumber2,
    cssEase: "linear",
    centerMode: true,
  };
  const carouselSettings3 = {
    infinite: true,
    speed: 2000,
    slidesToShow: 10,
    pauseOnHover: true,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: randomNumber3,
    cssEase: "linear",
    centerMode: true,
  };

  if (!sessionUser) {
    return <Redirect to="/home/login" />;
  }

  return (
    <div className="HomePage">
      <div className="grid-container">
        <div className="more-of-what-you-like-carousel">
          <h2>More of what you like</h2>
          <Slider {...carouselSettings1}>
            {songs &&
              songs.map((song) => (
                <div
                  className="carousel-items"
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
                  </button>
                  {song.Title} by {song.artist}
                </div>
              ))}
          </Slider>
        </div>
        <div className="EchoTempo-Weekly-carousel">
          <h2>EchoTempo Weekly</h2>
          <Slider {...carouselSettings2}>
            {songs &&
              songs.map((song) => (
                <div
                  className="carousel-items"
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
                  </button>
                  {song.Title} by {song.artist}
                </div>
              ))}
          </Slider>
        </div>
        <div className="recommended">
          <h2 className="recommended-title-carousel">Recommended</h2>
          <Slider {...carouselSettings3}>
            {songs &&
              songs.map((song) => (
                <div
                  className="carousel-items"
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
                  </button>
                  {song.Title} by {song.artist}
                </div>
              ))}
          </Slider>
        </div>
      </div>
      <div className="audioInfo">
        <div>Song Title:</div>
        <div></div>
        <div>Song Artist:</div>
      </div>
    </div>
  );
}

export default HomePage;
