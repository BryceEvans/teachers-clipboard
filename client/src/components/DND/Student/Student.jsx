import React from 'react'
import { ItemTypes } from '../ClassroomGrid/ItemType'

import { DragSource, DragPreviewImage } from 'react-dnd'


const knightStyle = {
  fontSize: 40,
  fontWeight: 'bold',
  cursor: 'move',
}
const Knight = ({ connectDragSource, connectDragPreview, isDragging }) => {
  return (
    <>
      {/* <DragPreviewImage connect={connectDragPreview} src={knightImage} /> */}
      <div
        ref={connectDragSource}
        style={Object.assign({}, knightStyle, {
          opacity: isDragging ? 0.5 : 1,
        })}
      >
        ♘
      </div>
    </>
  )
}
export default DragSource(
  ItemTypes.KNIGHT,
  {
    beginDrag: () => ({}),
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }),
)(Knight)
