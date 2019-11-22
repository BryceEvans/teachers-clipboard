import React, { useEffect, useState, memo } from 'react'
import Desk from './Desk'
const styles = {
  display: 'inline-block',
  // transform: 'rotate(-35deg)',
  // WebkitTransform: 'rotate(-45deg)',
}

const DeskDragPreview = memo(({ title, deskType, students }) => {

  let [tickTock, setTickTock] = useState(false)
  
  useEffect(
    function subscribeToIntervalTick() {
        const interval = setInterval(() => setTickTock(!tickTock), 500)
        return () => clearInterval(interval)
    },
        [tickTock],
  )

  return (
    <div style={styles}>
      <Desk title={title} deskType={deskType} students={students} color={tickTock = true} />
    </div>
  )
})
export default DeskDragPreview
