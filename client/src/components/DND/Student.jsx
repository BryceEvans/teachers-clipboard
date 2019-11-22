import React, {useContext} from 'react'

import {useDrag} from 'react-dnd'
import ItemTypes from './ItemTypes'
import {DraggableStudentContext} from "../../Store";


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
        opacity: isDragging ? 0 : 1,
        height: isDragging ? 0 : '',
        backgroundColor: "yellow",
    }
}

const Student = props => {
    const [canDragStudent, setCanDragStudent] = useContext(DraggableStudentContext)
    const {studentID, firstName, lastName, hallPassPrivledges, tags} = props.student

    const [{isDragging}, drag] = useDrag({
        item: {type: ItemTypes.STUDENT, studentID, firstName, lastName, hallPassPrivledges, tags},
        canDrag: !canDragStudent,
        begin(monitor) {
            console.log('BEGIN Student monitor:', monitor)

        },
        end(monitor) {
            //ends with the object being carried
            console.log('END Student monitor:', monitor)
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
