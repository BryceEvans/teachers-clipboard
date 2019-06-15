import React from 'react'
const styles = {
  border: '1px dashed gray',
  width: '59px',
  height: '39px',
  padding: '3px',
  cursor: 'move',
}
const Box = ({ title, color }) => {
  const backgroundColor = color ? 'lightgrey' : 'white'
  return (
    <div style={Object.assign({}, styles, { backgroundColor })}>{title}</div>
  )
}
export default Box
