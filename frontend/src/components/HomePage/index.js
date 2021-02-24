import "./HomePage.css";
import { NavLink, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSongs } from "../../store/song";

function HomePage({ user }) {
  const sessionUser = useSelector((state) => state.session.user);
  const { songId } = useParams();
  // const songs = useSelector((state)=> {
  //   return state.song.list.map(songId => state.song[songId])
  // })
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs(songId));
  }, [songId, dispatch]);

  if (!sessionUser) {
    return <Redirect to="/home/login" />;
  }

  return (
    <div className="HomePage">
      <div className="grid-container">
        <div className="more-of-what-you-like">
          <h2>More of what you like</h2>
        </div>
        <div className="EchoTempo-Weekly">
          <h2>EchoTempo Weekly</h2>
        </div>
        <div className="recommended">
          <h2 className="recommended-title">Recommended</h2>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
