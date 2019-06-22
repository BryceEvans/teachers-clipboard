import React, { useCallback, useState, useEffect, useContext } from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import DraggableBox from './DraggableBox'
import doSnapToGrid from './snapToGrid'
import update from 'immutability-helper'
import './DnD.css'
import { DeskContext } from '../../Store'
import { MenuContext } from '../../Store'


const styles = {
  width: "1000px",
  height: "700px",
  border: '1px solid black',
  position: 'relative',
}

const Container = ({ snapToGrid }) => {
  const [boxes, setBoxes] = useContext(DeskContext)
  const [menu, setMenu] = useContext(MenuContext)

const createDesk = useCallback(() => {
  setBoxes([...boxes, { top: 100, left: 100, title: 'Desk6' } ]);
});

function renderBox(item, key) {
  return <DraggableBox key={key} id={key} {...item}/>
}

  const moveBox = useCallback(
    (id, left, top, title) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          }
        })
      )
      setMenu({
        visible: true,
        title: title,
        id: id,
        top: top,
        left: left,
      })
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
      moveBox(item.id, left, top, item.title)
      return undefined
    },
  })

  return (
    <div className="Container" ref={drop} style={styles}>
      {Object.keys(boxes).map(key => renderBox(boxes[key], key))}
      <button onClick={() => createDesk()}>Create New Desk</button>
    </div>
  )

}

export default Container
