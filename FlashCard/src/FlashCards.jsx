import React, { useState } from 'react'

export default function FlashCards(props) {


    const[selectedId,setSelectedId]=useState(null);
    const handleClick=(id)=>{
        setSelectedId(id !== selectedId ? id : null)

    }
  return (
//     <div className='flashcards'>
//         {props.questions.map((question)=>{
//             <div>
//                 <P>{question.question}</P>
//             </div>
// })}
//     </div>

<div className='flashcards'>
  {props.questions.map((question, index) => (
    <div key={index} onClick={()=>handleClick(question.id)} className={question.id === selectedId ? "selected" :""}>
      <p>{ question.id === selectedId ? question.answer :question.question}</p>
    </div>
  ))}
</div>
  )
}
