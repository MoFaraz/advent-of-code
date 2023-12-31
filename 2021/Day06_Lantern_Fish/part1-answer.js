import { readInput } from '../utils/readInput.js'

const solve = (data) => {
    let fish = data.split(',').map((n) => Number(n))

    const getNewFishPopulation = (fish) => {
    let newFishCount = 0
    const newFishPopulation = fish.map((f) => {
        if (f === 0) {
        newFishCount++
        return 6
    }
        return f - 1
  })
    newFishPopulation.push(...Array(newFishCount).fill(8))
    return newFishPopulation
}
    for (let day = 1; day <= 80; day++) {
        fish = getNewFishPopulation(fish)
    }
    return fish.length

}


(async () => {
    const data = await readInput('./inputs.txt')
    console.log(solve(data))
    })()

