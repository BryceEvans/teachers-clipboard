import React from 'react'

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

const Box = ({ title, deskType, color }) => {  
  const backgroundColor = color ? 'lightgrey' : 'white'
  
  let x = switchStyle(deskType, backgroundColor)

  return (
    <div style={x}>
        {title}
    </div>
  )
}

// This takes in the deskType passed from Container and checks style. Grabs css for that style
const switchStyle = (deskType, backgroundColor) => {
  switch(deskType) {
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
    default:
        return Object.assign({}, styles, { backgroundColor });
  }
}

export default Box
