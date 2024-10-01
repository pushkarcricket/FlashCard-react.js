 import { createStore } from "redux";


 export const reducer=(state=10, action)=>{
    switch(action.type){
    case 'INC' : return state+1;
    case 'DEC' : return state-1;
    default : return state;

 }
}

export  const Store1=createStore(reducer)