import React, { useState } from 'react'
import { useDeferredValue } from 'react';

import List from './List';
import RunTodo from './RunTodo';

export default function ShowTodo() {
  let [todos,settodos]=useState(["breakfast","lunch","dinner","hello world"])

  

  
    
  return (
    <div>
        <RunTodo/>
        <List todos={todos}/>
    </div>
  )
}
