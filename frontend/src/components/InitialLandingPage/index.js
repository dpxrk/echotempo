import "./InitialLandingPage.css";

function InitialLandingPage() {
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <div class="entirePage">
      <form onClick={onClick} className="form">
        <div className="outerCircle" />
        <div className="innerCircle" />
        <div className>
          <button className="enterButton">E n t e r</button>
        </div>
      </form>
      <div className="footer">
        By pressing enter you are agreeing to our terms and services
      </div>
    </div>
  );
}

export default InitialLandingPage;
