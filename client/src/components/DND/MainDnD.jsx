import React, {useCallback, useContext, useState} from 'react'
import Container from './Container'
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
        // console.log(...boxes)
        // console.log('boxes:', boxes[0])
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

    const listOne = [
        { studentID: 1, firstName: "Item 1" },
        { studentID: 2, firstName: "Item 2" },
        { studentID: 3, firstName: "Item 3" }
    ];
    const listTwo = [
        { studentID: 4, firstName: "Item 4" },
        { studentID: 5, firstName: "Item 5" },
        { studentID: 6, firstName: "Item 6" }
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

            <StudentList2 arrayId={"MasterList"} list={listOne}/>
            {/*<StudentList2 arrayId={4} list={listTwo}/>*/}


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
