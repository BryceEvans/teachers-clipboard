import React, {useCallback, useContext, useState} from 'react'
import Container from './Container'
import StudentList from './StudentList'
import CustomDragLayer from './CustomDragLayer'
import {DeskContext, DraggableDeskContext, DraggableStudentContext, MenuContext} from '../../Store'
import StudentList2 from "./StudentList2";

const DragAroundCustomDragLayer = () => {
    const [snapToGridAfterDrop, setSnapToGridAfterDrop] = useState(true)
    const [snapToGridWhileDragging, setSnapToGridWhileDragging] = useState(false)
    const handleSnapToGridAfterDropChange = useCallback(() => {
        setSnapToGridAfterDrop(!snapToGridAfterDrop)
    }, [snapToGridAfterDrop])
    const handleSnapToGridWhileDraggingChange = useCallback(() => {
        setSnapToGridWhileDragging(!snapToGridWhileDragging)
    }, [snapToGridWhileDragging])

    const [menu, setMenu] = useContext(MenuContext)
    const [boxes, setBoxes] = useContext(DeskContext)
    const [canDragDesk, setCanDragDesk] = useContext(DraggableDeskContext)
    const [canDragStudent, setCanDragStudent] = useContext(DraggableStudentContext)


    const switchDesk = (deskType) => {
        switch (deskType) {
            case 'desk-horizontal':
                return 'desk-long-horizontal'

            case 'desk-long-horizontal':
                return 'desk-vertical'

            case 'desk-vertical':
                return 'desk-long-vertical'

            case 'desk-long-vertical':
                return 'desk-square'

            case 'desk-square':
                return 'desk-horizontal'

            default:
                return 'desk-horizontal'
        }
    }


    const rotateDesk = props => {
        // console.log('MainDnD Rotate Desk props: ', props)
        const {id, top, left, title, deskType, students} = props
        let newDeskType = switchDesk(deskType) // Gets the next desk in the switch progrssion
        let newArr = [...boxes]; // copying the old datas array
        newArr[id] = {top: top, left: left, title: title, deskType: newDeskType, students: students}; // replace e.target.value with whatever you want to change it to
        setBoxes(newArr); //Sets the new array to state
        setMenu({visible: true, id: id, title: title, top: top, left: left, deskType: newDeskType, students: students}) //Needed to prevent an intermediary click
    }

    const createDesk = useCallback(() => {
        setBoxes([...boxes, {top: 100, left: 100, title: 'Hard Code', deskType: 'desk-horizontal', students: []}]);
    });

    const update = () => {
        console.log(...boxes)
        console.log('boxes:', boxes[0])
        setBoxes({
            ...boxes, 1:
                {top: 100, left: 100, title: 'Hard Code', deskType: 'desk-horizontal', students: []}
        });
        // setBoxes([...boxes, {1: { top: 100, left: 100, title: 'Hard Code', deskType: 'desk-horizontal', students: [] } ]);
    };

    const onToggleForbidDeskDrag = useCallback(() => {
        setCanDragDesk(!canDragDesk)
    }, [canDragDesk])

    const onToggleForbidStudentDrag = useCallback(() => {
        setCanDragStudent(!canDragStudent)
    }, [canDragStudent])

    const tasksList1 = [
        { _id: 1, title: "First Task", status: "backlog" },
        { _id: 2, title: "Second Task", status: "backlog" },
        { _id: 3, title: "Third Task", status: "backlog" },
        { _id: 4, title: "Fourth Task", status: "new" },
        { _id: 5, title: "Fifth Task", status: "new" },

    ];    const tasksList2 = [
        { _id: 6, title: "Sixth Task", status: "wip" },
        { _id: 7, title: "Seventh Task", status: "review" },
        { _id: 8, title: "Eighth Task", status: "review" },
        { _id: 9, title: "Ninth Task", status: "done" },
        { _id: 10, title: "Tenth Task", status: "done" }
    ];

    const listOne = [
        { id: 1, text: "Item 1" },
        { id: 2, text: "Item 2" },
        { id: 3, text: "Item 3" }
    ];

    const listTwo = [
        { id: 4, text: "Item 4" },
        { id: 5, text: "Item 5" },
        { id: 6, text: "Item 6" }
    ];

    return (
        <div className="DnD">
            <div>
                {/* TODO: CopyPasteDesk, Resize +/-, IncreaseLength, Delete, ChangeDeskType, Diagonal Rotations*/}
                <button onClick={() => createDesk()}>Create New Desk</button>
                <br/>
                Future Menu:
                {menu.visible ? <span>{menu.title}
                    <button onClick={() => rotateDesk(menu)}>Change Shape</button> </span> : null}
            </div>
            <button onClick={() => update()}>Update</button>
            <Container snapToGrid={snapToGridAfterDrop}/>

            <StudentList2 id={5} list={listOne}/>
            <StudentList2 id={4} list={listTwo}/>
            <StudentList id={1} tl={tasksList1}  />
            <StudentList id={2} tl={tasksList2}/>


            <CustomDragLayer snapToGrid={snapToGridWhileDragging}/>
            <p>
                <label htmlFor="snapToGridWhileDragging">
                    <input
                        id="snapToGridWhileDragging"
                        type="checkbox"
                        checked={snapToGridWhileDragging}
                        onChange={handleSnapToGridWhileDraggingChange}
                    />
                    <small>Snap to grid while dragging</small>
                </label>
                <br/>
                <label htmlFor="snapToGridWhileDragging">
                    <input
                        type="checkbox"
                        checked={canDragDesk}
                        onChange={onToggleForbidDeskDrag}
                    />
                    <small>Lock Desks</small>
                </label> <br/>

                <label>
                    <input
                        type="checkbox"
                        checked={canDragStudent}
                        onChange={onToggleForbidStudentDrag}
                    />
                    <small>Lock Students</small>
                </label>

                <br/>
                <label htmlFor="snapToGridAfterDrop">
                    <input
                        id="snapToGridAfterDrop"
                        type="checkbox"
                        checked={snapToGridAfterDrop}
                        onChange={handleSnapToGridAfterDropChange}
                    />
                    <small>Snap to grid after drop</small>
                </label>
            </p>
        </div>
    )
}
export default DragAroundCustomDragLayer
