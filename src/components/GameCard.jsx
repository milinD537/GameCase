import React from 'react'
import gameJSON from "./../../public/test-games.json"

export default function GameCard() {
  return (
    <div>{gameJSON.results[0].id}</div>
  )
}


