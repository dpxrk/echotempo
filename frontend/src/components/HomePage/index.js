import "./HomePage.css";
import { NavLink, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function HomePage() {
  const sessionUser = useSelector((state) => state.session.user);

  if (!sessionUser) {
    return <Redirect to="/home/login" />;
  }

  return (
    <div className="HomePage">
      <div className="grid-container"></div>
    </div>
  );
}

export default HomePage;
