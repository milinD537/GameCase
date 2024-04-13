import React from 'react'

export default function HeroGameCard({item, onClickFn}) {
  return (
    <>
      <label htmlFor={item.name} className='heroCard group | cursor-pointer grid min-[980px]:grid-cols-[45%_auto] gap-3 items-center px-4 py-3 text-[clamp(0.75rem,0.8vw,1rem)] rounded-2xl hover:bg-[hsl(0,0%,15%)] has-[:checked]:bg-[hsl(0,0%,15%)]' onClick={() => onClickFn()}>
        <input type='radio' id={item.name} name='heroCards' className='hidden peer'/>
        <img src={item.background_image} className='aspect-[16/9] rounded-xl peer-checked:shadow-[0_0.5rem_2rem_hsl(0,0%,0%,70%)] peer-checked:animate-[scaleAnimation_0.25s_linear]' />
        <h3>{item.name}</h3>
      </label>
    </>
  )
}
