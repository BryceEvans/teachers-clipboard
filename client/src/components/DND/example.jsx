import React, { useState, useCallback, useContext } from 'react'
import Container from './Container'
import CustomDragLayer from './CustomDragLayer'
import { MenuContext } from '../../Store'

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

  return (
    <div> 
      <div>
        Future Menu:  
        {menu.visible ? <span>{menu.desk}<button >Rotate</button> </span> : null}
      </div>
      <Container snapToGrid={snapToGridAfterDrop} setMenu={setMenu} />
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
