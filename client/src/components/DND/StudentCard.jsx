import React, {useRef} from 'react';
import {useDrag, useDrop} from 'react-dnd'
import ItemTypes from "./ItemTypes";

const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    margin: '.5rem',
    backgroundColor: 'white',
    cursor: 'move'
};

const Card = ({student, removeCard, index, text, id, moveCard, listId}) => {
    var firstName = student.firstName

    const ref = useRef(null)
    const [, drop] = useDrop({
        accept: "student",
        hover(item, monitor) {
            // console.log("HOVER ITEM", item);
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

            console.log("Abt to Call moveCArd");
            console.log("DragINdex", dragIndex);
            console.log("HoverINdex", hoverIndex);
            moveCard(dragIndex, hoverIndex)

            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex
        },
    })


    const [{isDragging}, drag] = useDrag({
        item: {type: "student", firstName},
        //This goes into STUDENTLIST2 and is accessible there
        begin(monitor) {
            return {
                index: index,
                arrayId: id,
                student: student
            }
        },
        end(props, monitor) {
            console.log("STUDENT CARD MONITOR", monitor);
            const item = monitor.getItem();
            const dropResult = monitor.getDropResult();
            //
            //If the listID is different on drop, remove orig.

            // console.log("DragEnd Item arrayID:", item);
            console.log("DragEnd DropResult listID", dropResult);

            if (dropResult && dropResult.listId !== item.arrayId) {
                console.log("item.arrayId", item.arrayId);
                console.log("dropResult.listId", dropResult.listId);
                console.log("item.index", item.index);

                removeCard(item.index);

            }
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0 : 1
    drag(drop(ref))
    return (
        <div ref={ref} style={{...style, opacity}}>
            {student.firstName + student.lastName}
        </div>
    );
}
export default Card