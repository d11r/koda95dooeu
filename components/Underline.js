const random = (from, to) => Math.floor(Math.random() * (to - from) + from)

export default function Underline({children}) {
  const strokeWidth = random(16, 20) / 100
  const height = random(4, 8)
  let lines = random(2, 4)
  let d = `M ${random(-5, 15)} ${random(-2, 2)}`
  let line = 0

  // Draw the lines
  while (line++ < lines) {
    const y = line * (height / lines) // Draw every line lower than the previous one
    d +=
      ` Q ${random(30, 70)}` + // The x coordinate of the curve's center
      ` ${random(y - 5, y + 5)}` + // The y coordinate of the curve's center
      ` ${line % 2 === 0 ? random(-5, 15) : random(85, 105)}` + // The x coordinate of the curve's end, alternating between right to left based on the current line number
      ` ${random(y - 2, y + 2)}` // The y coordinate of the curve's end
  }

  return (
    <div className="pen-stroke">
      {children}
      <svg
        viewBox={`0 0 100 ${height}`}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path d={d} strokeWidth={`${strokeWidth}em`} />
      </svg>
    </div>
  )
}
