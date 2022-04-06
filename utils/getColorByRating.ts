export const getColorByRating = (color: number) => {
  if (color < 2.5) return '#f24444'
  else if (color < 3.5) return '#efaa16'
  else return '#2cd023'
}
