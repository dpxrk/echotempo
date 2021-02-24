const PLAY = "song/PLAY";

const getSong = (song) => ({
  type: PLAY,
  song,
});

export const getSongs = (id) => async (dispatch) => {
  const response = await fetch(`/api/song/${id}`);
  if (response.ok) {
    const song = await response.json();
    dispatch(getSong(song));
  }
};
