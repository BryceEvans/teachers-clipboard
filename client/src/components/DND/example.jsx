import React, { useState, useCallback, useContext } from 'react'
import Container from './Container'
import CustomDragLayer from './CustomDragLayer'
import { MenuContext } from '../../Store'
import { DeskContext } from '../../Store'

const DragAroundCustomDragLayer = () => {
  const [snapToGridAfterDrop, setSnapToGridAfterDrop] = useState(true)
  const [snapToGridWhileDragging, setSnapToGridWhileDragging] = useState(false)
  const handleSnapToGridAfterDropChange = useCallback(() => {
    setSnapToGridAfterDrop(!snapToGridAfterDrop)
  }, [snapToGridAfterDrop])
  const handleSnapToGridWhileDraggingChange = useCallback(() => {
    setSnapToGridWhileDragging(!snapToGridWhileDragging)
  }, [snapToGridWhileDragging])
  
  
  const [menu, setMenu] = useContext(MenuContext)
  const [boxes, setBoxes] = useContext(DeskContext)

  const rotateDesk = props => {
    const {id, top, left, title } = props
    // console.log('Rotate props CONTAINER:', props)
  
    let newArr = [...boxes]; // copying the old datas array
    newArr[id] = {top: top, left: left, title: title, deskType: "desk-long-horizontal"}; // replace e.target.value with whatever you want to change it to
  
    setBoxes(newArr);
  }
  return (
    <div> 
      <div>
        Future Menu:  
        {menu.visible ? <span>{menu.title}<button onClick={() => rotateDesk(menu)}>Rotate</button> </span> : null}
      </div>
      <Container snapToGrid={snapToGridAfterDrop} />
      <CustomDragLayer snapToGrid={snapToGridWhileDragging} />
      <p>
        <label htmlFor="snapToGridWhileDragging">
          <input
            id="snapToGridWhileDragging"
            type="checkbox"
            checked={snapToGridWhileDragging}
            onChange={handleSnapToGridWhileDraggingChange}
          />
          <small>Snap to grid while dragging</small>
        </label>
        <br />
        <label htmlFor="snapToGridAfterDrop">
          <input
            id="snapToGridAfterDrop"
            type="checkbox"
            checked={snapToGridAfterDrop}
            onChange={handleSnapToGridAfterDropChange}
          />
          <small>Snap to grid after drop</small>
          {/* <button onClick={Container.createDesk()}>Create New Desk</button> */}
        </label>
      </p>
    </div>
  )
}
export default DragAroundCustomDragLayer
