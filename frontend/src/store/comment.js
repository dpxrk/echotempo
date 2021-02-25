import { csrfFetch } from "./csrf";
const GET_COMMENTS = "comment/GET_COMMENTS";
const ADD_COMMENT = "comment/ADD_COMMENTS";

const getComments = (comments) => ({
  type: GET_COMMENTS,
  comments,
});

const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment,
});

export const fetchComments = () => async (dispatch) => {
  const response = await fetch(`/api/songs`);
  const data = await response.json();
  dispatch(getComments(data.comment));
  return response;
};

export const createComment = (comment) => async (dispatch) => {
  const response = await csrfFetch(`/api/songs`, {
    method: "POST",
    body: JSON.stringify(comment),
  });

  const data = await response.json();
  dispatch(addComment(data.comment));
  return data;
};

const initialState = {};
function commentReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_COMMENTS:
      newState = Object.assign({}, action.payload);
      return newState;
    case ADD_COMMENT:
      newState = Object.assign({}, state, {
        [action.payload.id]: action.payload,
      });
      return newState;
    default:
      return state;
  }
}

export default commentReducer;
