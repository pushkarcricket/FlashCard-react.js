import React from 'react'
import Comp1 from './Comp1'
import { create } from 'json-server'
import { createContext } from 'react'
import Page from '../Compoent/Page';

export default function App2() {

    const fname="rajesh";
    
  return (
    <div>
        <h1> this is my parent component</h1>
        <Page fname={fname}/>
    </div>
  )
}
