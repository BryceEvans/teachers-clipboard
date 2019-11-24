import React, {useEffect, useState} from 'react';
import update from 'immutability-helper';
import {useDrop} from "react-dnd";
import Card from './StudentCard'

const MyDropTarget = (props) => {
console.log("Propr", props.list)
    const [collectedProps, drop] = useDrop({
        accept: "CARD",
        drop(props, monitor) {
            const {id} = props;
            const sourceObj = monitor.getItem();
            console.log("What is this src obj", sourceObj)
            if (id !== sourceObj.listId) pushCard(sourceObj.card);
            return {
                listId: id
            };
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
            // (connect, monitor) => ({
            //     connectDropTarget: connect.dropTarget(),
            //     isOver: monitor.isOver(),
            //     canDrop: monitor.canDrop()
            // })
        }

    })

    const [students, setStudents] = useState(props.list);
    useEffect(() => setStudents(props), [students])

    const pushCard = (card) => {
        console.log("INSIDE CARD", card)
        setStudents(card)
    }

    const removeCard = (index) => {
        setStudents(update(students, {
            cards: {
                $splice: [
                    [index, 1]
                ]
            }
        }));
    }

    const moveCard = (dragIndex, hoverIndex) => {
        console.log("MOVECARD DragI", dragIndex)
        console.log("MOVECARD HoverI", hoverIndex)

        const {cards} = students;
        const dragCard = cards[dragIndex];

        setStudents(update(students, {
            cards: {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragCard]
                ]
            }
        }));
    }

    const myStudents = students.list;
    const {canDrop, isOver, connectDropTarget} = props;
    const isActive = canDrop && isOver;
    const style = {
        width: "200px",
        height: "404px",
        border: '1px dashed gray'
    }

    const backgroundColor = isActive ? 'lightgreen' : '#FFF';

    return (
        <div  ref={drop} style={{...style, backgroundColor}}>
            {console.log("StudentList2 mystudents", myStudents)}
            {myStudents && myStudents.map((card, i) => {
                return (
                    <Card
                        key={card.id}
                        index={i}
                        listId={props.id}
                        card={card}
                        removeCard={() => removeCard.bind(this)}
                        moveCard={() => moveCard()}/>
                );
            })}
        </div>
    );
}


export default MyDropTarget