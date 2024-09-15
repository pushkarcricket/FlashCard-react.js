 export default function Hello(){
    let myName="pushkar kumar";
    let raj=()=>{
        return "your name is pushkar kumar"
    }
    let arr=[1,2,4,5];
    
    return(
        <div>
            <h1> hello world </h1>
            <h2>your name is {myName}</h2>
            <h3> nice to see you {raj()} {arr}</h3>
        </div>
    )
}