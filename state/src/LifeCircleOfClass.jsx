import React, { Component } from 'react'

export default class LifeCircleOfClass extends Component {
    constructor( fname){
        super(fname)
        this.fullname=fname;
        let component1= new Component("pushkar kumar");
        console.log(component1);
        this.state={
          counter:0,
        }
        
    }
    componentDidMount(){
        console.log("this is component did mount");
    }
    increment=()=>{
      this.setState({
        counter:this.state.counter+1,
      })
    console.log("i am fire")
      
    }
    componentWillUnmount(){
      console.log("this component will unmount");
    }
  render() {
    return (
      <div> className
        <p>Counter:{this.state.counter}</p>
        <button onClick={this.increment}>Click me </button>
      </div>
    )
  }
}
