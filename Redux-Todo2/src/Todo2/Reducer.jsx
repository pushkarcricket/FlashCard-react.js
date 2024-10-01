


const initalState={todos:["first","second","third"]}

const reducer=(state=initalState , action)=>{

    //action is used to see data what data is coming from input then go to reducer after that  it  goes to input 
    console.log("action coming from state" , action)

    //we have create switch to ccheck case

  switch(action.type){
    case"ADD_TODO" :
    return {
        ...state,
        todos:[...state.todos, action.payload]
    }
    case"DELETE_TODO" :
    let filterdata=state.todos.filter((todo)=> todo!==action.payload)
    console.log(filterdata)
    return{
      ...state,
      todos:filterdata
    }

    default:
        return state;
  }

    

    
}
export default reducer;