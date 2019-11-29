import React, {useContext, useRef} from 'react'

import {useDrag, useDrop} from 'react-dnd'
import ItemTypes from './ItemTypes'
import {DraggableStudentContext} from "../../Store";

const Student = ({student, index, arrayId, removeCard, moveCard}) => {
    const [canDragStudent, setCanDragStudent] = useContext(DraggableStudentContext)
    const {studentID, firstName, lastName, hallPassPrivledges, tags} = student
    const ref = useRef(null)

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

                removeCard(item.index);
            }
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const [, drop] = useDrop({
        accept: "student",
        hover(item, monitor) {
            console.log("HOVER ITEM", item);
            console.log("REF", ref)
            if (!ref.current) {
                return
            }
            // const dragIndex = monitor.getItem().index;
            const dragIndex = item.index
            const hoverIndex = index


            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current.getBoundingClientRect()
            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            // Determine mouse position
            const clientOffset = monitor.getClientOffset()
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            // Time to actually perform the action

            // console.log("Abt to Call moveCArd");
            // console.log("DragINdex", dragIndex);
            // console.log("HoverINdex", hoverIndex);
            moveCard(dragIndex, hoverIndex)

            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex
        },
    })


    drag(drop(ref))
    return (
        <div ref={ref} style={getStyles(isDragging)}>
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