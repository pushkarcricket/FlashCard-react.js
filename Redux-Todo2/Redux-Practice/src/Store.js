import { createStore } from "redux";
// import rootReducer from "./Reducer";
import changeTheNumber from "./Reducer/updown";

const store= createStore(changeTheNumber);

export default store;

