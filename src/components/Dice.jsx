import React from "react"

function Dice(props) {
  const styles = {
      backgroundColor: props.isHeld ? "#59E391" : "#FFF"
  }
  return (
    <div className="die" style={styles} onClick={props.handleClick}>{props.number}</div>
  )
}

export default Dice
