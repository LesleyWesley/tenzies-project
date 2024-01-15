import React from "react"

function Dice(props) {
  const styles = {
      backgroundColor: props.isHeld ? "#59E391" : "#FFF"
  }
  return (
    <div className="die" style={styles}>{props.number}</div>
  )
}

export default Dice
