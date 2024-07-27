import React from 'react'

function Card({image, text}) {
  return (
    <div className='flex flex-col cursor-pointer border-solid border-black rounded-lg border-2 h-80 md:h-96'>
        <div className='max-[550px]:h-2/4 h-2/5'>
            <img className='w-full h-full object-cover rounded-t-md' src={image} alt='' />
        </div>
        <div className='flex-1 flex justify-center text-center pt-6 min-[900px]:pt-11 px-4 md:px-2 min-[900px]:px-4'>
            <p className='md:text-lg font-medium'>{text}</p>
        </div>
    </div>
  )
}

export default Card