import React from 'react'

function Pagination({page,handlenext,handleprev}) {
  return (
    <div className='bg-gray-400 flex display-center justify-center m-8 p-3'>
 <div onClick={handleprev} className='px-8'><i class="fa-solid fa-arrow-left"></i></div>
<div className="font-bold">{page}</div>
 <div onClick={handlenext}className="px-8"><i class="fa-solid fa-arrow-right"></i></div>
 </div>
  )
}

export default Pagination