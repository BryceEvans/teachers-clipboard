import React, { useRef, useEffect } from 'react'
import { useDrag } from 'react-dnd'
import ItemTypes from './ItemTypes'
import { getEmptyImage } from 'react-dnd-html5-backend'
import Box from './Box'

function getStyles(left, top, isDragging) {
  const transform = `translate3d(${left}px, ${top}px, 0)`
  return {
    position: 'absolute',
    transform,
    WebkitTransform: transform,
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : '',
  }
}
const DraggableBox = props => {
  const { id, title, left, top, deskType, setMenu } = props
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.BOX, id, left, top, title, deskType },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [])

  const boxInfo = (props) => {
    console.log('IMPORTprops:', props)
    setMenu({
      visible:true,
      desk: props.title,
      id: props.id,
      top: props.top,
      left: props.left,
    })

    console.log("P Here: ", props)
  }

  return (
    <div onClick={() => boxInfo(props)} 
        onMouseDown={() => boxInfo(props)} 
        ref={drag} 
        style={getStyles(left, top, isDragging)}>

      <Box title={title} deskType={deskType}/>
    </div>
  )
}
export default DraggableBox
