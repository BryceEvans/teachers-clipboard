import React, { useCallback, useState } from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import DraggableBox from './DraggableBox'
import doSnapToGrid from './snapToGrid'
import update from 'immutability-helper'

const styles = {
  width: "1000px",
  height: "500px",
  border: '1px solid black',
  position: 'relative',
  marginLeft: 50,
}

function renderBox(item, key) {
  return <DraggableBox key={key} id={key} {...item} />
}

const Container = ({ snapToGrid }) => {
  const [boxes, setBoxes] = useState([
     { top: 20, left: 80, title: 'Desk1' },
     { top: 120, left: 20, title: 'Desk2' },
     { top: 220, left: 120, title: 'Desk3' },
     { top: 320, left: 220, title: 'Desk4' },
     { top: 420, left: 320, title: 'Desk5' },
  ])

  const createDesk = () => {
    setBoxes([...boxes, { top: 100, left: 100, title: 'Desk6' } ]);
  };

  const moveBox = useCallback(
    (id, left, top) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        }),
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
    <div ref={drop} style={styles}>
      <button onClick={() => createDesk()}>Create New Desk</button>
      {Object.keys(boxes).map(key => renderBox(boxes[key], key))}
    </div>
  )
}

export default Container
