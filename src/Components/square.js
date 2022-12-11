import React from 'react'
import "../App.css"

const square = ({val, chooseSquare, id}) => {
  return (
    <div className="square" id={id} onClick={chooseSquare} >{val}</div>
  )
}

export default square