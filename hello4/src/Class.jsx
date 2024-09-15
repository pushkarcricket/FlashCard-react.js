import React, { Component } from 'react'

export default class Class extends Component {
    constructor(){
        super();
        this.ref=createRef();

    }
    changeinput=()=>{
        console.log("i am fired");
        console.log(this.ref.current.value);
        console.log(this.ref.current.value.lenght);
        if(this.ref.current.value.lenght===0){

        }else{
            this.ref.current.style.background="green"
        }
    }
  render() {
    return (
        <div>
            <div>learning ref in class Component</div>
            <input type="text" ref={this.ref} onChange={this.changeinput}/>

        </div>
      
    )
  }
}
