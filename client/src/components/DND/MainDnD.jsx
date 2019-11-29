import React, {useCallback, useContext, useEffect, useState} from 'react'
import Container from './Container'
import CustomDragLayer from './CustomDragLayer'
import {DeskContext, DraggableDeskContext, DraggableStudentContext, MenuContext} from '../../Store'
import StudentList from "./StudentList";
import update from "immutability-helper";

const MainDragDrop = () => {
    const [snapToGridAfterDrop, setSnapToGridAfterDrop] = useState(true)
    const [snapToGridWhileDragging, setSnapToGridWhileDragging] = useState(false)
    const handleSnapToGridAfterDropChange = useCallback(() => {
        setSnapToGridAfterDrop(!snapToGridAfterDrop)
    }, [snapToGridAfterDrop])
    const handleSnapToGridWhileDraggingChange = useCallback(() => {
        setSnapToGridWhileDragging(!snapToGridWhileDragging)
    }, [snapToGridWhileDragging])

    const [menu, setMenu] = useContext(MenuContext)
    const [desks, setDesks] = useContext(DeskContext)
    const [canDragDesk, setCanDragDesk] = useContext(DraggableDeskContext)
    const [canDragStudent, setCanDragStudent] = useContext(DraggableStudentContext)

    const deleteDesk = useCallback(
        (indexToRemove) => {
            console.log("DELETE INDEX", indexToRemove.id);
            desks.splice(indexToRemove.id ,1)
            setDesks(desks)
            //cant get update to be read. It's weird so this isn't working
            // setDesks(
            //     update(desks, {
            //         $splice: [[indexToRemove, 1]]
            //     })
            // );
        },
    )


    const rotateDesk = props => {
        console.log('MainDnD Rotate Desk props: ', props)
        const {id, top, left, title, deskType, students} = props
        let newDeskType = switchDesk(deskType) // Gets the next desk in the switch progrssion
        let newArr = [...desks]; // copying the old datas array
        newArr[id] = {top: top, left: left, title: title, deskType: newDeskType, students: students}; // replace e.target.value with whatever you want to change it to
        setDesks(newArr); //Sets the new array to state
        setMenu({visible: true, id: id, title: title, top: top, left: left, deskType: newDeskType, students: students}) //Needed to prevent an intermediary click
    }

    // const deleteDesk = useCallback(
    //     (indexToRemove) => {
    //         setDesks(
    //             update(desks, {
    //                 0: {
    //                     students: {
    //                         $splice: [[indexToRemove, 1]]
    //                     }
    //                 }
    //             }));
    //         // }
    //
    //     })



    const createDesk = useCallback(() => {
        setDesks([...desks, {
            top: 100,
            left: 100,
            title: `Desk${desks.length + 1}`,
            deskType: 'desk-horizontal',
            students: []
        }]);
    });

    const update = () => {
        // console.log(...desks)
        // console.log('desks:', desks[0])
        setDesks({
            ...desks, 1:
                {top: 100, left: 100, title: 'Hard Code', deskType: 'desk-horizontal', students: []}
        });
        // setDesks([...desks, {1: { top: 100, left: 100, title: 'Hard Code', deskType: 'desk-horizontal', students: [] } ]);
    };

    const onToggleForbidDeskDrag = useCallback(() => {
        setCanDragDesk(!canDragDesk)
    }, [canDragDesk])

    const onToggleForbidStudentDrag = useCallback(() => {
        setCanDragStudent(!canDragStudent)
    }, [canDragStudent])


    return (
        <div className="DnD">
            <div>
                <button onClick={() => createDesk()}>Add Desk</button>
            </div>
            <br/>

            <div>
                <button onClick={() => update()}>Update</button>
            </div>
            <br/>

            <label htmlFor="snapToGridWhileDragging">
                <input
                    type="checkbox"
                    checked={canDragDesk}
                    onChange={onToggleForbidDeskDrag}
                />
                <small>Lock Desks</small>
            </label>
            <br/>

            <label>
                <input
                    type="checkbox"
                    checked={canDragStudent}
                    onChange={onToggleForbidStudentDrag}
                />
                <small>Lock Students</small>
            </label>
            <br/>

            <div>

                {menu.visible ?
                    <div>
                        Future Menu:
                        <span> {menu.title}
                            <button onClick={() => rotateDesk(menu)}>Rotate</button>
                            <button onClick={() => deleteDesk(menu)}>Delete</button>
                        </span>
                    </div>
                    : null}
            </div>
            <Container snapToGrid={snapToGridAfterDrop}/>
            <StudentList arrayId={"MasterList"}/>


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
export default MainDragDrop


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
