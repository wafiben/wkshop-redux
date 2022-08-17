import { ADD_USER } from "../Types";
export const addUser = (user) => {
  console.log(user);
  return { type: ADD_USER, payload: user };
};
