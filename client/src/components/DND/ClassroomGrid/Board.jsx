import React from 'react'
import Square from '../Square/Square'
import Knight from '../Student/Student'
import BoardSquare from '../Square/BoardSquare'

import { moveKnight } from '../ClassroomGrid/Game'


function handleSquareClick(toX, toY) {
    moveKnight(toX, toY)
  }

  const squareTarget = {
    drop(props, monitor) {
      moveKnight(props.x, props.y)
    },
  }
  
  function renderSquare(i, knightPosition) {
    const x = i % 8
    const y = Math.floor(i / 8)
    return (
      <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
        <BoardSquare x={x} y={y}>
          {renderPiece(x, y, knightPosition)}
        </BoardSquare>
      </div>
    )
  }
  
  function renderPiece(x, y, [knightX, knightY]) {
    if (x === knightX && y === knightY) {
      return <Knight />
    }
  }


export default function Board({ knightPosition }) {
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition))
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {squares}
    </div>
  )
}