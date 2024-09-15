import React, { Children, createContext, useState } from "react";

const taskContext=createContext();
const Todoprovider=({Children})=>{
    const [data, setdata]=useState(["breakfast","lunch", "dinner"]);

    
}