import React, { useEffect, useContext} from 'react'
import {useDrag, useDrop} from 'react-dnd'
import ItemTypes from './ItemTypes'
import {getEmptyImage} from 'react-dnd-html5-backend'
import {MenuContext, DraggableDeskContext} from '../../Store'
import DroppableDesk from "./DroppableDesk";
import './DnD.css'
import styles from './DragDropStyles.css'

const Desk = props => {
    const [canDragDesk] = useContext(DraggableDeskContext)
    const [, setMenu] = useContext(MenuContext)
    const {id, title, left, top, deskType, students, index} = props

    const [{isDragging}, drag, preview] = useDrag({
        item: {type: ItemTypes.BOX, id, left, top, title, deskType, students},
        canDrag: !canDragDesk,
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })
    useEffect(() => {
        preview(getEmptyImage(), {captureDraggingState: true})
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
        <div onClick={() => boxInfo(props)}
             onMouseDown={() => boxInfo(props)}
             style={{...styles.getStyles(left, top, isDragging), ...styles.switchStyle(deskType, "white")}}
             ref={drag}>
            MyBlah
            <DroppableDesk title={title} students={students} index={index}/>
        </div>
    )
}

export default Desk