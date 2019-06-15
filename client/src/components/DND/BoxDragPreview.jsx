import React, { useEffect, useState, memo } from 'react'
import Box from './Box'
const styles = {
  display: 'inline-block',
}

const BoxDragPreview = memo(({ title }) => {
  let [tickTock, setTickTock] = useState(false)
  console.log('tickTock:', tickTock)
  useEffect(
    function subscribeToIntervalTick() {
      const interval = setInterval(() => setTickTock(!tickTock), 500)
      return () => clearInterval(interval)
    },
    [tickTock],
  )
  return (
    <div style={styles}>
      <Box title={title} color={tickTock = true} />
    </div>
  )
})
export default BoxDragPreview
