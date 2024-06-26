import React from 'react'

export default function GameCard({item}) {
  return (
    <>
      <div className='card | cursor-pointer'>
        <div className='cardImageWrapper group | hover:contrast-75 hover:brightness-105 transition-all relative'>
        <div className='absolute top-2 right-2 w-7 h-7 rounded-[50%] border-2 border-white bg-black grid place-items-center opacity-0 group-hover:opacity-100 transition-all | before:content-[""] before:absolute before:w-3 before:h-[0.2rem] before:bg-white before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 | after:content-[""] after:absolute after:w-3 after:h-[0.2rem] after:bg-white after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-90'></div>
          <img src={item.background_image} className='w-full aspect-[1/1.4] object-cover rounded-md'/>
        </div>
        <div className='cardDetails'>
          <h3 className='gameTitle | text-xl mb-2'>{item.name}</h3>
          <div className='gameRatingWrapper | flex items-center gap-1 mb-1'>
            <img src='/ratingStar.png' className='w-5 h-5'/>
            <span className='px-2 py-1 rounded-md bg-[hsl(0,0%,16%)]'>{item.rating}</span>
          </div>
          <div className='gamePlaytime | flex items-center gap-1'>
            <img src='/playTime.png' className='w-5 h-5' />
            <span className='px-2 py-1 rounded-md bg-[hsl(0,0%,16%)]'>{item.playtime} hrs</span>
          </div>
        </div>
      </div>
    </>
  )
}





