import React from 'react'
const styles = {
  border: '1px solid gray',
  width: '100px',
  height: '60px',
  padding: '3px',
  cursor: 'move',
}
const Rectangle = ({ title, color }) => {
  const backgroundColor = color ? 'lightgrey' : 'white'

  return (
    <div style={Object.assign({}, styles, { backgroundColor })}>{title}</div>
  )
}
export default Rectangle
