import React from 'react'

 const Square = ({ black, children }) => {
    //  console.log("Children?", children)
  // const fill = black ? 'black' : 'white'
  // const stroke = black ? 'white' : 'black'

  return (
    <div
      style={{
        border: '1px solid black',
        backgroundColor: "white",
        // color: stroke,
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  )
}

export default Square