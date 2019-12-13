import React, { useEffect, useContext, useState, useCallback} from 'react'
import {useDrag, useDrop} from 'react-dnd'
// import ItemTypes from './ItemTypes'
import {getEmptyImage} from 'react-dnd-html5-backend'
import {MenuContext, DraggableDeskContext} from '../../Store'
// import DroppableDesk from "./DroppableDesk";
// import './DnD.css'
import styles from '../DND/DragDropStyles.css.jsx'
import StudentTracker from "../Modals/StudentTracker"
import Holdable from "../Modals/Holdable"

const ClassroomDesk = (props) => {
    const [open, setOpen] = React.useState(false);
    const [canDragDesk] = useContext(DraggableDeskContext)
    const [, setMenu] = useContext(MenuContext)
    const [attendance, setAttendance] = useState({status: "present", color: "green"})

    const attendanceOptions = [
       {status: "present", color: "green"},
       {status: "absent", color: "red"},
       {status: "tardy", color: "yellow"}
    ]

    let myIndex = 0;
    const {id, title, left, top, deskType, students, index} = props

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const setTheAttendance = useCallback((props) => {
    console.log("Attendance", attendance)
    console.log("STATE CHANGE", props)

      switch(attendance.status) {
        case 'present':
            setAttendance(attendanceOptions[1])
          return
        case 'absent':
            setAttendance(attendanceOptions[2])
          return
        case 'tardy':
            setAttendance(attendanceOptions[0])
          return
        default:
            setAttendance(attendanceOptions[0])
          return
      }
    }, [attendance])

    return (
        <div style={{...styles.getStyles(left, top), ...styles.switchStyle(deskType, attendance.color)}} >
            {open ? <StudentTracker value={open} handleClose={handleClose} /> : null}

            <Holdable
              onClick={() => setTheAttendance(props)}
              onHold={() => setOpen(true)}
            >
                    <div>
                        {students && students.map((student, index) => {
                            return (
                                <div  key={student.studentID + index}>
                                    {student.firstName} {student.lastName}
                                </div>
                            )
                        })}
                    </div>
                </Holdable>
        </div>
    )
}

export default ClassroomDesk