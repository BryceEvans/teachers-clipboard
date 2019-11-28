import React, {useContext} from 'react'

import {useDrag} from 'react-dnd'
import ItemTypes from './ItemTypes'
import {DraggableStudentContext} from "../../Store";

function getStyles(left, top, isDragging) {
    const transform = `translate3d(${left}px, ${top}px, 0)`
    return {
        //   position: 'absolute',
        transform,
        WebkitTransform: transform,
        // IE fallback: hide the real node using CSS when dragging
        // because IE will ignore our custom "empty image" drag preview.
        opacity: isDragging ? 0 : 1,
        height: isDragging ? 0 : '',
        backgroundColor: "yellow",
    }
}

const Student = props => {
    // console.log("PROPS",props);
    const [canDragStudent, setCanDragStudent] = useContext(DraggableStudentContext)
    const {studentID, firstName, lastName, hallPassPrivledges, tags} = props.student
    const index = props.index
    const arrayId = props.arrayId

    // console.log("Index from student props", index);

    const [{isDragging}, drag] = useDrag({
        item: {type: ItemTypes.STUDENT, firstName, lastName, arrayId},
        canDrag: !canDragStudent,

        begin(monitor) {
            return {
                index: index,
                arrayId: arrayId,
                student: props.student
            }
        },
        end(monitor) {
            console.log('END Student monitor:', monitor)
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    return (
        <div ref={drag} style={getStyles(isDragging)}>
            {firstName} {lastName}
        </div>
    )
}


export default Student
