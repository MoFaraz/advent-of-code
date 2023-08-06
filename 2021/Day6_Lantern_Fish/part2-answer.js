const {readInput} = require('../utils/readInput')

const sumFish = (occurenceArray) => {
  return occurenceArray.reduce((sum, fishCount) => sum + fishCount, 0)
}

const solve = (data) => {
  const fish = data.split(',').map((n) => Number(n))
  const fishOccurence = Array(9).fill(0)

  fish.forEach((f) => fishOccurence[f]++)

  for (let day = 1; day <= 256; day++) {
    const newFishCount = fishOccurence.shift()
    fishOccurence[6] += newFishCount
    fishOccurence.push(newFishCount)
  }
  return sumFish(fishOccurence)
}

(async () => {
    const data = await readInput('./inputs.txt')
    console.log(solve(data))
    })()
