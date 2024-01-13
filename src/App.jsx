import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dice from "./components/Dice.jsx"

function App() {

    function allNewDice() {
      let newDiceArray = []
      for (let i = 0; i < 10; i++) {
        newDiceArray.push( Math.floor(Math.random() * 7))
      }
      console.log(newDiceArray)
    }

    allNewDice()

    return (
      <main>
        <div className="dice-container">
          <Dice number="6"/>
          <Dice number="2" />
          <Dice number="1" />
          <Dice number="5" />
          <Dice number="4" />
          <Dice number="6"/>
          <Dice number="2" />
          <Dice number="1" />
          <Dice number="5" />
          <Dice number="4" />
        </div>
      </main>
    )
}

export default App
