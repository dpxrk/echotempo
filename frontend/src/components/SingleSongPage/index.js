import { useHistory } from "react-router-dom";
import { getOneSong } from "../../store/song";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchComments, createComment } from "../../store/comment";
import "./SingleSongPage.css";
import { useEffect, useState } from "react";

function SingleSongPage({ songs }) {
  const dispatch = useDispatch();
  const [content, setContent] = useState(")");
  const sessionUser = useSelector((state) => state.session.user);
  const comments = useSelector((state) => Object.values(state.comment));
  const song = useSelector((state) => state.songs.songList);

  console.log("THIS IS THE SESSION USER");
  useEffect(() => {
    dispatch(fetchComments());
    dispatch(getOneSong());
  }, [dispatch]);

  console.log("THIS IS THE SONG ON SINGLESONGPAGE:", song);

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    const comment = {
      content,
      userId: sessionUser.id,
      songId: song,
    };

    dispatch(createComment(comment));
    setContent("");
  };

  return (
    <>
      <div>
        <h2>Single Song Page</h2>
      </div>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={content}
          placeholder="Your Comment"
          onChange={(e) => setContent(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default SingleSongPage;
