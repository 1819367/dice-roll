import { useState } from 'react'
import './App.css'
import Die from './components/Die' 
import RollDice from './components/RollDice'
import { nanoid } from 'nanoid'

export default function App() {

  //state to hold array of dice
  const [ dice, setDice ] = useState(generateAllNewDice());

  //generate two dice with a random side name
  function generateAllNewDice() {
    const sides = ['one', 'two', 'three', 'four', 'five', 'six']
    return new Array(2) //creates a new array of length 2
      .fill(0) //fill it with zeros
      // .map(() => sides[Math.floor(Math.random() * sides.length)]) //map over the array
      .map(() => ({
        value: sides[Math.floor(Math.random() * sides.length)],
        id: nanoid()
      }))
      
  }
  // console.log(generateAllNewDice()) //console log to call new dice array

  //generate new dice with button click
  function handleClick() {
    setDice(generateAllNewDice())
  }

  const diceElements = dice.map((dieObj) => (
    <Die key={dieObj.id} value={dieObj.value} />  //pass value and id props 
  ))

  return (
    <main>
      <div className='dice-container'>
        {diceElements}
      </div>
        <RollDice 
          onClick={handleClick}/>
    </main>
  )
}

