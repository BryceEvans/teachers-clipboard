import React, {useCallback, useContext} from 'react'
import {useDrop} from 'react-dnd'
import ItemTypes from './ItemTypes'
import './DnD.css'
import Student from "./Student";
import update from "immutability-helper";
import {DeskContext} from "../../Store";

//This is the area that accepts dropping
//It also displays the student arrays.
//If you see a student name, it's both movable and droppable
const DroppableDesk = ({title, index, students}) => {
    console.log("WHO ARE THESE STUDS", students);
    const [desks, setDesks] = useContext(DeskContext)

    // console.log("Passed Index", index);
    // console.log("Passed Students", students);
    // console.log("Desks from context", desks)

    const [collectedProps, drop] = useDrop({
        accept: ItemTypes.STUDENT,
        drop(item, monitor) {
            // console.log("MONITOR: ", monitor.getDropResult())
            // console.log("GETITEM: ", monitor.getItem())
            // console.log("ITEM: ", item)
            let arrLen;
            if (desks[index].students.length < 2) {
                arrLen = desks[index].students.length
                desks[index].students.push(item.student)
            }
            return {
                arrayId: title,
                arrLen: arrLen
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
            console.log("ARRAY LENGTH", desks[index].students.length)

            setDesks(
                update(desks, {
                    [index]: {
                        students: {
                            $splice: [[indexToRemove, 1]]
                        }
                    }
                })
            );
        },
    )
    const MoveCard = useCallback(
        (dragIndex, hoverIndex) => {
            const dragCard = students[dragIndex]
            setDesks(
                update(desks, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, dragCard],
                    ],
                }),
            )
        },
        [students],
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
                                <Student
                                    index={index}
                                    arrayId={title}
                                    student={student}
                                    removeCard={(ind) => RemoveCard(ind)}
                                    moveCard={(dragI, hoverI) => MoveCard(dragI, hoverI)}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default DroppableDesk
