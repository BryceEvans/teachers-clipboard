import React, { useEffect, useContext } from 'react'
import { useDrag } from 'react-dnd'
import ItemTypes from './ItemTypes'
import { getEmptyImage } from 'react-dnd-html5-backend'
import Box from './Box'
import { MenuContext } from '../../Store'

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
  const [menu, setMenu] = useContext(MenuContext)
  const { id, title, left, top, deskType } = props
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
    console.log('props:', props)

    setMenu({
      visible: true,
      id: props.id,
      title: props.title,
      top: props.top,
      left: props.left
    })
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
