import { useState } from 'react'
import './App.css'

export default function App() {

  return (
    <main>
      <div className='dice-container'>
        <button className='btn-die'></button>
        <button  className='btn-die'></button>
      </div>
        <button className='btn-roll btn-roll_style'>Roll</button>
    </main>
  )
}

