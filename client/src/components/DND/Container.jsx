import React, { useCallback, useState, useEffect } from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import DraggableBox from './DraggableBox'
import doSnapToGrid from './snapToGrid'
import update from 'immutability-helper'
import './DnD.css'

const styles = {
  width: "1000px",
  height: "700px",
  border: '1px solid black',
  position: 'relative',
}

const Container = ({ snapToGrid, setMenu }) => {
  // console.log('menu:', setMenu)
  const [boxes, setBoxes] = useState([
    { top: 20, left: 80, title: 'Desk1', deskType: "desk-horizontal"},
    { top: 120, left: 20, title: 'Desk2', deskType: "desk-long-horizontal" },
    { top: 320, left: 220, title: 'Desk4', deskType: "desk-long-vertical" },
    { top: 220, left: 120, title: 'Desk3', deskType: "desk-vertical"},
    { top: 420, left: 320, title: 'Desk5', deskType: "desk-square" },
  ])

const createDesk = useCallback(() => {
  setBoxes([...boxes, { top: 100, left: 100, title: 'Desk6' } ]);
});

const rotateDesk = (props) => {
  console.log('Rotate props CONTAINER:', props)

  let newArr = [...boxes]; // copying the old datas array
  newArr[2] = {top: 300, left: 300, title: 'Hard Coded', deskType: "desk-long-horizontal"}; // replace e.target.value with whatever you want to change it to

  setBoxes(newArr);
}



function renderBox(item, key) {
  console.log('key:', key)
  return (
    <div>
        <DraggableBox key={key} id={key} {...item} setMenu={setMenu} />

    </div>
  )

}



  const moveBox = useCallback(
    (id, left, top) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          }
        })
      )
    },
    [boxes],
  )
 

  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset()
      let left = Math.round(item.left + delta.x)
      let top = Math.round(item.top + delta.y)

      if (snapToGrid) {
        ;[left, top] = doSnapToGrid(left, top)
      }
      moveBox(item.id, left, top)
      return undefined
    },
  })

  return (
    <div className="Container" ref={drop} style={styles}>
      {Object.keys(boxes).map(key => renderBox(boxes[key], key))}
      {/* <Example rotateDesk={() => rotateDesk()} />  */}
      <button onClick={() => createDesk()}>Create New Desk</button>
      <button onClick={() => rotateDesk()}>Rotate Desk</button>
    </div>
  )

}

export default Container
