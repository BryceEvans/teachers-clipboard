import React, { useState, useCallback, useEffect, useContext } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import { getEmptyImage } from 'react-dnd-html5-backend'
import Box from './Box'
import { MenuContext, DeskContext } from '../../Store'

function getStyles(left, top, isDragging) {
    const transform = `translate3d(${left}px, ${top}px, 0)`
    return {
        position: 'absolute',
        transform,
        WebkitTransform: transform,
        // IE fallback: hide the real node using CSS when dragging
        // because IE will ignore our custom "empty image" drag preview.
        // opacity: isDragging ? 0 : 1,
        // height: isDragging ? 0 : '',
    }
}
const DraggableBox = props => {
    const [menu, setMenu] = useContext(MenuContext)
    const { id, title, left, top, deskType, students } = props

    const [, drag, preview] = useDrag({
        item: { type: ItemTypes.BOX, id, left, top, title, deskType, students },

        collect(monitor, props) {
            // console.log('Draggable props:', props)
            // console.log('Draggable monitor:', monitor)

        }
        // collect: monitor => ({
        //     isDragging: monitor.isDragging(),
        // }),
    })
    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true })
    }, [])

    const boxInfo = (props) => {
        setMenu({
            visible: true,
            id: props.id,
            title: props.title,
            top: props.top,
            left: props.left,
            deskType: props.deskType,
            students: props.students
        })
    }

    return (
        <div onClick={() => boxInfo(props)} onMouseDown={() => boxInfo(props)}
            style={getStyles(left, top)} ref={drag}>
                
            <Box title={title} deskType={deskType} students={students} />
        </div>
    )
}

export default DraggableBox
