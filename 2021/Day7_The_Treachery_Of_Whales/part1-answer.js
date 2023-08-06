const {readInput} = require('../utils/readInput')

const calculateFuel = (positions, number) => {
    return positions.reduce((fuel, num) => fuel + (Math.abs(num - number)), 0)
}

const solve = (data) => {
    const positions = data.split(',').map((n) => Number(n))
    const [minAlignPos, maxAlignPos] = positions.reduce(
        ([min, max], pos) => [Math.min(min, pos), Math.max(max, pos)],
        [positions[0], positions[0]]
    )
    let minFuel
    for (let alignPos = minAlignPos; alignPos <= maxAlignPos; alignPos++) {
        let fuel = calculateFuel(positions, alignPos) 
        if (fuel < minFuel || !minFuel)
            minFuel = fuel
    }

    return minFuel
}

(async () => {
    const data = await readInput('./inputs.txt')
    console.log(solve(data))
})()
