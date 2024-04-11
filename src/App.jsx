import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameCard from './components/GameCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <section className='header'></section>

      <section className='heroSection'>
        <div className='trending'></div>
        <div className='heroGrid'>
          <div>

          </div>
          <div>
            top 6 here
          </div>
        </div>
      </section>

      <section className=''>
        <div className='sort |'></div>
        <div className='cards'>
          <GameCard/>
        </div>
      </section>
    </div>
  )
}
// <div className='card |'>
//   <div className='cardImageWrapper'></div>
//   <div className='cardDetails'>
//     <h3 className='gameTitle'></h3>
//     <div className='gameRatingWrapper'></div>
//     <p className='gamePrice'></p>
//   </div>
// </div>
export default App
