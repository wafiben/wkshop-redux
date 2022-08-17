import { LOG_IN, LOG_OUT } from "../Types";
export const login = (user, navigate) => {
  return { type: LOG_IN, payload: { user, navigate } };
};
export const logout = (navigate) => {
  return { type: LOG_OUT, payload: {navigate} };
};
