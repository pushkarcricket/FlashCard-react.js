import CardLayout from "./CardLayout";
import CardLay from "./CardLay";

export default function Card(){
    return(
        <div>
            <h1> Name of the card</h1>
            
                <CardLayout lab={"lab1"}descriptio={"this is lab1"}btnName={"viewlab"} purchase={"price 350"}/>
                <CardLay product={"this is product"} descriptio={"this is very good product to buy"} price={350} buy={"click here to buy"}/> 
        </div>
    )
}