import React from 'react'


export default function PackingList({initialItems}) {
  return (

    <div className='list'>
        <ul>
            {initialItems.map((item)=>(
                <Item item={item} key={item.id} />
            ))}
        </ul>

    </div>





    // <div className='list'>
    //     <ul>
    //         {initialItems.map((item)=>(
    //             <Item item={item} />
    //         ))}
    //     </ul>
    // </div>
  )
}

function Item({item}){




    return(
        <li>
            <span style={item.packed ?{textDecoration:"line-through"}:{}}>
                {item.quantity} {item.description}
            </span>

            <button>❌&times;</button>
        </li>
    )

//     return <li>

//         <span>
        
//         {item.quantity} {item.description}

        

//         <button>❌&times;</button>


//         </span>
        
        
//         </li>
}

