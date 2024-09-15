import React from 'react'



export default function CardLay({...props}){
    return(
        <div>
            <h1>{props.product}</h1>
            <p>{props.descriptio}</p>
            <h5>rupees{props.price}</h5>
            <button> tab {props.buy}</button>

        </div>

    )
}