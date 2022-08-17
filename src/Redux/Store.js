import { createStore } from "redux";
import routReducer from "./Reducers";
const store = createStore(
  routReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
