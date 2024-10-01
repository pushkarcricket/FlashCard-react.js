import { createStore } from "redux"
import reducer from "./Todo2/Reducer";

const store=createStore(reducer);

export default store;