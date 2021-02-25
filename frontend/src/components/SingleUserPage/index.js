import "./SingleUserPage.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSongs } from "../../store/song";

function SingleUserPage() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs(sessionUser));
  }, [dispatch]);

  return (
    <div className="SingleUserPage">
      <div>This is a Single User Page</div>
    </div>
  );
}

export default SingleUserPage;
