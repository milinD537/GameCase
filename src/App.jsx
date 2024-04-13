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
      <button className='absolute top-2 left-1/2 bg-black p-4' onClick={() => {(gameJSON.previous) && setPage((prev) => prev - 1 )}}>Prev</button>
      <button className='absolute top-2 left-[60%] bg-black p-4' onClick={() => ((gameJSON.next)) && setPage((prev) => prev + 1)}>Next</button>
      <section className='header'></section>

      <section className='heroSection'>
        <div className='trending'></div>
        <div className='heroGrid'>
          <div>
            {(gameJSON.results.length === 0) ? (<></>) :
              (
                <div className="potentialHeroComponent | grid">
                  <img src={gameJSON.results[heroCardIndex].background_image} className='col-start-1 col-span-full row-start-1 row-span-full' />
                  <div className='col-start-1 col-span-full row-start-1 row-span-full text-black self-end w-fit'>
                    <h3>{gameJSON.results[heroCardIndex].name}</h3>
                    <p></p>
                    <button>LEARN MORE</button>
                  </div>
                </div>
              )}
          </div>
          <div className='outline outline-red-300'>
            {gameJSON.results.length > 0 && gameJSON.results.slice(0,6).map((gameData, index) => <HeroGameCard key={gameData.id} item={gameData} onClickFn={() => setHeroCardIndex(index)}/>)}
          </div>
        </div>
      </section>

      <section className=''>
        <div className='sort |'></div>
        <div className='cards'>
          {gameJSON.results.length > 0 && gameJSON.results.slice(6).map((gameData) => <GameCard key={gameData.id} item={gameData}/>)}
        </div>
      </section>
    </div>
  )
}

export default App
