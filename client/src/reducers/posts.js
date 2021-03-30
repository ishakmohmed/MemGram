import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case DELETE:
      return state.filter((post) => post._id !== action.payload); // payload is the id only
    case LIKE:
    case UPDATE:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      ); // action.payload is the updated post!
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...state, action.payload];
    default:
      return state;
  }
};
