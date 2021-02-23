import "./HomePage.css";
import { NavLink, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {useState} from 'react'

function HomePage() {
  const sessionUser = useSelector((state) => state.session.user);


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
