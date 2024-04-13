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
    
      <button className='absolute z-50 top-2 left-1/2 bg-black p-4' onClick={() => {(gameJSON.previous) && setPage((prev) => prev - 1 )}}>Prev</button>
      <button className='absolute z-50 top-2 left-[60%] bg-black p-4' onClick={() => ((gameJSON.next)) && setPage((prev) => prev + 1)}>Next</button>
    
      <section className='header | w-[min(1680px,100%_-_3rem)] mx-auto'>TITLE</section>

      <section className='heroSection | w-[min(1680px,100%_-_3rem)] mx-auto | mb-12'>
        <div className='trending'></div>
        <div className='heroGrid | grid grid-rows-[auto_auto] min-[1200px]:grid-cols-[0.8fr_0.2fr] gap-8'>
          <div>
            {(gameJSON.results.length === 0) ? (<></>) :
              (
                <div className="potentialHeroComponent | grid grid-cols-[2rem_1fr] min-[980px]:grid-cols-[3rem_1fr] grid-rows-[1fr_2rem] min-[980px]:grid-rows-[1fr_3rem] rounded-3xl relative overflow-hidden | before:content-[''] before:absolute before:z-0 before:inset-0 before:bg-gradient-to-t before:from-black before:from-0%% before:to-transparent">
                  <img src={gameJSON.results[heroCardIndex].background_image} className='heroImage | col-start-1 col-span-full row-start-1 row-span-full w-full aspect-[16/9] object-cover' />
                  <div className='col-start-2 row-start-1 self-end relative'>
                    <h3 className='text-xl min-[980px]:text-[3.5rem] font-bold'>{gameJSON.results[heroCardIndex].name}</h3>
                    <p></p>
                    <button className='cursor-pointer mt-4 min-[980px]:mt-10 bg-white text-black text-xs min-[980px]:text-xl py-[0.5em] px-[1em] rounded'>LEARN MORE</button>
                  </div>
                </div>
              )}
          </div>
          <div className='grid gap-4 max-[1199px]:grid-cols-[repeat(3,1fr)]'>
            {gameJSON.results.length > 0 && gameJSON.results.slice(0,6).map((gameData, index) => <HeroGameCard key={gameData.id} item={gameData} onClickFn={() => setHeroCardIndex(index)}/>)}
          </div>
        </div>
      </section>

      <section className='cardsWrapper | w-[min(1680px,100%_-_3rem)] mx-auto'>
        <div className='sort |'></div>
        <div className='cards | grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 justify-center'>
          {gameJSON.results.length > 0 && gameJSON.results.slice(6).map((gameData) => <GameCard key={gameData.id} item={gameData}/>)}
        </div>
      </section>
    </div>
  )
}

export default App
