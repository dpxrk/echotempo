import "./InitialLandingPage.css";
import { useHistory } from "react-router-dom";

function InitialLandingPage() {
  const history = useHistory();

  const onClick = (e) => {
    e.preventDefault();
    history.push("/home");
  };

  return (
    <div class="entirePage">
      <form onClick={onClick} className="form">
        <div className="outerCircle" />
        <div className="innerCircle" />
        <div className="innerInnerCircle" />
        <div className>
          <button className="enterButton">Welcome</button>
        </div>
      </form>
      <div className="footer">
        By pressing welcome, you are agreeing to our terms and services
      </div>
    </div>
  );
}

export default InitialLandingPage;
