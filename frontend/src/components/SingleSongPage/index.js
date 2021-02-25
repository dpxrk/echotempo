import { useHistory } from "react-router-dom";
import { getOneSong } from "../../store/song";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function SingleSongPage() {
  const song = useSelector((state) => {
    return state.songs.songList;
  });

  console.log(song);

  return (
    <div>
      <h2>Single Song Page</h2>
    </div>
  );
}

export default SingleSongPage;
