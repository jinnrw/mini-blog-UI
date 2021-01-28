import { types } from "./types";

export const addPost = (post) => ({
  type: types.ADD_POST,
  payload: post,
});

export const deletePost = (id) => ({
  type: types.DELETE_POST,
  payload: id,
});