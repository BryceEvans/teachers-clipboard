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


  const switchDesk = (deskType) => {
    switch(deskType) {
      case 'desk-horizontal':
          return 'desk-long-horizontal'

      case 'desk-long-horizontal':
          return 'desk-vertical'

      case 'desk-vertical':
          return 'desk-long-vertical'

      case 'desk-long-vertical':
          return 'desk-square'

      case 'desk-square':
          return 'desk-horizontal'

      default:
          return 'desk-horizontal'
    }
  }

  
  const rotateDesk = props => {
    console.log('props:', props)
    const {id, top, left, title, deskType, students } = props
    let newDeskType = switchDesk(deskType) // Gets the next desk in the switch progrssion
    let newArr = [...boxes]; // copying the old datas array
    newArr[id] = {top: top, left: left, title: title, deskType: newDeskType, students: students}; // replace e.target.value with whatever you want to change it to
    setBoxes(newArr); //Sets the new array to state
    setMenu({ visible: true, id: id, title: title, top: top, left: left, deskType: newDeskType, students: students }) //Needed to prevent an intermediary click
  }

  const createDesk = useCallback(() => {
    setBoxes([...boxes, { top: 100, left: 100, title: 'Hard Code', deskType: 'desk-horizontal', students: [] } ]);
  });

  const update = () => {
    console.log(...boxes )
    console.log('boxes:', boxes[0])
    setBoxes({...boxes, 1: 
      {top: 100, left: 100, title: 'Hard Code', deskType: 'desk-horizontal', students: [] } });
      
      
    // setBoxes([...boxes, {1: { top: 100, left: 100, title: 'Hard Code', deskType: 'desk-horizontal', students: [] } ]);
  };

//   setExampleState({...exampleState,  masterField2: {
//     fieldOne: "c",
//     fieldTwo: {
//        fieldTwoOne: "d",
//        fieldTwoTwo: "e"
//        }
//     },
// }})

  return (
    <div> 
      <div>
        {/* TODO: CopyPasteDesk, Resize +/-, IncreaseLength, Delete, ChangeDeskType, Diagonal Rotations*/}
        <button onClick={() => createDesk()}>Create New Desk</button>
        Future Menu:  
        {menu.visible ? <span>{menu.title}<button onClick={() => rotateDesk(menu)}>Rotate</button> </span> : null}
      </div>
          <button onClick={() => update()}>Update</button>
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
        </label>
      </p>
    </div>
  )
}
export default DragAroundCustomDragLayer
