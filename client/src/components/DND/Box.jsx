import React from 'react'
import Student from './Student'

import DroppableArea from './DroppableArea'

const styles = {
    border: '1px solid gray',
    width: '80px',
    height: '60px',
    padding: '3px',
    cursor: 'move',
}

const Box = ({ title, deskType, students, color }) => {
    const backgroundColor = color ? 'lightgrey' : 'white'
    let x = switchStyle(deskType, backgroundColor)

    return (
        <div style={x} >
            <div style={{backgroundColor: "orange"}}>
                {title}
            </div>
            <div style={{ backgroundColor: "teal"}} >
                <DroppableArea title={title} students={students} />
            </div>
            <div>
                {students && students.map(student => {
                    return (
                        <div key={student.studentID} >
                            <Student student={student}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

// This takes in the deskType passed from Container and checks style. Grabs css for that style
const switchStyle = (deskType, backgroundColor) => {
    switch (deskType) {
        case 'desk-horizontal':
            return Object.assign({}, styles, { backgroundColor });
        case 'desk-long-horizontal':
            return Object.assign({}, styles2, { backgroundColor });
        case 'desk-vertical':
            return Object.assign({}, styles3, { backgroundColor });
        case 'desk-long-vertical':
            return Object.assign({}, styles4, { backgroundColor });
        case 'desk-square':
            return Object.assign({}, styles5, { backgroundColor });
        case 'desk-square-45':
            return Object.assign({}, styles6, { backgroundColor });
        case 'desk-circle':
            return Object.assign({}, styles7, { backgroundColor });
        case 'desk-medium-circle':
            return Object.assign({}, styles8, { backgroundColor });
        case 'desk-large-circle':
            return Object.assign({}, styles9, { backgroundColor });
        default:
            return Object.assign({}, styles, { backgroundColor });
    }
}

export default Box


const styles2 = {
    border: '1px solid gray',
    width: '120px',
    height: '60px',
    padding: '3px',
    cursor: 'move',
}
const styles3 = {
    border: '1px solid gray',
    width: '60px',
    height: '80px',
    padding: '3px',
    cursor: 'move',
}

const styles4 = {
    border: '1px solid gray',
    width: '60px',
    height: '120px',
    padding: '3px',
    cursor: 'move',
}

const styles5 = {
    border: '1px solid gray',
    width: '60px',
    height: '60px',
    padding: '3px',
    cursor: 'move',
}

const styles6 = {
    border: '1px solid gray',
    width: '58px',
    height: '58px',
    padding: '3px',
    cursor: 'move',
    WebkitTransform: 'rotate(-45deg)',
}
const styles7 = {
    border: '1px solid gray',
    width: '60px',
    height: '60px',
    padding: '3px',
    cursor: 'move',
    borderRadius: "50%",
}
const styles8 = {
    border: '1px solid gray',
    width: '100px',
    height: '100px',
    padding: '3px',
    cursor: 'move',
    borderRadius: "50%",
}

const styles9 = {
    border: '1px solid gray',
    width: '120px',
    height: '120px',
    padding: '3px',
    cursor: 'move',
    borderRadius: "50%",
}