export const generatedTotal = (items: number, itemporpage: number) => {
  const n = Math.ceil(items / itemporpage)
  return Array(n)
    .fill(null)
    .map((_, i) => i + 1)
}
