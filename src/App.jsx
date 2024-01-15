import React from "react"
import { nanoid } from "nanoid"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dice from "./components/Dice.jsx"

function App() {

    function allNewDice() {
      let newDiceArray = []
      for (let i = 0; i < 10; i++) {
        newDiceArray.push({
          value: Math.floor(Math.random() * 7),
          isHeld: false,
          id: nanoid()
        })
      }
      return newDiceArray
    }

    console.log(allNewDice())

    const [newDice, setNewDice] = React.useState(allNewDice())

    function roll() {
      setNewDice(allNewDice())
    }

    const diceElements = newDice.map(die => {
      return (
        <Dice  key={die.id} number={die.value}/>
      )
    })

    return (
      <main>
        <div className="dice-container">
          {diceElements}
        </div>
        <button type="button" className="roll-button" onClick={roll}>Roll</button>
      </main>
    )
}

export default App
