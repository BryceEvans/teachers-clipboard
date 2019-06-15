import React from 'react'
import BoardSquare from '../Square/BoardSquare'

import { Piece } from '../Student/Piece'
/** Styling properties applied to the board element */

const boardStyle = {
  width: '750px',
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: 50,
  marginTop: 50,
}
/** Styling properties applied to each square element */
const squareStyle = { width: '25px', height: '25px' }
/**
 * The chessboard component
 * @param props The react props
 */
const Board = ({ knightPosition: [knightX, knightY] }) => {
  function renderSquare(i) {
    // console.log("What is i:", i)
    const x = i % 8
    const y = Math.floor(i / 8)
    return (
      <div key={i} style={squareStyle}>
        
        <BoardSquare x={x} y={y}>
          {/* {i} */}
          <Piece isKnight={x === knightX && y === knightY} />
        </BoardSquare>
      </div>
    )
  }
  const squares = []
  for (let i = 0; i < 200; i += 1) {
      // console.log("What is this?", i)
    squares.push(renderSquare(i))
  }
  return <div style={boardStyle}>{squares} </div>
}
export default Board
