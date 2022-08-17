import { LOG_IN, LOG_OUT } from "../Types";
const initState = { connect: false, user: null };
const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case LOG_IN:
      action.payload.navigate("/Profile");
      if (action.payload.user.email === "admin@gmail.com") {
        return { ...state, connect: true, role: 1, user: action.payload.user };
      } else {
        return { ...state, connect: true, role: 0, user: action.payload.user };
      }
    case LOG_OUT:
      action.payload.navigate("/");
      return { ...state, user: null, connect: false };
    default:
      return state;
  }
};
export default AuthReducer;
