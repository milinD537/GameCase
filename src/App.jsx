import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getGames } from './lib/api'
import HeroGameCard from './components/HeroGameCard'
import GameCard from './components/GameCard'

function App() {
  const [page, setPage] = useState(1)
  const [heroCardIndex, setHeroCardIndex] = useState(0)
  const [gameJSON, setGameJSON] = useState(
    {
      "count": 0,
      "next": null,
      "previous": null,
      "results": [],
    }
  )
  async function getData(page) {
    const gameJSONData = await getGames(page);
    console.log(gameJSONData);
    
    if (!gameJSONData) return;
    setGameJSON(gameJSONData);
    setHeroCardIndex(0);
  }
  useEffect(() => {
    getData(page);
  },[page])

  return (
    <div>
      {/*
      <button className='absolute z-50 top-2 left-1/2 bg-black p-4' onClick={() => {(gameJSON.previous) && setPage((prev) => prev - 1 )}}>Prev</button>
      <button className='absolute z-50 top-2 left-[60%] bg-black p-4' onClick={() => ((gameJSON.next)) && setPage((prev) => prev + 1)}>Next</button>
      */}
      <section className='header | w-[min(1680px,100%_-_3rem)] mx-auto mb-12 text-[clamp(1.875rem,5.3vw+1px,4rem)] font-bold'><h1 className=''>GAME CASE</h1></section>

      <section className='heroSection | w-[min(1680px,100%_-_3rem)] mx-auto | mb-12'>
        <div className='trending | mb-2 min-[980px]:mb-4'><p className='text-xl min-[980px]:text-[2.75rem] leading-none'>Trending</p></div>
        <div className='heroGrid | grid grid-rows-[auto_auto] min-[1200px]:grid-cols-[0.8fr_0.2fr] gap-8'>
          <div>
            {(gameJSON.results.length === 0) ? (<></>) :
              (
                <div className="potentialHeroComponent | grid grid-cols-[2rem_1fr] min-[980px]:grid-cols-[3rem_1fr] grid-rows-[1fr_2rem] min-[980px]:grid-rows-[1fr_3rem] rounded-3xl relative overflow-hidden | w-full aspect-[16/9] bg-no-repeat bg-cover" style={{background: `linear-gradient(180deg, transparent, black 90%) center 60% / auto no-repeat, url(${gameJSON.results[heroCardIndex].background_image}) center center / cover no-repeat`}}> {/*before:content-[''] before:absolute before:z-0 before:inset-0 before:bg-gradient-to-t before:from-black before:from-0%% before:to-transparent | w-full aspect-[16/9] bg-no-repeat bg-cover" style={{background: `linear-gradient(180deg, transparent, black 90%) center 60% / auto no-repeat, url(${gameJSON.results[heroCardIndex].background_image}) center center / cover no-repeat`}}*/}
                  {/*<img src={gameJSON.results[heroCardIndex].background_image} className='heroImage | col-start-1 col-span-full row-start-1 row-span-full w-full aspect-[16/9] object-cover' />*/}
                  <div className='col-start-2 row-start-1 self-end relative'>
                    <h3 className='text-xl min-[980px]:text-[3.5rem] font-bold'>{gameJSON.results[heroCardIndex].name}</h3>
                    <p></p>
                    <button className='cursor-pointer mt-4 min-[980px]:mt-10 bg-white text-black text-xs min-[980px]:text-xl py-[0.5em] px-[1em] rounded'>LEARN MORE</button>
                  </div>
                </div>
              )}
          </div>
          <div className='grid gap-4 max-[1199px]:grid-cols-[repeat(2,1fr)]'>
            {gameJSON.results.length > 0 && gameJSON.results.slice(0,6).map((gameData, index) => <HeroGameCard key={gameData.id} item={gameData} checked={index === heroCardIndex} onClickFn={() => setHeroCardIndex(index)}/>)}
          </div>
        </div>
      </section>

      <section className='cardsWrapper | w-[min(1680px,100%_-_3rem)] mx-auto'>
        <div className='pageChange | mb-6 flex justify-center gap-4'>
              <button className='w-12 h-12 min-[980px]:w-16 min-[980px]:h-16 rounded-[50%] bg-[hsl(0,0%,15%,60%)] relative | before:content-[""] before:absolute before:w-4 min-[980px]:before:w-6 before:h-1 min-[980px]:before:h-[0.3rem] before:bg-[hsl(0,0%,65%)] before:hover:bg-white before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:origin-bottom-left before:rotate-[-30deg] | after:content-[""] after:absolute after:w-4 min-[980px]:after:w-6 after:h-1 min-[980px]:after:h-[0.3rem] after:bg-[hsl(0,0%,65%)] after:hover:bg-white after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:origin-top-left  after:rotate-[30deg]'  style={{opacity:(!gameJSON.previous)?'50%':'1'}}  onClick={() => {(gameJSON.previous) && setPage((prev) => prev - 1 )}}></button>
              <button className='w-12 h-12 min-[980px]:w-16 min-[980px]:h-16 rounded-[50%] bg-[hsl(0,0%,15%,60%)] relative | before:content-[""] before:absolute before:w-4 min-[980px]:before:w-6 before:h-1 min-[980px]:before:h-[0.3rem] before:bg-[hsl(0,0%,65%)] before:hover:bg-white before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:origin-bottom-right before:rotate-[30deg] | after:content-[""] after:absolute after:w-4 min-[980px]:after:w-6 after:h-1 min-[980px]:after:h-[0.3rem] after:bg-[hsl(0,0%,65%)] after:hover:bg-white after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:origin-top-right after:rotate-[-30deg]' style={{opacity:(!gameJSON.next)?'50%':'1'}}      onClick={() => {(gameJSON.next) && setPage((prev) => prev + 1 )}}></button>
        </div>
        <div className='cards | grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 justify-center'>
          {gameJSON.results.length > 0 && gameJSON.results.slice(6).map((gameData) => <GameCard key={gameData.id} item={gameData}/>)}
        </div>
      </section>
    </div>
  )
}

export default App
