import { types } from "./types";

export const addPost = (post) => ({
  type: types.ADD_POST,
  payload: post,
});
