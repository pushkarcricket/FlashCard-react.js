// import { createStore } from "redux";
// import todoReducer from "../Reducer/Reducer";

import { createStore } from "redux";
import reducer2 from "../Reducer/Reducer1";



//  const store=createStore(todoReducer);

//  export  default store;

const store=createStore(reducer2)

export default store;