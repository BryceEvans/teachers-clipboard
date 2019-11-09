import React, { useState, useCallback, useContext } from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import { DeskContext } from '../../Store'


const DroppableArea = ({title, students}) => {
    console.log('students type:', students)
    
    // console.log('DROPPABLE students:', students.length)


    const [items, setItems] = useState([]);
    const [boxes, setBoxes] = useContext(DeskContext)

    // const appendItem = useCallback(
    //     item => {
    //         console.log('DROPPABLE item being carried:', item)
    //         console.log("DROPPABLE In appenditem call")
    //         setItems(items => [...items, item]);
    //     },
    //     [setItems]
    // );

    const [collectedProps, drop] = useDrop({
        accept: ItemTypes.STUDENT,
        // drop: appendItem, 
        drop(item, monitor) {
            // console.log('DROPPABLE monitor.getITem:', monitor.getItem())
            console.log('DROPPABLE item:', item)
            students.push(item)
            // console.log('DROPPABLE getDropResult():', monitor.getDropResult())

            return console.log(`DROPPABLE returned ${title} ${students.length}`)

        },
        collect: monitor => {
            //   console.log('monitor:', monitor)
            //   console.log('monitor:', monitor.isOver())
            //   console.log('didDrop():', monitor.didDrop())
            //   console.log('getDropResult():', monitor.getDropResult())
            return {
                hovered: monitor.isOver()
            };
        }
    });


    // const listItems = items.map((item, idx) => (
    //     <div key={idx} className="dropped-item" />));

    return (
        <div>
            <div className={`drop-area ${collectedProps.hovered ? "drop-area-hovered" : ""}`}
                ref={drop} >
                Drop Target 
            </div>
            {/* {listItems} */}
        </div>
    );
};

export default DroppableArea
