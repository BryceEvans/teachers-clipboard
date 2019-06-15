import React from 'react'
import Square from './Square'
import { moveKnight } from '../ClassroomGrid/Game'
import { ItemTypes } from '../ClassroomGrid/ItemType'
import { DropTarget } from 'react-dnd'

// import Overlay from './Overlay'

const boardSquareStyle = {
  position: 'relative',
  width: '100%',
  height: '100%',
}
const BoardSquare = ({
  x,
  y,
  connectDropTarget,
  isOver,
  canDrop,
  children,
}) => {
  const black = (x + y) % 2 === 1
  return connectDropTarget(
    <div style={boardSquareStyle}>
      <Square black={black}>{children}</Square>
      {/* {isOver && !canDrop && <Overlay color="red" />}
      {!isOver && canDrop && <Overlay color="color" />}
      {isOver && canDrop && <Overlay color="green" />} */}
    </div>,
  )
}
export default DropTarget(
  ItemTypes.KNIGHT,
  {
    //USED FOR RESTRICTING DROPZONES
    // canDrop: props => canMoveKnight(props.x, props.y),
    drop: props => moveKnight(props.x, props.y),
  },
  (connect, monitor) => {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }
  },
)(BoardSquare)
