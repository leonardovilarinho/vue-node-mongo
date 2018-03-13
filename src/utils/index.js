export const generateArrayColors = n => {
  let result = []
  const letters = "0123456789ABCDEF".split("")
  for (let n_color = 0; n_color <= n; n_color++) {
    let color = "#"
    for (let i = 0; i < 6; i++)
      color += letters[Math.floor(Math.random() * 16)]

    result.push(color)
  }

  return result
}
