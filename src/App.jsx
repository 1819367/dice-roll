import { useState } from 'react'
import './App.css'
import Die from './components/Die' 
import RollDice from './components/RollDice'

export default function App() {

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

