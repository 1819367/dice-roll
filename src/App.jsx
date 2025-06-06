import { useState, useRef, useEffect } from 'react';
import './App.css'
import Die from './components/Die' 
import RollDice from './components/RollDice'
import { nanoid } from 'nanoid'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import Confetti from 'react-confetti';

library.add(faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix);


export default function App() {
  const buttonRef = useRef(null);

  //state to hold array of dice, lazy state initialization
  const [ dice, setDice ] = useState(() => (generateAllNewDice()));
  //state for shaking animation
  const [isShaking, setIsShaking] = useState(false);

  //create a game won variable
  const gameWon = dice.every(die => die.value === dice[0].value);

  //for accessibility improvements, button receives automatic keyboard focus
  useEffect(() => {
    if(gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon])

  //generate two dice with a random side name
  function generateAllNewDice() {
    return new Array(2) //creates a new array of length 2
      .fill(0) //fill it with zeros
      .map(() => ({
        value: Math.ceil(Math.random() * 6), //update, value is 1-6
        id: nanoid()
      }))
      
  }

  //generate new dice with button click
  function handleClick() {
    setIsShaking(true);
    setDice(generateAllNewDice());
    setTimeout(() => setIsShaking(false), 600);
  }

  const diceElements = dice.map((dieObj) => (
    <Die 
      key={dieObj.id} 
      value={dieObj.value} 
      gameWon={gameWon}
      isShaking={isShaking}/>   
  ))

  return (
    <main>
    { gameWon && (
        <>
        <Confetti /> 
        <div aria-live='polite'>
          <p className="main-text_win">Congratulations! You won!<br></br>Press "New Game" to play again.</p>
        </div>
         </>
        )}
      <div>
        <h1 className="main-title">Dice Roll Game</h1>
        <p className="main-text">Roll until both dice are the same.</p>
      </div>
  
      <div className='dice-container'>
        {diceElements}
      </div>
        <RollDice 
          onClick={handleClick}
          gameWon={gameWon} //pass gameWon as a prop
          buttonRef={buttonRef} //pass buttonRef as a prop
          />
    </main>
  )
}

