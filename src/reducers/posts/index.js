import { types } from "../../actions/types";

const INITIAL_STATE = [
  {
    id: 1,
    title: "My first post",
    body:
      "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
  },
];

const addPost = (state, post) => {
  const newState = [...state];
  const newPost = { ...post, id: state.length + 1 };
  newState.push(newPost);
  // Sort by id descending
  newState.sort((a, b) => b.id - a.id);
  return newState;
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_POST:
      return addPost(state, action.payload);
    default:
      return state;
  }
};