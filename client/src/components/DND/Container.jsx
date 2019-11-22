import React, { useCallback, useState, useEffect, useContext } from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import DraggableDesk from './DraggableDesk'
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
  const [desks, setDesks] = useContext(DeskContext)
  const [menu, setMenu] = useContext(MenuContext)

  
function renderBox(item, key) {
  return <DraggableDesk key={key} id={key} {...item}/>
}

  const moveDesk = useCallback(
    (id, left, top, title, deskType, students) => {
      // console.log('students:', students)
      setDesks(
        update(desks, {
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
        deskType: deskType,
        students: students,
      })
    },
    [desks],
  )
 
  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop(item, monitor) {
    // console.log('item:', item)

      const delta = monitor.getDifferenceFromInitialOffset()
      let left = Math.round(item.left + delta.x)
      let top = Math.round(item.top + delta.y)

      if (snapToGrid) {
        ;[left, top] = doSnapToGrid(left, top)
      }
      moveDesk(item.id, left, top, item.title, item.deskType, item.students)
      return undefined
    },
    collect(monitor, props) {
      // console.log('Container props:', props)
      // console.log('Container monitor:', monitor)

    }
  })

  return (
    <div className="Container" ref={drop} style={styles}>
      {Object.keys(desks).map(key => renderBox(desks[key], key))}
    </div>
  )

}

export default Container
