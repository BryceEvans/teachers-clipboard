import React, { useEffect, useState, memo } from 'react'
import Box from './Box'
const styles = {
  display: 'inline-block',
}

const BoxDragPreview = memo(({ title, deskType }) => {
  // console.log('title:', title)
  // console.log('BOX DRAG PREVdeskType:', deskType)
  
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
      <Box title={title} deskType={deskType} color={tickTock = true} />
    </div>
  )
})
export default BoxDragPreview
