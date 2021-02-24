import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newSong } from "../../store/song";
import { useHistory } from "react-router-dom";
import "./AddNewSongPage.css";

function AddNewSongPage() {
  const [songTitle, setSongTitle] = useState("");
  const [audioFile, setAudioFile] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      songTitle,
      audioFile,
    };

    const createdSong = await dispatch(newSong(payload));
    if (createdSong) {
      history.push(`/home/${createdSong.id}`);
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push("/home");
  };
  return (
    <section className="addNewSongForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Song Title"
          required
          value={songTitle}
          onChange={(e) => setSongTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Audio File Url"
          required
          value={audioFile}
          onChange={(e) => setAudioFile(e.target.value)}
        />
        <button type="submit" className="publish">
          Publish new Song
        </button>
        <button
          type="button"
          className="cancel-button"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </form>
    </section>
  );
}

export default AddNewSongPage;
