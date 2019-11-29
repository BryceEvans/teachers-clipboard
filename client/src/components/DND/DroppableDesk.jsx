import React, {useState, useCallback, useContext, useEffect} from 'react'
import {useDrop} from 'react-dnd'
import ItemTypes from './ItemTypes'
import './DnD.css'
import Student from "./Student";
import uuid from "uuid";
import update from "immutability-helper";
import {DeskContext} from "../../Store";

//This is the area that accepts dropping
//It also displays the student arrays.
//If you see a student name, it's both movable and droppable
const DroppableDesk = ({title, index, students}) => {
    const [desks, setDesks] = useContext(DeskContext)

    // console.log("Passed Index", index);
    // console.log("Passed Students", students);
    // console.log("Desks from context", desks)

    const [collectedProps, drop] = useDrop({
        accept: ItemTypes.STUDENT,
        drop(item, monitor) {
            // console.log("Dropped item on desk", item);
            if (desks[index].students.length < 2) {
                desks[index].students.push(item.student)
            }
            return {
                arrayId: title
            };
            // console.log('DROPPABLE item:', item)
            // console.log('DROPPABLE getitem:', monitor.getItem())
            // return console.log(`DROPPABLE returned desk: ${title} Students On Desk: ${students.length}`)
        },
        collect: monitor => {
            return {
                hovered: monitor.isOver()
            };
        }
    });
    // console.log("DroppableDesk -> desks", desks)
    // console.log("DroppableDesk -> desks", desks[index])
    // console.log("DroppableDesk -> Index", index)

    const RemoveCard = useCallback(
        (indexToRemove) => {
            console.log("DroppableDesk -> RemoveCard -> indexToRemove", indexToRemove)
            console.log("DroppableDesk -> RemoveCard() Called")
            console.log("DroppableDesk -> RemoveCard() -> desks", desks)
            console.log("DroppableDesk -> RemoveCard() -> desks[index]", desks[index])
            console.log("DroppableDesk -> RemoveCard() -> Index", index)

            // if (desks[index].students.length > 1) {
            // console.log("Called length ABOVE 1")
            setDesks(
                update(desks, {
                    [index]: {
                        students: {
                            $splice: [[indexToRemove, 1]]
                        }
                    }
                }));
            //
            // const collection = [1, 2, {a: [12, 17, 15]}];
            // const newCollection = update(collection, {2: {a: {$splice: [[1, 1, 13, 14]]}}});
            // => [1, 2, {a: [12, 13, 14, 15]}]

            // }
            // else {
            //     console.log("Called length BELOW 1")
            //     setDesks(desks[index].students = [])
            // }
        }
    )

    return (
        <div>
            <div className={`drop-area ${collectedProps.hovered ? "drop-area-hovered" : ""}`}
                 className={"DropArea"}
                 ref={drop}>
                <div>
                    {students && students.map((student, index) => {
                        return (
                            <div key={student.studentID + index}>
                                <Student index={index} arrayId={title} student={student}
                                         removeCard={(ind) => RemoveCard(ind)}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default DroppableDesk
