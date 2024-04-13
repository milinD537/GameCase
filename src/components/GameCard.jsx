import React from 'react'

export default function GameCard({item}) {
  return (
    <>
      <div className='card |'>
        <div className='cardImageWrapper'>
          <img src={item.background_image}/>
        </div>
        <div className='cardDetails'>
          <h3 className='gameTitle'>{item.name}</h3>
          <div className='gameRatingWrapper'>
            <img src='/ratingStar.png'/>
            <span className='inline-block'>{item.rating}</span>
          </div>
          <p className='gamePlaytime'><span>{item.playtime}</span>hrs</p>
        </div>
      </div>
    </>
  )
}





