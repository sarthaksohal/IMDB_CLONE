import React, { useEffect, useState } from 'react'

function Search({handling,Text,watchlisttt}) {
  
  
  return (
    <div className='flex justify-center my-8'>
        
        <input className="bg-gray-200 w-[18rem] h-[3rem] px-4 outline-none" onChange={handling} type="text" placeholder="Search for Movies"value={Text}/>
    </div>
    
  )
}

export default Search