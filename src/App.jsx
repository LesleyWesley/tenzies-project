import React from "react"
import { nanoid } from "nanoid"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Confetti from "react-confetti"
import './App.css'
import Dice from "./components/Dice.jsx"

function App() {

    const [newDice, setNewDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect( () => {
      const allHeld = newDice.every(die => die.isHeld)
      const allSameValue = newDice.every(die => die.value === newDice[0].value)
      if (allHeld && allSameValue) {
        setTenzies(true)
        console.log("You won!")
      }
    }, [newDice])

    function generateNewDie() {
      return {
        value: Math.floor(Math.random() * 7),
        isHeld: false,
        id: nanoid()
      }
    }

    function allNewDice() {
      let newDiceArray = []
      for (let i = 0; i < 10; i++) {
        newDiceArray.push(generateNewDie())
      }
      return newDiceArray
    }

    function roll() {
      setNewDice(oldDice => oldDice.map( die => {
        return die.isHeld === true ?
          die :
          generateNewDie()
        }))
    }

    function holdDice(id) {
        setNewDice(oldDice => oldDice.map( die => {
          return die.id === id ?
            { ...die, isHeld: !die.isHeld} :
            die
        }))
    }

    function newGame() {
      setNewDice(allNewDice())
      setTenzies(false)
    }

    const diceElements = newDice.map(die => {
      return (
        <Dice  key={die.id} number={die.value} isHeld={die.isHeld} handleClick={() => holdDice(die.id)}/>
      )
    })

    return (
      <main>
        {tenzies && <Confetti />}
        <h1>Tenzies</h1>
        <p className="instructions">Roll until all dice are the same.  Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">
          {diceElements}
        </div>
        <button type="button" className="roll-button" onClick={tenzies ? newGame : roll}>{tenzies ? "New Game" : "Roll"}</button>
      </main>
    )
}

export default App
