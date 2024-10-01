
const intialState={
    todos:["breakfast", "lunch", "dinner"]
}



const todoReducer=(state=intialState,action)=>{

    console.log("coming action", action)

   switch (action.type){
    case "ADD_TODO" :
        return{
            ...state,
            todos:[...state.todos, action.payload]
        }
        default:
            return state;
   }
   
    
}


export default todoReducer;