// import changeTheNumber from "./updown";

// import { combineReducers } from "redux";

// const rootReducer=combineReducers({
//     changeTheNumber
// });

// export default rootReducer;
import changeTheNumber from "./updown";

import { useSelector } from "react-redux";

function component (){
    const count= useSelector(state => state)
    return (
        <div>
            <h1> {count}</h1>
        </div>
    )
}

export default component;