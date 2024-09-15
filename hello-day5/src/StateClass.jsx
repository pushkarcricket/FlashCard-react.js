import React, { Component } from 'react'

export default class StateClass extends Component {
    constructor(){
        super()
        this.state={
          counter:0,
        }
    }

    increment=()=>{
        //console.log("inc is fire");
        this.setState({
            counter:this.state.counter+1
        })
        
    }





  render() {
    return (
      <div>
        <div className='App'>
            <h1>Counter app using class component</h1>
            <p>Counter:{this.state.counter}</p>
            <button onClick={this.increment}> increment</button>
        </div>
      </div>
    )
  }
}
