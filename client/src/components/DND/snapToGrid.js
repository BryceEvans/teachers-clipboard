export default function snapToGrid(x, y) {
  const snappedX = Math.round(x / 20) * 20
  const snappedY = Math.round(y / 20) * 20
  return [snappedX, snappedY]
}
