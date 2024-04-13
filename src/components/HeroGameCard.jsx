import React from 'react'

export default function HeroGameCard({item, onClickFn}) {
  return (
    <>
        <div className='cursor-pointer' onClick={() => onClickFn()}>
            <img src={item.background_image}/>
            <h3>{item.name}</h3>
        </div>
    </>
  )
}
