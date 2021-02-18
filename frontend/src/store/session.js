import { csrfFetch } from "./csrf";
const SET_USER = "session/SET_USER";
const REMOVE_SET_USER = "user/REMOVE_SET_USER";

const setUser = (user) => ({
  type: SET_USER,
  user,
});

const removeUser = (user) => ({
  type: REMOVE_SET_USER,
});

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({
      credential,
      password,
    }),
  });

  const data = await response.json();
  // console.log("THIS IS THE DATA:", data);
  dispatch(setUser(data.user));
  return response;
};

export const logOut = (user) => async (dispatch) => {
  dispatch(removeUser(user));
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      console.log("ANYTHING");
      newState = Object.assign({}, state);
      newState.user = action.user;
      console.log("THIS IS THE NEWSTATE:", newState);
      return newState;
    case REMOVE_SET_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
