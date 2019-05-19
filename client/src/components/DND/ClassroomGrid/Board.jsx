import React from 'react'
import Square from '../Square/Square'
import Knight from '../Student/Student'

import { moveKnight } from '../ClassroomGrid/Game'

import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'


function handleSquareClick(toX, toY) {
    moveKnight(toX, toY)
  }

function renderSquare(i, [knightX, knightY]) {
  const x = i % 8
  const y = Math.floor(i / 8)
  const isKnightHere = x === knightX && y === knightY
  const black = (x + y) % 2 === 1
  const piece = isKnightHere ? <Knight /> : null

  return (
    <div onClick={() => handleSquareClick(x, y)} key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <Square black={black}>{piece}</Square>
    </div>
  )
}



export default function Board({ knightPosition }) {
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition))
  }

  return (
    <DragDropContextProvider backend={HTML5Backend}>
    style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
    }}
    >
      {squares}
    </DragDropContextProvider>
  )
}