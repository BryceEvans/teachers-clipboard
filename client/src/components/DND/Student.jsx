import React, {useContext, useRef} from 'react'

import {useDrag, useDrop} from 'react-dnd'
import ItemTypes from './ItemTypes'
import {DraggableStudentContext} from "../../Store";

const Student = ({student, index, arrayId, removeCard, moveCard}) => {
    const [canDragStudent, setCanDragStudent] = useContext(DraggableStudentContext)
    const {studentID, firstName, lastName, hallPassPrivledges, tags} = student

    const [{isDragging}, drag] = useDrag({
        item: {type: ItemTypes.STUDENT, firstName, lastName, arrayId},
        canDrag: !canDragStudent,

        begin(monitor) {
            return {
                index: index,
                arrayId: arrayId,
                student: student
            }
        },
        end(props, monitor) {
            // console.log("MOnitor item not an item?", monitor);
            const item = monitor.getItem();
            const dropResult = monitor.getDropResult();
            // console.log("Student -> UseDrag -> getItem", item);
            // console.log("Student -> UseDrag -> PROPS", props);
            // console.log("Student -> UseDrag -> dropResult", dropResult);
            // console.log("Student -> UseDrag -> index", index);

            if (dropResult && dropResult.arrayId !== item.arrayId) {
                // console.log("Student -> UseDrag -> item.ArrayId", item.arrayId);
                // console.log("Student -> UseDrag -> dropResult.arrayId", dropResult.arrayId);
                // console.log("item.index for remove card", item.index);
                if (dropResult.arrLen < 1) {

                    removeCard(item.index);
                }
            }
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