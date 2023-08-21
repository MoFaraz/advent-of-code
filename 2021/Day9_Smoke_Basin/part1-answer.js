const {readInput} = require('../utils/readInput')

const lowPoint = (data, col, row, i, j) => {
    if (i - 1 >= 0 && data[i][j] >= data[i - 1][j]) {
    return false
  }
  if (i + 1 < row && data[i][j] >= data[i + 1][j]) {
    return false
  }
  if (j - 1 >= 0 && data[i][j] >= data[i][j - 1]) {
    return false
  }
  if (j + 1 < col && data[i][j] >= data[i][j + 1]) {
    return false
  }

  return true
}

const solve = (data) => {
    const heightMap = data.split('\n').map((line) => 
        line.split('').map((height) => (height)))

    const row = heightMap[0].length
    const col = heightMap.length
    let answer = 0

    heightMap.forEach((line, i) => {
        line.forEach((height, j) => {
            if (lowPoint(heightMap, col, row, i, j))
                answer += height + 1
        })
    })

    console.log(answer)

}

(async () => {
    const data = await readInput('./inputs2.txt')
    solve(data)
})()
