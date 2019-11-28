import React, {useState, useCallback, useContext} from 'react'
import {useDrop} from 'react-dnd'
import ItemTypes from './ItemTypes'
import './DnD.css'
import Student from "./Student";
import uuid from "uuid";

//This is the area that accepts dropping
//It also displays the student arrays.
//If you see a student name, it's both movable and droppable
const DroppableDesk = ({title, students}) => {
    // console.log('DroppableDesk students:', students)

    const [collectedProps, drop] = useDrop({
        accept: ItemTypes.STUDENT,
        drop(item, monitor) {
            console.log("Dropped item on desk",item);
            if (students.length < 2) {
                students.push(item.student)
            }

            // console.log('DROPPABLE item:', item)
            // console.log('DROPPABLE getitem:', monitor.getItem())
            return console.log(`DROPPABLE returned desk: ${title} Students On Desk: ${students.length}`)
        },
        collect: monitor => {
            // console.log('monitor1:', monitor)
            // console.log('monitor2:', monitor.isOver())
            // console.log('didDrop():', monitor.didDrop())
            // console.log('getDropResult():', monitor.getDropResult())
            // console.log('subscribeToStateChange():', monitor.subscribeToStateChange())
            // console.log('getHandlerId():', monitor.getHandlerId())
            // console.log('receiveHandlerId():', monitor.receiveHandlerId())
            return {
                hovered: monitor.isOver()
            };
        }
    });

    return (
        <div>
            <div className={`drop-area ${collectedProps.hovered ? "drop-area-hovered" : ""}`}
                 className={"DropArea"}
                 ref={drop}>
                <div>
                    {students && students.map((student, index) => {
                        return (
                            <div key={student.studentID + index}>
                                <Student index={index} arrayId={title} student={student} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default DroppableDesk
