import React, {useEffect, useState, useRef, useContext, useCallback} from 'react';
import update from 'immutability-helper';
import {useDrop} from "react-dnd";
import Card from './StudentCard'
import {StudentContext} from "../../Store";

const MyDropTarget = (props, index) => {
    const {arrayId} = props;
    // console.log("ID(arrayId) Passed from MainDnD", arrayId);

    const [students, setStudents] = useContext(StudentContext)

    const ref = useRef(null)
    const [, drop] = useDrop({
            accept: "student",

            drop(props, monitor) {
                const sourceObj = monitor.getItem();
                // console.log("SourceOBJ listid?", sourceObj);
                // console.log("Props arrayid?", props);
                // console.log("Source arrayID", sourceObj.arrayId);
                // console.log("arrayID", arrayId);
                if (arrayId !== sourceObj.arrayId) PushCard(sourceObj.student);
                return {
                    listId: arrayId
                };
            }
            ,
            collect: monitor => {
                return {
                    hovered: monitor.isOver()
                };
            }
        }
    )

    const PushCard = useCallback(
        (student) => {
            setStudents(
                update(students, {
                    // students: {
                    $push: [student]
                    // }
                }));
        })

    const RemoveCard = useCallback(
    (index) => {
        console.log("RemoveCard Called")
        console.log("RemoveIndex", index);
        setStudents(
            update(students, {
                $splice: [
                    [index, 1]
                ]
            }));
    }
)

    const MoveCard = useCallback(
        (dragIndex, hoverIndex) => {
            const dragCard = students[dragIndex]
            setStudents(
                update(students, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, dragCard],
                    ],
                }),
            )
        },
        [students],
    )


    const renderCard = (student, index) => {
        return (
            <Card
                index={index}
                key={student.studentID}
                id={arrayId}
                text={student.firsName}
                student={student}

                moveCard={(dragI, hoverI) => MoveCard(dragI, hoverI)}
                removeCard={(ind) => RemoveCard(ind)}
            />
        )
    }

    const {canDrop, isOver} = props;
    const isActive = canDrop && isOver;
    const style = {
        width: "200px",
        height: "404px",
        border: '1px dashed gray'
    }

    const backgroundColor = isActive ? 'lightgreen' : 'lightgreen';

    drop(ref)

    return (
        <>
            <div ref={ref} style={{
                ...style, backgroundColor
            }}>{students && students.map((student, i) => renderCard(student, i))}</div>
        </>
    )
}


export default MyDropTarget