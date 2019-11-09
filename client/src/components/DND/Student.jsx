import React, { useEffect, useContext } from 'react'

import { useDrag, useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import { getEmptyImage } from 'react-dnd-html5-backend'


// const checkOne = () => {
//     console.log("clicked ;)")
// }
//     const Student = ({ id, type }) => {
//         const [, drag] = useDrag({
//           item: { id, type }
//         });
//         return (
//           <div style={{ backgroundColor: "pink"}} onClick={() => checkOne()} className="draggable" ref={drag}>
//             draggable
//           </div>
//         );
//       };
// export default Student



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

    // console.log('STUDENT: ', props.student)
    const { studentID, firstName, lastName, hallPassPrivledges, tags } = props.student
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.STUDENT, studentID, firstName, lastName, hallPassPrivledges, tags },
        begin(monitor) {
            console.log('BEGIN Student monitor:', monitor)
    
            },
            end(monitor) {
                //ends with the object being carried
                console.log('END Student monitor:', monitor)
                // console.log("Student monitor.didDrop()", monitor.didDrop())
                // console.log("Student monitor.getItem()", monitor.getItem())
                // console.log("Student getDropResult()", monitor.getDropResult())
            },
        
        
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    return (
        <div ref={drag} style={getStyles(isDragging)}>
            >{firstName} {lastName}
        </div>
    )
}


export default Student
