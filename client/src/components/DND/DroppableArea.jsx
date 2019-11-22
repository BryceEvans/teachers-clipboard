import React, { useState, useCallback, useContext } from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import {DeskContext} from '../../Store'
import './DnD.css'
import Student from "./Student";

//This is the area that accepts dropping
//It also displays the student arrays.
//If you see a student name, it's both movable and droppable
const DroppableArea = ({title, students}) => {
    // console.log('students type:', students)

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
            console.log('DROPPABLE item:', item)
            students.push(item)
            return console.log(`DROPPABLE returned desk: ${title} Students On Desk: ${students.length}`)

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
                 className={"DropArea"}
                ref={drop} >
                <div>
                    {students && students.map(student => {
                        return (
                            <div key={student.studentID} >
                                {console.log("Box.js Students", students)}
                                <Student student={student}/>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* {listItems} */}
        </div>
    );
};

export default DroppableArea
