// Deterministic decorative pattern that looks like a QR code. It is NOT a
// scannable code — screens using it are labelled "Illustrative".
export function qrPattern(size = 21, seed = 7): boolean[] {
  let s = seed
  const rnd = () => (s = (s * 1103515245 + 12345) % 2147483648) / 2147483648
  const finder = (r: number, c: number): boolean | null => {
    const boxes: [number, number][] = [[0, 0], [0, size - 7], [size - 7, 0]]
    for (const [r0, c0] of boxes) {
      if (r >= r0 && r < r0 + 7 && c >= c0 && c < c0 + 7) {
        const y = r - r0, x = c - c0
        return y === 0 || y === 6 || x === 0 || x === 6 || (y >= 2 && y <= 4 && x >= 2 && x <= 4)
      }
    }
    return null
  }
  const cells: boolean[] = []
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const f = finder(r, c)
      cells.push(f === null ? rnd() > 0.52 : f)
    }
  }
  return cells
}
