import React, { useState, useCallback } from 'react'
import { DragSource } from 'react-dnd'
// import Colors from './Colors'

const style = {
    border: '1px solid gray',
    width: '70px',
    height: '30px',
    padding: '3px',
    cursor: 'move',
    backgroundColor: 'lightgrey',

}

const Box = ({ title, deskType, color = 'lightgray',
    children,
    isDragging,
    connectDragSource,
    forbidDrag,
    onToggleForbidDrag, }) => {
    const opacity = isDragging ? 0.4 : 1
    let backgroundColor = color ? 'lightgray' : 'white'

    // switch (color) {
    //   case Colors.YELLOW:
    //     backgroundColor = 'lightgoldenrodyellow'
    //     break
    //   case Colors.BLUE:
    //     backgroundColor = 'lightblue'
    //     break
    //   default:
    //     break
    // }
    return connectDragSource(
        <div
            style={{
                ...style,
                backgroundColor,
                opacity,
                cursor: forbidDrag ? 'default' : 'move',
            }}
        >
            <input
                type="checkbox"
                checked={forbidDrag}
                onChange={onToggleForbidDrag}
            />
            <small>No drag</small>
            {/* {children} */}
        </div>,
    )
}

const SourceBox = DragSource(
    props => props.color + '',
    {
        canDrag: props => !props.forbidDrag,
        beginDrag: () => ({}),
    },
    (connect, monitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }),
)(Box)

const StatefulSourceBox = props => {
    const [forbidDrag, setForbidDrag] = useState(false)
    const handleToggleForbidDrag = useCallback(() => {
        setForbidDrag(!forbidDrag)
    }, [forbidDrag])
    return (
        <SourceBox
            {...props}
            // forbidDrag={forbidDrag}
            // onToggleForbidD  rag={() => handleToggleForbidDrag()}
        />
    )
}
// const backgroundColor = color ? 'lightgrey' : 'white'

// let x = switchStyle(deskType, backgroundColor)

// return (
//   <div style={x}>
//       {title}
//   </div>
// )
// }

export default StatefulSourceBox





















// This takes in the deskType passed from Container and checks style. Grabs css for that style
const switchStyle = (deskType, backgroundColor) => {
    switch (deskType) {
        case 'desk-horizontal':
            return Object.assign({}, style, { backgroundColor });
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

const styles = {
    border: '1px solid gray',
    width: '80px',
    height: '60px',
    padding: '3px',
    cursor: 'move',
}

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