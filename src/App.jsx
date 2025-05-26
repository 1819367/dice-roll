import { useState } from 'react'
import './App.css'
import Die from './components/Die' 
import RollDice from './components/RollDice'

export default function App() {

//generate two dice with a random side name
  function generateAllNewDice() {
  const sides = ['one', 'two', 'three', 'four', 'five', 'six']
  return new Array(2) //creates a new array of length 2
    .fill(0) //fill it with zeros
    .map(() => sides[Math.floor(Math.random() * sides.length)]) //map over the array
}
  console.log(generateAllNewDice())

  return (
    <main>
      <div className='dice-container'>
        <Die value={1}/>
        <Die value={2}/>
      </div>
        <RollDice />
    </main>
  )
}

