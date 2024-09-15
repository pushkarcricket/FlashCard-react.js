import React from 'react'

export default function Navbar() {
  return (
    <div className='w-full px-4 py-3 flex justify-between items-center'>
        <h3>Orange</h3>
        <div className='flex p-2  px-4 bg-orange-500 text-white gap-4'>
            <h3>favtiours</h3>
            <h4>{song.filter(item=> item.added).lenght}</h4>
        </div>
    </div>
  )
}
