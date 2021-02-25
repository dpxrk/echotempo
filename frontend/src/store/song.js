import { csrfFetch } from "./csrf";

const ADD_SONG = "song/ADD_SONG";
const LOAD_SONG = "song/LOAD_SONG";
const REMOVE_SONG = "song/REMOVE_SONG";

const load = (songList) => ({
  type: LOAD_SONG,
  songList,
});

const addSong = (songList) => ({
  type: ADD_SONG,
  songList,
});

const removeSong = (songList, songId) => ({
  type: REMOVE_SONG,
  songList,
  songId,
});

//action to get all songs.
export const getSongs = () => async (dispatch) => {
  const response = await csrfFetch(`/api/songs`);
  if (response.ok) {
    const songs = await response.json();

    dispatch(load(songs));
  }
};

//action to get one song
export const getOneSong = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/songs/${id}`);

  if (response.ok) {
    const song = await response.json();
    dispatch(addSong(song));
  }
};

//this is a action for create new song page.
export const newSong = (payload) => async (dispatch) => {
  const response = await csrfFetch(`/api/songs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const song = await response.json();
    dispatch(addSong(song));
    return song;
  } else {
    throw response;
  }
};

const initialState = { songList: [] };

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SONG:
      const allSongs = {};
      action.songList.forEach((song) => {
        allSongs[song.id] = song;
      });

      return {
        ...state,
        ...allSongs,
        songList: action.songList,
      };
    case ADD_SONG:
      if (!state[action.song.id]) {
        const newState = {
          ...state,
          [action.song.id]: action.song,
        };
        const newSongList = newState.songList.map((id) => newState[id]);
        newSongList.push(action.song);
        return newState;
      }
      return {
        ...state,
        [action.song.id]: {
          ...state[action.song.id],
          ...action.song,
        },
      };
    case REMOVE_SONG:
      const newState = { ...state };
      delete newState[action.songId];
      return newState;
    default:
      return state;
  }
};

export default songReducer;
