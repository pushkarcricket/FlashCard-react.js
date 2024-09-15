import React from 'react'

export default function Data({song, handleclick, index}) {

  const{image,name, artist, added}=song;
  return (
    <div className='w-60 bg-zinc-100 p-4 rounded-md pb-10'>
        <div className='w-20 h-20 bg-orange-600 rounded-md'>
          <img className='w-full h-full object-cover,' src={image} alt="" />
        </div>
        <div>
            <h3 className='font-bold'>{name}</h3>
            <h6>{artist}</h6>
            <button  onClick={()=>handleclick(index)} className={`px-4 py-3 whitespace-wrap ${added===false?"bg-orange-600":"bg-teal-500"} absolute    left- 1/2 translate-y-[50%] text-white text-xs rounded-full`}>{added === false ? "ADD to fav" :" Added"}</button>
        </div>
        
    </div>
  )
}
