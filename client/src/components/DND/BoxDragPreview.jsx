import React, { useEffect, useState, memo } from 'react'
import Box from './Box'
const styles = {
  display: 'inline-block',
  // transform: 'rotate(-35deg)',
  // WebkitTransform: 'rotate(-45deg)',
}

const BoxDragPreview = memo(({ title, deskType, students }) => {

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
      <Box title={title} deskType={deskType} students={students} color={tickTock = true} />
    </div>
  )
})
export default BoxDragPreview
